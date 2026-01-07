import lagheLogo from "@/assets/laghe-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src={lagheLogo} alt="LAGHE Consult - Certified Public Accountants" className="h-14 w-auto bg-cream rounded-lg p-2" />
            </div>
            <p className="text-cream/70 max-w-md">
              A registered Consulting Firm of experienced Certified Public Accountants and 
              Auditors providing comprehensive financial solutions across Tanzania.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-cream/70 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-cream/70 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="text-cream/70 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#clients" className="text-cream/70 hover:text-accent transition-colors">Clients</a></li>
              <li><a href="#contact" className="text-cream/70 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li><span className="text-cream/70">Accounting Services</span></li>
              <li><span className="text-cream/70">Auditing Services</span></li>
              <li><span className="text-cream/70">Taxation Services</span></li>
              <li><span className="text-cream/70">Business Management</span></li>
              <li><span className="text-cream/70">Project Appraisal</span></li>
            </ul>
          </div>
        </div>

        {/* Registration Info */}
        <div className="border-t border-cream/10 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-cream/60">
            <span>Certificate of Registration: 218997</span>
            <span className="hidden sm:inline">•</span>
            <span>Audit Firm Reg: PF234</span>
            <span className="hidden sm:inline">•</span>
            <span>TIN: 174-479-798</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-cream/50 text-sm">
          <p>© {new Date().getFullYear()} LAGHE CONSULT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
