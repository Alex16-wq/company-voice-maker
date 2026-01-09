import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 border border-cream rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-cream rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cream rounded-full" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              Trusted Since Establishment
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6"
          >
            Your Trusted Partner in{" "}
            <span className="text-gradient-gold">Financial Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-cream/80 mb-10 max-w-2xl mx-auto"
          >
            Certified Public Accountants, Auditors & Tax Consultants providing comprehensive 
            financial solutions across Tanzania with integrity and professional expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 shadow-gold">
              <a href="#services" className="flex items-center gap-2">
                Explore Our Services <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" className="bg-cream text-primary hover:bg-cream/90 text-base px-8">
              <a href="#contact">Contact Us Today</a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 px-6 py-4 bg-cream/5 rounded-xl border border-cream/10">
              <Shield className="h-8 w-8 text-accent" />
              <div className="text-left">
                <p className="text-2xl font-bold text-cream">15+</p>
                <p className="text-sm text-cream/60">Years Experience</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 px-6 py-4 bg-cream/5 rounded-xl border border-cream/10">
              <Award className="h-8 w-8 text-accent" />
              <div className="text-left">
                <p className="text-2xl font-bold text-cream">100+</p>
                <p className="text-sm text-cream/60">Clients Served</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 px-6 py-4 bg-cream/5 rounded-xl border border-cream/10">
              <Users className="h-8 w-8 text-accent" />
              <div className="text-left">
                <p className="text-2xl font-bold text-cream">20+</p>
                <p className="text-sm text-cream/60">Industries</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
