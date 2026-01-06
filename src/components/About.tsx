import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Users2 } from "lucide-react";
import managingPartnerImage from "@/assets/managing-partner.jpeg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const credentials = [
    "Registered with National Board of Accountants and Auditors (NBAA)",
    "Approved Tax Consultants by Tanzania Revenue Authority (TRA)",
    "Members of Tanzania Association of Tax Consultants (TATC)",
    "Certificate of Registration No. 218997",
    "Audit Firm Registration No. PF234",
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              About Our Firm
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Professional Excellence in{" "}
              <span className="text-gradient-gold">Accounting & Advisory</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              LAGHE CONSULT is a Partnership Business registered as a Consulting Firm of 
              experienced Certified Public Accountants and Auditors, approved for Public 
              Practices by the Board of Directors of the National Board of Accountants and 
              Auditors (NBAA).
            </p>
            <p className="text-muted-foreground mb-8">
              Our Partners are also registered Tax Consultants, approved by Tanzania Revenue 
              Authority (TRA) and members of Tanzania Association of Tax Consultants (TATC). 
              We operate with a team of well-qualified Accountants representing our firm across 
              various regions in Tanzania.
            </p>

            <div className="space-y-3">
              {credentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
              <div className="flex items-start gap-5 mb-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 border-2 border-accent/20">
                  <img 
                    src={managingPartnerImage} 
                    alt="CPA Leopold Gervase Bulondo - Managing Partner" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Managing Partner</h3>
                  <p className="text-accent font-medium">CPA Leopold Gervase Bulondo</p>
                  <p className="text-xs text-muted-foreground mt-1">ACPA-PP Reg. No. 898</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                A highly qualified professional in Financial and Management issues with extensive 
                working experience in locally and internationally owned Private Companies and 
                Parastatal Organizations. Registered as Associate Certified Public Accountant in 
                Public Practices (ACPA-PP) with registration number 898.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Users2 className="h-7 w-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Audit Manager</h3>
                  <p className="text-accent font-medium">CPA Idris Shabani Sheuya</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Head of Advisory Services managing all aspects including taxation services and 
                other advisory services across business environments. Leading a team of qualified 
                professionals with expertise in various sectors.
              </p>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Our Network:</span> We operate in 
                association with various Professional Freelancers including Certified Public 
                Accountants, Procurement Personnel, Researchers, HR Specialists, Medical 
                Professionals, and more.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
