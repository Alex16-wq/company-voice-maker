import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building, Plane, Stethoscope, GraduationCap, Truck, Banknote } from "lucide-react";

const sectors = [
  { icon: Building, label: "Construction", count: "15+" },
  { icon: Plane, label: "Safari & Tourism", count: "10+" },
  { icon: Stethoscope, label: "Healthcare", count: "8+" },
  { icon: GraduationCap, label: "Education", count: "6+" },
  { icon: Truck, label: "Transport & Logistics", count: "8+" },
  { icon: Banknote, label: "Microfinance", count: "5+" },
];

const locations = [
  "Dar es Salaam",
  "Iringa",
  "Kahama",
  "Mafinga",
  "Njombe",
  "Singida",
  "Mwanza",
  "Tanga",
];

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="clients" className="py-24 bg-primary" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
            Our Reach
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6">
            Trusted Across <span className="text-gradient-gold">Industries</span>
          </h2>
          <p className="text-lg text-cream/70">
            We've proudly served over 80 clients across diverse sectors, building long-term 
            relationships based on trust, expertise, and exceptional service delivery.
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-cream/5 border border-cream/10 rounded-xl p-6 text-center hover:bg-cream/10 transition-colors"
              >
                <Icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="text-cream font-medium text-sm mb-1">{sector.label}</p>
                <p className="text-accent text-lg font-bold">{sector.count}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-cream/5 border border-cream/10 rounded-2xl p-8 md:p-12"
        >
          <h3 className="font-serif text-2xl font-semibold text-cream text-center mb-8">
            Serving Clients Across Tanzania
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((location, index) => (
              <motion.span
                key={location}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="px-5 py-2.5 rounded-full bg-accent/20 text-accent text-sm font-medium"
              >
                {location}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          <div>
            <p className="text-4xl md:text-5xl font-bold text-accent mb-2">80+</p>
            <p className="text-cream/70">Clients Served</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-accent mb-2">8+</p>
            <p className="text-cream/70">Regions Covered</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</p>
            <p className="text-cream/70">Industries</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-accent mb-2">7</p>
            <p className="text-cream/70">Core Services</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
