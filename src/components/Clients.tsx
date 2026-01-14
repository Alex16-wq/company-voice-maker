import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building, Plane, Stethoscope, GraduationCap, Truck, Banknote, Wifi, ShoppingBag, Shield, Factory, Leaf, ChevronDown, ChevronUp } from "lucide-react";

type Client = {
  name: string;
  location: string;
  business: string;
};

const clientsByCategory: Record<string, { icon: any; clients: Client[] }> = {
  "Construction": {
    icon: Building,
    clients: [
      { name: "APE Engineers Services", location: "Iringa", business: "Construction Service" },
      { name: "Build All Contractors", location: "DSM", business: "Construction Service" },
      { name: "COMT Entrepreneurs Company Ltd", location: "Iringa", business: "Construction Service" },
      { name: "GNMS Construction Company", location: "Iringa", business: "Construction Service" },
      { name: "Impreza Di Construzion Ing. E. Mantov", location: "Iringa", business: "Construction Service" },
      { name: "Infrabuild Contractors Limited", location: "DSM", business: "Construction Service" },
      { name: "Justa Contractors", location: "Iringa", business: "Construction Service" },
      { name: "Kasi Engineering", location: "Iringa", business: "Construction Service" },
      { name: "Muungano General Enterprise Company", location: "Iringa", business: "Construction Service" },
      { name: "Priparm Company Limited", location: "Iringa", business: "Construction Service" },
      { name: "Sama Construction", location: "Iringa", business: "Construction Service" },
      { name: "Shakazulu International Company Ltd", location: "Iringa", business: "Construction Service" },
      { name: "Vapto Enterprise", location: "Iringa", business: "Construction Service" },
    ]
  },
  "Safari & Tourism": {
    icon: Plane,
    clients: [
      { name: "Foxtreks Ltd", location: "Iringa", business: "Safari Camp & Hotels" },
      { name: "Fly Sky Airlink Ltd", location: "Iringa", business: "Air Charter Services" },
      { name: "Hodi Hodi Bush Camp Limited", location: "Tanzania", business: "Safari Camp & Hotels" },
      { name: "Paul Tickner Photography & Safaris", location: "Iringa", business: "Safari Camp & Hotels" },
      { name: "River Valley Camps Ltd", location: "Iringa", business: "Safari Camp & Hotels" },
      { name: "Ruaha Safari Camp Ltd", location: "Iringa", business: "Safari Camp & Hotels" },
      { name: "Spring Valley", location: "Iringa", business: "Safari Camp & Hotels" },
      { name: "Tandala Tented Camps & Safaris", location: "Iringa", business: "Safari Camp & Hotels" },
      { name: "Tatanca Safaris Ltd", location: "Iringa", business: "Tourist Services" },
    ]
  },
  "Healthcare & Pharma": {
    icon: Stethoscope,
    clients: [
      { name: "Ipogolo Dispensary", location: "Iringa", business: "Health Services" },
      { name: "Miyomboni Pharmacy Limited", location: "Iringa", business: "Pharmaceutical Services" },
      { name: "Polyclinic Healthcare", location: "Iringa", business: "Health Services" },
      { name: "Rondo Investment Ltd", location: "DSM", business: "Pharmaceutical Services" },
      { name: "St Therese", location: "Iringa", business: "Health Services" },
    ]
  },
  "Education": {
    icon: GraduationCap,
    clients: [
      { name: "Hyperlink Primary School", location: "Iringa", business: "School Services" },
      { name: "Iringa International School", location: "Iringa", business: "School Services" },
      { name: "New Vibe Pre & Primary School", location: "DSM", business: "School Services" },
      { name: "Sipto Pre & Primary School", location: "Iringa", business: "School Services" },
      { name: "Southern Highlands School", location: "Iringa", business: "School Services" },
    ]
  },
  "Transport & Logistics": {
    icon: Truck,
    clients: [
      { name: "Crystal Freight Services", location: "DSM", business: "Clearing & Forwarding" },
      { name: "Frod Transporters", location: "Iringa", business: "Transport Services" },
      { name: "General Shamy Investment", location: "DSM", business: "Clearing & Forwarding" },
      { name: "Integrity Logistics", location: "DSM", business: "Transport Services" },
      { name: "K. T. Abri", location: "Tanzania", business: "Transport Services" },
      { name: "Kahe International Limited", location: "DSM", business: "Clearing & Forwarding" },
      { name: "Tuxford Haulage Ltd", location: "DSM", business: "Transport Services" },
    ]
  },
  "Microfinance": {
    icon: Banknote,
    clients: [
      { name: "BFS Company Limited", location: "Iringa", business: "Microcredit Financing" },
      { name: "Deo Finance Limited", location: "Iringa", business: "Microcredit Financing" },
      { name: "Karama Credit Company Limited", location: "Iringa", business: "Microcredit Financing" },
      { name: "Mwalongo Micro credit", location: "Tanzania", business: "Microcredit Financing" },
      { name: "Ramos Microcredit Limited", location: "Iringa", business: "Microcredit Financing" },
    ]
  },
  "ICT & Communication": {
    icon: Wifi,
    clients: [
      { name: "4Pesa Limited", location: "DSM", business: "Internet Communication" },
      { name: "Agrovision Limited", location: "Tanzania", business: "ICT Services" },
      { name: "Fair Point Communication", location: "Iringa", business: "Internet Communication" },
      { name: "Infosys IPS (T) Ltd", location: "DSM", business: "Computer & Software" },
      { name: "Samwel Mkuwa T/A Sisa Solution", location: "Iringa", business: "Internet Communication" },
      { name: "YTP Production", location: "Iringa", business: "Internet Communication" },
    ]
  },
  "Retail & Trading": {
    icon: ShoppingBag,
    clients: [
      { name: "Assad Spares", location: "Iringa", business: "Groceries" },
      { name: "Augustino Christopher Sanga T/A SMA", location: "Iringa", business: "Groceries" },
      { name: "Burhani Machinery & Tractor Parts", location: "Iringa", business: "Machinery & Spares" },
      { name: "Emachango Traders Company Ltd", location: "Iringa", business: "Food and Groceries" },
      { name: "Foecoe", location: "Iringa", business: "Groceries" },
      { name: "Hautevolt Limited", location: "DSM", business: "Electric Accessories" },
      { name: "Kindola Auto Spares & Accessories", location: "Iringa", business: "Accessories & Spares" },
      { name: "Mchungwa Hardware", location: "Iringa", business: "Hardware" },
      { name: "Mhapa Enterprises", location: "Iringa", business: "Food and Groceries" },
      { name: "Mibham Trading", location: "DSM", business: "Electric Accessories" },
      { name: "Mohamed Salim Arbi", location: "Iringa", business: "Food and Groceries" },
      { name: "Mr. Cha Bei Poa", location: "Iringa", business: "Food and Groceries" },
      { name: "OCM", location: "Iringa", business: "Food and Groceries" },
      { name: "Petro Lubida", location: "Iringa", business: "Food and Groceries" },
      { name: "Rahim Fatael Jaffer", location: "Iringa", business: "Matress & Garments" },
      { name: "Rahim Premji", location: "Iringa", business: "Ice Cream Parlour" },
      { name: "Mary Idan Sanga", location: "Iringa", business: "Food and Groceries" },
    ]
  },
  "Security Services": {
    icon: Shield,
    clients: [
      { name: "Husuma Security", location: "Iringa", business: "Security Services" },
      { name: "Ngoti Green Gill Estate Co. Ltd", location: "Iringa", business: "Security Services" },
      { name: "Wete Security Technology Co. Ltd", location: "Iringa", business: "Security Services" },
    ]
  },
  "Agriculture & Farming": {
    icon: Leaf,
    clients: [
      { name: "Bartholomeo Pilla", location: "Iringa", business: "Farming Support Service" },
      { name: "Eleni Apostolos Vasilikakis", location: "Iringa", business: "Tobacco Farming" },
      { name: "Filiacos Farm Limited", location: "Tanzania", business: "Farming" },
      { name: "Kibebe Farms Ltd", location: "Iringa", business: "Cattle Farming" },
      { name: "Kidamali & Kipera Farms", location: "Iringa", business: "Tobacco Farming" },
      { name: "Lawrieson Investments Limited", location: "Iringa", business: "Avocado Farmer" },
      { name: "Makalala Farm", location: "Iringa", business: "Tobacco Farming" },
      { name: "Ndoto Farms Ltd", location: "Iringa", business: "Cattle Farming" },
    ]
  },
  "Other Services": {
    icon: Factory,
    clients: [
      { name: "Adams & Adrian Limited", location: "DSM", business: "Consulting Services" },
      { name: "ASTE Insurance Brokers Co. Ltd", location: "DSM", business: "Insurance Broker" },
      { name: "Chegamila Investment", location: "Iringa", business: "Garage Services" },
      { name: "Dar Huduma", location: "DSM", business: "Water Pumps" },
      { name: "Hanny Abdulaziz Salum", location: "Iringa", business: "Fine Skin Services" },
      { name: "Haste Taste Too Restaurant", location: "Iringa", business: "Restaurant" },
      { name: "Hope Service Station", location: "Iringa", business: "Petrol Station" },
      { name: "Kidamali Maji Company Ltd", location: "Iringa", business: "Mineral Water Bottling" },
      { name: "LVC Company Limited", location: "DSM", business: "Explosive Seller" },
      { name: "Southern Tanzania Elephants Program", location: "Iringa", business: "Wild Animals Protection" },
      { name: "Stade Injector Pump", location: "Iringa", business: "Injector Pump Services" },
      { name: "Tanzathai IR Co Ltd", location: "Iringa", business: "Mineral Water Bottling" },
    ]
  },
};

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
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const totalClients = Object.values(clientsByCategory).reduce(
    (sum, cat) => sum + cat.clients.length,
    0
  );

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
            We've proudly served over {totalClients} clients across diverse sectors, building long-term 
            relationships based on trust, expertise, and exceptional service delivery.
          </p>
        </motion.div>

        {/* Client Categories with Expandable Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {Object.entries(clientsByCategory).map(([category, data], index) => {
            const Icon = data.icon;
            const isExpanded = expandedCategory === category;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-cream/5 border border-cream/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full p-5 flex items-center justify-between hover:bg-cream/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-accent" />
                    <div className="text-left">
                      <p className="text-cream font-medium">{category}</p>
                      <p className="text-accent text-sm">{data.clients.length} clients</p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-cream/50" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-cream/50" />
                  )}
                </button>
                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-cream/10">
                    <div className="max-h-60 overflow-y-auto mt-3 space-y-2">
                      {data.clients.map((client, idx) => (
                        <div
                          key={idx}
                          className="text-sm py-2 px-3 rounded-lg bg-cream/5 hover:bg-cream/10 transition-colors"
                        >
                          <p className="text-cream font-medium">{client.name}</p>
                          <p className="text-cream/50 text-xs">
                            {client.location} • {client.business}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
            <p className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</p>
            <p className="text-cream/70">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-accent mb-2">100+</p>
            <p className="text-cream/70">Clients Served</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-accent mb-2">20+</p>
            <p className="text-cream/70">Industries</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-accent mb-2">8+</p>
            <p className="text-cream/70">Regions</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-accent mb-2">10+</p>
            <p className="text-cream/70">Core Services</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
