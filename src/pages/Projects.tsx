import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/constants/data";
import { useNavigate } from "react-router-dom";

const publishedProjects = projects.filter((project) => project.published);

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6 text-glow">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            Stuff I’ve built — and had fun doing it.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-heading font-semibold mb-8 flex items-center"
          >
            <span className="text-primary mr-2">★</span> Featured
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {publishedProjects
              .filter((p) => p.featured)
              .map((project, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  key={project.title}
                  className="group relative cursor-pointer"
                  onClick={() => navigate(`/projects/${project.id}`)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-xl group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <Card className="relative bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 h-full overflow-hidden flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <h3 className="text-2xl font-heading font-bold mb-3 transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 flex-grow line-clamp-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-3">
                        <Button
                          size="sm"
                          className="cosmic-gradient hover:border-glow transition-all duration-300"
                          onClick={(e) => e.preventDefault()}
                        >
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="h-4 w-4 mr-2 inline" />
                            Live Demo
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:border-accent hover:bg-accent/10"
                          onClick={(e) => e.preventDefault()}
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="h-4 w-4 mr-2 inline" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="max-w-5xl mx-auto ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl font-heading font-semibold mb-8"
          >
            More Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishedProjects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  key={project.title}
                  className="group relative cursor-pointer"
                  onClick={() => navigate(`/projects/${project.id}`)}
                >
                  <div className="absolute inset-0 bg-accent/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <Card className="relative bg-card/30 backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-300 h-full overflow-hidden flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-heading font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
