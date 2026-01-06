import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to <span className="text-gradient-gold">Work Together?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Contact us today to discuss how we can assist with your accounting, 
            auditing, and business advisory needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Office Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Head Office */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Head Office</h3>
                  <p className="text-sm text-accent">Dar es Salaam</p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Plot No: 354/64, 2nd Floor<br />
                  CO-Architecture Building<br />
                  Bridge/India Street<br />
                  P.O. Box 33031, Dar es Salaam
                </p>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-accent" />
                  <a href="tel:+255222137731" className="hover:text-foreground transition-colors">
                    +255 22 213 7731
                  </a>
                </div>
              </div>
            </div>

            {/* Branch Office */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Branch Office</h3>
                  <p className="text-sm text-muted-foreground">Iringa</p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Ground Floor, IMUCU Building<br />
                  Uhuru Street<br />
                  P.O. Box 783, Iringa
                </p>
                <p className="text-sm">
                  Representatives also in: Kahama, Mafinga, Njombe, Singida, Mwanza, Tanga
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Phone</p>
                    <a href="tel:+255754293892" className="text-muted-foreground hover:text-foreground transition-colors">
                      +255 754 293 892 (Managing Partner)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Email</p>
                    <div className="space-y-1">
                      <a href="mailto:info@lagheconsult.co.tz" className="block text-muted-foreground hover:text-foreground transition-colors">
                        info@lagheconsult.co.tz
                      </a>
                      <a href="mailto:leopold@lagheconsult.co.tz" className="block text-muted-foreground hover:text-foreground transition-colors">
                        leopold@lagheconsult.co.tz
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Website</p>
                    <a 
                      href="https://www.lagheconsult.co.tz" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      www.lagheconsult.co.tz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Business Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold">
              <a href="mailto:info@lagheconsult.co.tz" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Send Us an Email
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
