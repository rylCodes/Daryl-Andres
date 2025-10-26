import { useState } from "react";
import { motion } from "framer-motion";
import CertificateSection from "@/components/CertificatesSection";
import {
  dictCertificates,
  sololearnCertificates,
  freeCodeCampCertificates,
  udemyCertificates,
} from "@/constants/data";
import { Button } from "@/components/ui/button";

const allSections = [
  {
    title: "DICT | Certificate of Completion",
    certificates: dictCertificates,
    delay: 0.2,
  },
  {
    title: "SOLOLEARN | Course Certificate",
    certificates: sololearnCertificates,
    delay: 0.3,
  },
  {
    title: "UDEMY | Certificate of Completion",
    certificates: udemyCertificates,
    delay: 0.5,
  },
  {
    title: "FREECODECAMP | Developer Certification",
    certificates: freeCodeCampCertificates,
    delay: 0.4,
  },
];

const Certificates = ({
  isFullPage = true,
  visibleSections = 2,
}: {
  isFullPage?: boolean;
  visibleSections?: number;
}) => {
  const [showAll, setShowAll] = useState(false);

  const sectionsToDisplay = showAll
    ? allSections
    : allSections.slice(0, visibleSections);

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
            Certificates
          </h2>
          <p className="text-xl text-muted-foreground">
            Courses I've taken to learn and improve my skills in web
            development.
          </p>
        </motion.div>

        {/* Certificate Sections */}
        {sectionsToDisplay.map((section) => (
          <CertificateSection
            key={section.title}
            title={section.title}
            certificates={section.certificates}
            delay={showAll ? 0 : section.delay}
          />
        ))}

        {/* See More Button */}
        {!showAll && allSections.length > visibleSections && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(true)}
              className="hover:cosmic-gradient"
            >
              See More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
