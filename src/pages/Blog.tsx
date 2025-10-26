import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/constants/data";

const publishedBlogs = blogPosts.filter((post) => post.published);

const Blog = () => {
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
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            My notes and reflections on coding, learning, and life in tech.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-heading font-semibold mb-8 flex items-center"
          >
            <span className="text-primary mr-2">★</span> Featured Articles
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {publishedBlogs
              .filter((p) => p.featured)
              .map((post, index) => (
                <Link to={`/blog/${post.id}`} key={post.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="group relative h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                    <Card className="relative bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 h-full overflow-hidden flex flex-col">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />
                      </div>
                      <CardContent className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                            {post.category}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-glow transition-all duration-300">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                          {post.excerpt}
                        </p>
                        <Button
                          variant="link"
                          className="p-0 text-primary hover:text-primary-glow w-fit"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl font-heading font-semibold mb-8"
          >
            More Articles
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishedBlogs
              .filter((p) => !p.featured)
              .map((post, index) => (
                <Link to={`/blog/${post.id}`} key={post.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="group relative h-full"
                  >
                    <div className="absolute inset-0 bg-accent/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <Card className="relative bg-card/30 backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-300 h-full overflow-hidden flex flex-col">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />
                      </div>
                      <CardContent className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                          <span className="px-2 py-1 bg-muted/50 rounded">
                            {post.category}
                          </span>
                          <span>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
