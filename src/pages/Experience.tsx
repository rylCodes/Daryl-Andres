import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experiences } from "@/constants/data";

const Experience = ({ isFullPage = true }) => {
  return (
    <div className={`${isFullPage ? "min-h-screen py-20" : "pb-16"}`}>
      <div className="container mx-auto px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-heading font-bold mb-6 text-glow">
            Experience and Education
          </h2>
          <p className="text-xl text-muted-foreground">
            A timeline of growth, challenges, and achievements.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/50">
                      {exp.type === "work" ? (
                        <Briefcase className="h-7 w-7 text-accent" />
                      ) : (
                        <GraduationCap className="h-7 w-7 text-accent" />
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-[calc(50%-4rem)] ml-24 md:ml-0 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50" />
                      <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                        {/* Period Badge */}
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                          {exp.period}
                        </div>

                        {/* Title & Company */}
                        <h3 className="text-xl font-heading font-bold mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-accent font-medium mb-3">
                          {exp.company}
                        </p>

                        {/* Description */}
                        <p className="text-muted-foreground mb-4">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        {exp.achievements && (
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start text-sm text-muted-foreground"
                              >
                                <span className="text-primary mr-2 mt-1">
                                  ▹
                                </span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl mx-auto mt-20"
        >
          <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 border-glow">
            <h2 className="text-2xl font-heading font-bold mb-6 text-center">
              Key Competencies
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Architecture",
                  skills: [
                    "Modular architecture",
                    "API-driven (REST/GraphQL)",
                    "Basic System Design",
                  ],
                },
                {
                  title: "Performance",
                  skills: [
                    "Optimization & caching",
                    "Basic CDN usage",
                    "Efficient API handling",
                  ],
                },
                {
                  title: "Leadership",
                  skills: [
                    "Mentoring & code review",
                    "Promoting best practices",
                    "Writing clear documentation",
                  ],
                },
              ].map((category, index) => (
                <div key={category.title}>
                  <h3 className="text-lg font-heading font-semibold mb-3 text-primary">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-muted-foreground flex items-center"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
