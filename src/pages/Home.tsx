import { useRef, lazy, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-metalcore.jpg";

// Lazy load components
const AboutComponent = lazy(() => import("./About"));
const TechStackComponent = lazy(() => import("./TechStack"));
const ExperienceComponent = lazy(() => import("./Experience"));
const CertificatesComponent = lazy(() => import("./Certificates"));

// Loading fallback component
const SectionSkeleton = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-muted rounded w-1/3 mx-auto"></div>
      <div className="h-4 bg-muted rounded w-2/3 mx-auto"></div>
      <div className="h-32 bg-muted rounded"></div>
    </div>
  </div>
);

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const isMobile = window.innerWidth < 768;

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "0%"] : ["0%", "50%"]
  );

  const particlesY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const contentOpacity = useTransform(scrollYProgress, [0.25, 0.75], [1, 0]);

  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, 0]
  );

  return (
    <>
      <div
        ref={ref}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Hero Background */}
        <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </motion.div>

        <motion.div className="absolute inset-0 z-0" style={{ y: particlesY }}>
          <ParticleBackground />
        </motion.div>

        <motion.div
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="h-4 w-4 text-primary animate-glow-pulse" />
              <span className="text-sm font-medium text-primary">
                Full Stack Developer
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl font-heading font-bold mb-4 leading-tight"
            >
              <span className="text-glow">Hey, I’m Daryl.</span>
              <br />
              <span className="text-transparent !bg-clip-text bg-gradient-to-r from-primary from-40% to-accent">
                I Build Modern Web Apps
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto"
            >
              Crafting clean, scalable, and visually sharp web experiences —
              where <span className="text-primary font-semibold">logic</span>{" "}
              meets{" "}
              <span className="text-accent font-semibold">creativity</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="cosmic-gradient hover:border-glow transition-all duration-300"
              >
                <Link to="/projects" className="flex items-center">
                  <Code2 className="h-5 w-5" />
                  <span>View Projects</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent/30 hover:border-accent hover:bg-accent/10"
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* About */}
      <Suspense fallback={<SectionSkeleton />}>
        <AboutComponent isFullPage={false} />
      </Suspense>

      {/* Tech Stack */}
      <Suspense fallback={<SectionSkeleton />}>
        <TechStackComponent isFullPage={false} />
      </Suspense>

      {/* Certificates */}
      <Suspense fallback={<SectionSkeleton />}>
        <CertificatesComponent isFullPage={false} />
      </Suspense>

      {/* Experience */}
      <Suspense fallback={<SectionSkeleton />}>
        <ExperienceComponent isFullPage={false} />
      </Suspense>

      {/* CTA section */}
      <div className="relative">
        <motion.section
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl mx-auto text-center bg-background/50">
            <Sparkles className="h-8 w-8 text-primary mx-auto mb-4 animate-glow-pulse" />
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
              Let's Build Together
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
              Have a project in mind or just want to connect? I'd love to hear
              from you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="cosmic-gradient hover:border-glow transition-all duration-300"
              >
                <Link to="/contact" className="flex items-center">
                  <Sparkles className="h-5 w-5" />
                  <span>Get In Touch</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent/30 hover:border-accent hover:bg-accent/10"
              >
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Home;
