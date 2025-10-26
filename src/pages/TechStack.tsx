import { motion } from "framer-motion";
import { currentTechStack, techCategories } from "@/constants/data";

const TechStack = ({ isFullPage = true }) => {
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
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground">
            Tools and technologies I’ve learned and continue to grow with.
          </p>
        </motion.div>

        {/* CURRENT TECH STACK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl mx-auto mb-20 text-center"
        >
          <h2 className="text-xl mb-8 text-muted-foreground">
            <span className="font-heading font-semibold text-primary">
              Current Tech Stack:{" "}
            </span>
            The tools I actively use in my current role to build and maintain
            scalable web applications.
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {currentTechStack.map((tech, index) => (
              <motion.a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="tech-icon group"
              >
                <div className="relative flex flex-col items-center">
                  <div className="p-3 rounded-xl bg-card border border-border shadow-md hover:border-primary/50 transition-all">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                  <span className="text-sm mt-2 text-muted-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* PROGRESS BAR TECH STACK */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50" />
                <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 h-full">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center ${category.color}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-heading font-bold">
                      {category.category}
                    </h3>
                  </div>

                  {/* Technologies with Progress */}
                  <div className="space-y-3">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: techIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">
                            {tech.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {tech.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${tech.level}%` }}
                            transition={{
                              duration: 1,
                              delay: 0.5 + catIndex * 0.1 + techIndex * 0.05,
                            }}
                            className="h-full bg-gradient-to-r from-primary from-60% to-accent rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
