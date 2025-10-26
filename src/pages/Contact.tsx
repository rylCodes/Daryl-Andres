import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  Send,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "darylandres.10@gmail.com",
      link: "mailto:darylandres.10@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Antipolo City, Rizal, Philippines",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", link: "https://github.com/rylCodes" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/daryl-andres/",
    },
    {
      icon: Facebook,
      label: "Facebook",
      link: "https://www.facebook.com/dada.andres10",
    },
  ];

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
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Let's build something amazing together. Drop me a message.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative group">
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300">
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background/50 transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background/50 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full cosmic-gradient hover:border-glow transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="mr-2"
                        >
                          <Send className="h-4 w-4" />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="bg-card/30 backdrop-blur-sm border border-accent/20 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-glow-pulse mt-1" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">
                      Currently Available
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Open to exciting freelance projects and future
                      opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative group">
                <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300">
                  <h2 className="text-2xl font-heading font-bold mb-6">
                    Contact Info
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((info) => {
                      const Icon = info.icon;
                      return (
                        <div
                          key={info.label}
                          className="flex items-start space-x-4"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">
                              {info.label}
                            </p>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="font-medium hover:text-primary transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="font-medium">{info.value}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <div className="relative group">
                <div className="relative bg-card/50 backdrop-blur-sm border rounded-xl p-8 hover:border-primary/30 transition-all duration-300">
                  <h2 className="text-2xl font-heading font-bold mb-6">
                    Résumé
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download my résumé to see my skills and experience.
                  </p>
                  <a
                    href="/files/daryl-andres-cv.pdf"
                    download
                    className="inline-flex items-center px-4 py-2 rounded-lg font-medium cosmic-gradient hover:border-glow transition-all duration-300"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative group">
                <div className="relative bg-card/50 backdrop-blur-sm border rounded-xl p-8 hover:border-primary/30 transition-all duration-300">
                  <h2 className="text-2xl font-heading font-bold mb-6">
                    Connect
                  </h2>
                  <div className="grid grid-cols-3 gap-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/social relative"
                        >
                          <div className="absolute inset-0 bg-primary/20 rounded-lg blur opacity-0 group-hover/social:opacity-100 transition-opacity" />
                          <div className="relative aspect-square bg-muted/30 rounded-lg flex flex-col items-center justify-center hover:bg-primary/10 transition-all duration-300 border border-transparent hover:border-primary/30">
                            <Icon className="h-6 w-6 mb-2 text-muted-foreground group-hover/social:text-primary transition-colors" />
                            <span className="text-xs font-medium">
                              {social.label}
                            </span>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
