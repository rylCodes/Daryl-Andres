"use client";

import { motion } from "framer-motion";
import { ExternalLink, X, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Certificate } from "@/types/data";
import type { CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CertificateSection = ({
  title,
  certificates,
  delay,
}: {
  title: string;
  certificates: Certificate[];
  delay: number;
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!api) return;

    const updateScrollButtons = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    updateScrollButtons();
    api.on("select", updateScrollButtons);
    api.on("reInit", updateScrollButtons);

    return () => {
      api.off("select", updateScrollButtons);
      api.off("reInit", updateScrollButtons);
    };
  }, [api]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mb-16 max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-heading font-bold mb-8 flex items-center">
          <span className="text-primary mr-3">▸</span> {title}
        </h2>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000 * (delay + 1),
              stopOnMouseEnter: true,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {certificates.map((cert, index) => (
              <CarouselItem
                key={cert.name}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: delay + 0.1 + index * 0.1 }}
                  className="group relative block"
                >
                  <div className="absolute inset-0 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <Card
                    onClick={() => setSelectedCert(cert)}
                    className="relative bg-card/30 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 h-full overflow-hidden cursor-pointer"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-heading font-bold truncate mb-3 group-hover:text-glow transition-all duration-300">
                        {cert.name}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground group-hover:text-accent transition-colors">
                        <Award className="h-4 w-4 mr-2" />
                        View Certificate
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {canScrollPrev && <CarouselPrevious className="hover:bg-primary" />}
          {canScrollNext && <CarouselNext className="hover:bg-primary" />}
        </Carousel>
      </motion.div>

      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-fit border-0 bg-transparent p-0 [&>button]:hidden">
          <DialogClose asChild>
            <button
              className="absolute top-2 right-2 rounded-full p-2 bg-background/60 hover:bg-background transition-colors !block"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </DialogClose>
          <div className="flex items-center justify-center max-h-[80vh] overflow-auto">
            <img
              src={selectedCert?.image || "/placeholder.svg"}
              alt={selectedCert?.name}
              className="max-w-full max-h-[75vh] object-contain rounded-md"
            />
          </div>

          {/* Footer */}
          <div className="text-center">
            <h3 className="text-xl font-heading font-bold mb-4 text-white">
              {selectedCert?.name}
            </h3>
            <a
              href={selectedCert?.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={async () => setTimeout(() => setSelectedCert(null), 100)}
            >
              <Button className="w-full sm:w-auto cosmic-gradient hover:border-glow transition-all duration-300">
                <ExternalLink className="h-4 w-4" />
                Check it out
              </Button>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CertificateSection;
