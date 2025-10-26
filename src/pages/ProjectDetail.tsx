import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/data";

const ProjectDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">
            Project Not Found
          </h1>
          <Link to="/projects">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-5xl mx-auto px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link to="/projects">
            <Button
              variant="outline"
              className="hover:border-accent hover:bg-accent/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6 text-glow">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="cosmic-gradient hover:border-glow transition-all duration-300"
            >
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Demo
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="hover:border-accent hover:bg-accent/10"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View Source Code
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-12 rounded-xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50" />
          <img
            src={project.image}
            alt={project.title}
            className="relative w-full rounded-xl border border-border shadow-2xl"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-heading font-bold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-invert max-w-none"
        >
          <h2 className="text-3xl font-heading font-bold mb-6">Overview</h2>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                Challenge
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.challenge}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                Solution
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.solution}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                Results
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.results}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-heading font-bold mb-6">
              Key Features
            </h2>
            <div className="space-y-3">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-heading font-bold mb-8">
            More Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => p.id !== id)
              .slice(0, 2)
              .map((otherProject, index) => (
                <motion.div
                  key={otherProject.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="group relative cursor-pointer"
                  onClick={() => navigate(`/projects/${otherProject.id}`)}
                >
                  <div className="absolute inset-0 bg-accent/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="relative bg-card/30 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 flex flex-col h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={otherProject.image}
                        alt={otherProject.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-bold mb-2">
                        {otherProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {otherProject.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
