import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/constants/data";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">
            Post Not Found
          </h1>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
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
          <Link to="/blog">
            <Button
              variant="outline"
              className="hover:border-accent hover:bg-accent/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="mb-8">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-glow">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <span className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {post.readTime}
              </span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="hover:border-primary hover:text-primary"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share Article
            </Button>
          </header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-12 rounded-xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50" />
            <img
              src={post.image}
              alt={post.title}
              className="relative w-full rounded-xl border border-border shadow-2xl"
            />
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-invert max-w-none"
          >
            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
              {post.content.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="text-3xl font-heading font-bold mt-12 mb-4 text-foreground"
                    >
                      {block.text}
                    </h2>
                  );
                }
                return (
                  <p
                    key={index}
                    className="text-lg text-muted-foreground leading-relaxed"
                  >
                    {block.text}
                  </p>
                );
              })}
            </div>
          </motion.div>
        </motion.article>

        {/* More Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-heading font-bold mb-8">
            More Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter((p) => p.id !== id)
              .slice(0, 2)
              .map((otherPost, index) => (
                <Link to={`/blog/${otherPost.id}`} key={otherPost.id}>
                  <motion.div
                    key={otherPost.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="group relative h-full"
                  >
                    <div className="absolute inset-0 bg-accent/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="relative bg-card/30 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 flex flex-col h-full">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={otherPost.image}
                          alt={otherPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <span className="inline-block px-3 py-1 bg-muted/50 text-muted-foreground rounded text-xs mb-3 w-fit">
                          {otherPost.category}
                        </span>
                        <h3 className="text-xl font-heading font-bold mb-2">
                          {otherPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                          {otherPost.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {otherPost.readTime}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
