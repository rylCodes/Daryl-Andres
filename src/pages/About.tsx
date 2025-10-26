import { motion } from "framer-motion";
import { Guitar } from "lucide-react";
import { WistiaPlayer } from "@wistia/wistia-player-react";
import HandRockIcon from "@/components/icons/HandRockIcon";

const About = ({ isFullPage = true }) => {
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
            About Me
          </h2>
          <p className="text-xl text-muted-foreground">
            A developer who turned self-learning into a full-fledged career —
            mixing riffs, ideas, and code into something loud and clean.
          </p>
        </motion.div>

        {/* Personal Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary">
              My Journey
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hello there! I'm{" "}
                <span className="font-semibold">Daryl Andres</span>, a web
                developer who loves building smooth, scalable, and user-friendly
                web apps. I started out learning on my own and turned that
                curiosity into a full-time career in web development.
              </p>
              <p>
                I mostly work with{" "}
                <span className="font-semibold">Next.js</span> and{" "}
                <span className="font-semibold">React</span> on the frontend,
                and <span className="font-semibold">Strapi</span>,{" "}
                <span className="font-semibold">PHP/Symfony</span>, and{" "}
                <span className="font-semibold">MySQL</span> on the backend. I
                enjoy creating things that not only work well but also look
                clean and feel intuitive to use.
              </p>
              <p>
                I'm passionate about solving real-world problems with thoughtful
                design and efficient code. Whether it's improving an existing
                feature or building something from the ground up, I love the
                challenge of making digital experiences simple and enjoyable for
                users.
              </p>
              <p>
                These days, I'm focused on improving my craft, exploring better
                ways to build, optimize, and ship meaningful web experiences.
                I'm also constantly learning new tools and techniques to stay
                sharp in a fast-changing environment.
              </p>
              <p>
                Outside of coding, I like exploring new ideas, learning from
                other developers, and occasionally sharing what I've learned
                along the way.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl mx-auto mt-20"
        >
          <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12 border-glow">
            <h2 className="text-2xl font-heading font-bold mb-6 text-center text-glow">
              Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Growth",
                  desc: "Continuous learning and improvement drive every step of my journey.",
                },
                {
                  title: "Collaboration",
                  desc: "Building together, communicating clearly, and helping teams thrive.",
                },
                {
                  title: "Creativity",
                  desc: "Balancing structure with imagination — turning ideas into experiences.",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-heading font-bold text-transparent !bg-clip-text cosmic-gradient mb-2">
                    0{index + 1}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Leisure & Lifestyle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl mx-auto mt-24"
        >
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
            <div className="flex flex-col-reverse md:flex-row items-center md:space-x-10">
              {/* Text */}
              <div className="flex-1 mt-8 md:mt-0 space-y-4">
                <h2 className="text-3xl font-heading font-bold text-primary flex items-center gap-2">
                  <Guitar className="w-6 h-6 text-primary" />
                  Leisure & Lifestyle
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Guitar playing is something I enjoy. I really like metalcore
                  music, and you might catch me both listening to and
                  occasionally shredding along{" "}
                  <HandRockIcon className="inline text-primary" />.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I also stay active by going to the gym, enjoy watching anime,
                  and play{" "}
                  <span className="font-semibold">Call of Duty: Mobile</span> in
                  my free time.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I balance interests, enjoy life fully, and bring passion to
                  web development projects.
                </p>
              </div>

              {/* Video Embed */}
              <div className="flex-1 w-full text-center">
                <div className="aspect-video rounded-xl overflow-hidden border border-border shadow-lg">
                  <WistiaPlayer mediaId="jpnvqur43w" playerColor="#ee2b2b" />
                </div>
                <p className="mt-2 text-sm italic text-muted-foreground">
                  My guitar cover:{" "}
                  <a
                    href="https://www.youtube.com/watch?v=sh7n4TvXt5A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    "To Plant A Seed" by We Came As Romans
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
