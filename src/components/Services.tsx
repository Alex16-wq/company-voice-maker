import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Calculator, 
  FileSearch, 
  Receipt, 
  Briefcase, 
  TrendingUp, 
  ClipboardCheck,
  Settings
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Accounting Services",
    description: "Complete maintenance of books of accounts including Cash Books, General Ledger, Sales & Purchases Day Books, Fixed Assets Register, and more. Available both manually and through accounting packages.",
    items: ["Cash Books", "General Ledger", "Sales & Purchases Books", "Fixed Assets Register"]
  },
  {
    icon: FileSearch,
    title: "Auditing Services",
    description: "Comprehensive audit procedures as per ISA requirements, including verification of source documents, analytical reviews, and preparation of financial statements per IFRS requirements.",
    items: ["Financial Statement Audits", "NGO Audits", "Value for Money Audits", "Forensic Audits"]
  },
  {
    icon: Receipt,
    title: "Taxation Services",
    description: "Complete tax consultancy including TRA portal registration, preparation of tax estimates, VAT returns, withholding tax management, and handling of tax disputes and appeals.",
    items: ["Tax Return Preparation", "VAT Processing", "Tax Health Audits", "Tax Dispute Resolution"]
  },
  {
    icon: Briefcase,
    title: "Business Management",
    description: "Payroll processing, statutory payments, HR management, administrative policies, compliance checks, and recruitment functions on behalf of clients.",
    items: ["Payroll Processing", "HR Management", "Compliance Checks", "Policy Development"]
  },
  {
    icon: TrendingUp,
    title: "Business Financing",
    description: "Preparation of Business Plans, Financial Statements, Profitability Statements, and Projected Financial Statements based on viable assumptions.",
    items: ["Business Plans", "Financial Projections", "Profitability Analysis", "Funding Facilitation"]
  },
  {
    icon: ClipboardCheck,
    title: "Project Appraisal",
    description: "Preparation of project accounts, reconciliation of funds from various donors, appraisal and evaluation of projects based on TOR, and analytical reviews.",
    items: ["Project Accounts", "Fund Reconciliation", "TOR Evaluation", "Analytical Reviews"]
  },
  {
    icon: Settings,
    title: "Other Services",
    description: "Company registration with BRELA, TIN processing, business license processing, seminars and conferences, and professional advice on various business matters.",
    items: ["Company Registration", "TIN Processing", "Business Licenses", "Training & Seminars"]
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Our Expertise
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive <span className="text-gradient-gold">Professional Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a full spectrum of accounting, auditing, and advisory services tailored 
            to meet the unique needs of businesses across various sectors in Tanzania.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-elevated"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-accent/10 flex items-center justify-center mb-6 transition-colors">
                  <Icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
