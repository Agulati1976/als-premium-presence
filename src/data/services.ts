import {
  Building2, HardHat, Wrench, Shield, LineChart, Scale,
  Headset, Briefcase, Database, Code2, Megaphone, Server,
  LucideIcon,
} from "lucide-react";

export interface SubService {
  title: string;
  desc: string;
  image: string;
}

export interface ServiceDetail {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  desc: string;
  image: string;
  points: string[];
  overview: string;
  benefits: string[];
  subServices: SubService[];
}

export const services: ServiceDetail[] = [
  {
    slug: "real-estate",
    icon: Building2,
    title: "Real Estate Services",
    tagline: "Property advisory, leasing & portfolio operations",
    desc: "Project coordination, property management and operations support for residential & commercial portfolios.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=75&auto=format&fit=crop",
    points: ["Property advisory", "Leasing & sales", "Portfolio operations"],
    overview:
      "We help developers, investors and occupiers unlock value across the full real-estate lifecycle — from acquisition and leasing to facility operations and exit. Our team blends market insight with on-ground execution to deliver measurable returns on every asset.",
    benefits: [
      "Pan-India presence with local market intelligence",
      "Tech-enabled property & lease management",
      "Transparent reporting and SLA-driven operations",
      "Dedicated relationship manager for every account",
    ],
    subServices: [
      { title: "Residential Sales & Leasing", desc: "End-to-end brokerage for apartments, villas and plotted developments.", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=70&auto=format&fit=crop" },
      { title: "Commercial Leasing", desc: "Office, retail and warehousing leasing with corporate tenants.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=70&auto=format&fit=crop" },
      { title: "Property Management", desc: "Day-to-day operations, tenant servicing and facility upkeep.", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=70&auto=format&fit=crop" },
      { title: "Investment Advisory", desc: "Deal sourcing, due diligence and exit advisory for investors.", image: "https://images.unsplash.com/photo-1554224155-1696413565d3?w=800&q=70&auto=format&fit=crop" },
    ],
  },
  {
    slug: "construction",
    icon: HardHat,
    title: "Construction Services",
    tagline: "Turnkey civil, structural & infrastructure execution",
    desc: "End-to-end construction and infrastructure execution from design coordination to handover.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=75&auto=format&fit=crop",
    points: ["Site execution", "Civil & structural", "Turnkey delivery"],
    overview:
      "From greenfield builds to complex retrofits, our construction practice delivers on time, on budget and on spec. We bring rigorous project management, safety culture and quality controls to every site we run.",
    benefits: [
      "Certified engineers and project managers",
      "Strict HSE compliance and audit trail",
      "Modern equipment and digital project tracking",
      "Single-window accountability through handover",
    ],
    subServices: [
      { title: "Residential Construction", desc: "Apartments, villas and townships built to global quality benchmarks.", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=70&auto=format&fit=crop" },
      { title: "Commercial Construction", desc: "Office towers, retail and mixed-use developments.", image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=800&q=70&auto=format&fit=crop" },
      { title: "Industrial & Warehousing", desc: "Factories, warehouses and logistics parks with PEB structures.", image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=70&auto=format&fit=crop" },
      { title: "Interior Fit-outs", desc: "Corporate, retail and hospitality interior turnkey delivery.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=70&auto=format&fit=crop" },
    ],
  },
  {
    slug: "building-installation",
    icon: Wrench,
    title: "Building Installation",
    tagline: "MEP, smart systems & finishing installation",
    desc: "Specialized MEP and finishing installation for residential, commercial and industrial spaces.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=75&auto=format&fit=crop",
    points: ["Electrical & HVAC", "Plumbing & fittings", "Smart-building tech"],
    overview:
      "We deliver complete MEP and smart-building installation backed by certified technicians, OEM partnerships and rigorous commissioning. Whether retrofit or new build, our installations are engineered for energy efficiency and longevity.",
    benefits: [
      "Licensed electricians and HVAC engineers",
      "OEM-grade components and warranties",
      "BMS, IoT and smart-control integration",
      "Preventive maintenance contracts available",
    ],
    subServices: [
      { title: "Electrical Installation", desc: "LT/HT panels, wiring, lighting and DG synchronisation.", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=70&auto=format&fit=crop" },
      { title: "HVAC & Cooling", desc: "VRF, chillers, ducted and precision cooling for any space.", image: "https://images.unsplash.com/photo-1631545806609-c1c0c1c8a5b7?w=800&q=70&auto=format&fit=crop" },
      { title: "Plumbing & Fire", desc: "Water supply, drainage, fire-fighting and sprinkler systems.", image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=70&auto=format&fit=crop" },
      { title: "Smart Building Tech", desc: "BMS, access control, CCTV and energy-management systems.", image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=70&auto=format&fit=crop" },
    ],
  },
  {
    slug: "insurance",
    icon: Shield,
    title: "Insurance Services",
    tagline: "Risk advisory, policy placement & claims",
    desc: "Tailored business and client insurance assistance with claim and policy support.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=75&auto=format&fit=crop",
    points: ["Risk assessment", "Policy advisory", "Claims handling"],
    overview:
      "We work with leading underwriters to design insurance programs that actually pay out when you need them. From small businesses to large enterprises, we structure cover that matches your risk profile and budget.",
    benefits: [
      "Independent, multi-insurer advisory",
      "Hands-on claims assistance",
      "Annual program reviews",
      "Dedicated relationship desk",
    ],
    subServices: [
      { title: "Health & Life", desc: "Group and individual health, term and savings plans.", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=70&auto=format&fit=crop" },
      { title: "Motor & Property", desc: "Vehicle, property and contents cover for individuals and SMEs.", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=70&auto=format&fit=crop" },
      { title: "Commercial Liability", desc: "Public, product and professional liability programs.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=70&auto=format&fit=crop" },
      { title: "Claims Management", desc: "End-to-end claim filing, documentation and follow-up.", image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=70&auto=format&fit=crop" },
    ],
  },
  {
    slug: "financial",
    icon: LineChart,
    title: "Financial Services",
    tagline: "Bookkeeping, MIS & business advisory",
    desc: "Financial process outsourcing, reporting and business advisory for growing enterprises.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=75&auto=format&fit=crop",
    points: ["Bookkeeping & AR/AP", "MIS & reporting", "Advisory"],
    overview:
      "We give founders and CFOs reliable books, sharp MIS and an advisory layer that helps the business make better decisions — at a fraction of the cost of a full in-house team.",
    benefits: [
      "Qualified CAs and finance analysts",
      "Cloud accounting (Zoho/Tally/QuickBooks)",
      "Monthly closes within 7 days",
      "Audit-ready documentation",
    ],
    subServices: [
      { title: "Accounting & Bookkeeping", desc: "Daily books, ledger management and reconciliations.", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=70&auto=format&fit=crop" },
      { title: "Payroll Processing", desc: "End-to-end payroll, statutory compliance and payslips.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=70&auto=format&fit=crop" },
      { title: "MIS & Reporting", desc: "Dashboards, P&L, cashflow and management reporting.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=70&auto=format&fit=crop" },
      { title: "Tax & Compliance", desc: "GST, TDS, income-tax filings and assessments.", image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&q=70&auto=format&fit=crop" },
    ],
  },
  {
    slug: "legal",
    icon: Scale,
    title: "Legal Support",
    tagline: "Drafting, compliance & legal back-office",
    desc: "Documentation, compliance and ongoing legal back-office support for businesses.",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1200&q=75&auto=format&fit=crop",
    points: ["Contract drafting", "Compliance", "Legal research"],
    overview:
      "Our legal support practice acts as an extended in-house team — drafting, reviewing and managing the day-to-day legal workload so your business stays compliant and contract-ready.",
    benefits: [
      "Experienced corporate lawyers",
      "Quick turnaround on drafts and reviews",
      "Confidentiality and version control",
      "Flat monthly retainers available",
    ],
    subServices: [
      { title: "Contract Drafting", desc: "MSAs, NDAs, vendor and employment contracts.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=70&auto=format&fit=crop" },
      { title: "Corporate Compliance", desc: "ROC, secretarial and regulatory filings.", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=70&auto=format&fit=crop" },
      { title: "Legal Research", desc: "Case law research, memos and opinions.", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=70&auto=format&fit=crop" },
      { title: "Dispute Support", desc: "Litigation support, drafting and case management.", image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=70&auto=format&fit=crop" },
    ],
  },
  {
    slug: "call-centre",
    icon: Headset,
    title: "Call Centre",
    tagline: "24/7 voice, chat & telesales operations",
    desc: "24/7 inbound support, outbound telemarketing and sales across voice and chat.",
    image: "https://images.unsplash.com/photo-1553775282-20af80779df7?w=1200&q=75&auto=format&fit=crop",
    points: ["Customer support", "Telesales", "Omnichannel"],
    overview:
      "Our omnichannel contact centres run round the clock with multilingual agents, modern CCaaS stacks and quality frameworks that consistently push CSAT and conversion higher.",
    benefits: [
      "Multilingual agents (English/Hindi/regional)",
      "Cloud telephony & CRM integration",
      "Real-time dashboards and QA",
      "Flexible shared or dedicated seats",
    ],
    subServices: [
      { title: "Inbound Support", desc: "Customer care, helpdesk and after-sales support.", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=70&auto=format&fit=crop" },
      { title: "Outbound Telesales", desc: "Lead qualification, telesales and renewals.", image: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=800&q=70&auto=format&fit=crop" },
      { title: "Chat & Email Support", desc: "Live chat, email and social DM response teams.", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=70&auto=format&fit=crop" },
      { title: "Quality & Training", desc: "QA scoring, agent coaching and training programs.", image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=70&auto=format&fit=crop" },
    ],
  },
  {
    slug: "bpo",
    icon: Briefcase,
    title: "BPO Services",
    tagline: "Back office, front office & KPO delivery",
    desc: "Business Process Outsourcing for global companies — back office, front office and KPO.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=75&auto=format&fit=crop",
    points: ["Back-office ops", "Process automation", "Quality assurance"],
    overview:
      "We run high-volume, SLA-driven business processes for clients across BFSI, healthcare, retail and tech — combining trained talent, lean process design and automation to drive cost and quality outcomes.",
    benefits: [
      "ISO 27001 certified delivery",
      "Lean Six Sigma process design",
      "RPA & AI augmentation",
      "Scalable 24x7 shifts",
    ],
    subServices: [
      { title: "Back-Office Operations", desc: "Document processing, data ops and admin support.", image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&q=70&auto=format&fit=crop" },
      { title: "Finance & Accounting", desc: "AR/AP, reconciliations and reporting at scale.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=70&auto=format&fit=crop" },
      { title: "HR Outsourcing", desc: "Recruitment, payroll and employee lifecycle services.", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=70&auto=format&fit=crop" },
      { title: "Knowledge Process (KPO)", desc: "Research, analytics and specialised knowledge work.", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=70&auto=format&fit=crop" },
    ],
  },
  {
    slug: "data-entry",
    icon: Database,
    title: "Data Entry",
    tagline: "High-volume, secure data processing",
    desc: "Accurate, secure and high-volume data processing with strict SLA-driven quality.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=75&auto=format&fit=crop",
    points: ["High-volume entry", "Data cleansing", "Document digitization"],
    overview:
      "From digitising legacy paper archives to running daily data pipelines, our data teams deliver 99%+ accuracy at scale with secure infrastructure and strict access controls.",
    benefits: [
      "99%+ accuracy SLAs",
      "Encrypted, access-controlled workstations",
      "Multi-shift capacity",
      "Custom workflows and tooling",
    ],
    subServices: [
      { title: "Online Data Entry", desc: "Form filling, catalog updates and CRM data entry.", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=70&auto=format&fit=crop" },
      { title: "Offline Data Entry", desc: "Manual entry from scanned documents and PDFs.", image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&q=70&auto=format&fit=crop" },
      { title: "Data Cleansing", desc: "Deduplication, validation and enrichment.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=70&auto=format&fit=crop" },
      { title: "Document Digitization", desc: "OCR, indexing and archival of physical records.", image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=70&auto=format&fit=crop" },
    ],
  },
  {
    slug: "software-development",
    icon: Code2,
    title: "Software Development",
    tagline: "Custom web, mobile & SaaS products",
    desc: "Custom software, web apps and enterprise systems built with modern, scalable stacks.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=75&auto=format&fit=crop",
    points: ["Web & mobile apps", "SaaS platforms", "API integrations"],
    overview:
      "Our product engineering teams design, build and operate software for startups and enterprises — from MVPs to mission-critical platforms — using modern, scalable stacks and proven delivery playbooks.",
    benefits: [
      "Senior engineers, product designers & QA",
      "Agile delivery with weekly demos",
      "Modern stacks: React, Node, Python, Cloud",
      "Long-term maintenance & SRE",
    ],
    subServices: [
      { title: "Web Application Development", desc: "Custom web apps and internal tools built on modern stacks.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=70&auto=format&fit=crop" },
      { title: "Mobile App Development", desc: "Native and cross-platform iOS & Android apps.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=70&auto=format&fit=crop" },
      { title: "SaaS Product Engineering", desc: "Multi-tenant SaaS platforms with billing and analytics.", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=70&auto=format&fit=crop" },
      { title: "API & Integrations", desc: "REST/GraphQL APIs and third-party integrations.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=70&auto=format&fit=crop" },
    ],
  },
  {
    slug: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    tagline: "SEO, paid media & performance marketing",
    desc: "SEO, PPC, social media, branding and lead generation engineered for measurable ROI.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=75&auto=format&fit=crop",
    points: ["SEO & content", "Paid ads", "Lead generation"],
    overview:
      "We run measurable, full-funnel digital marketing — pairing strategy and creative with channel execution to drive qualified leads and predictable revenue growth.",
    benefits: [
      "Performance dashboards & weekly reviews",
      "In-house creative & content studio",
      "Certified Google & Meta partners",
      "Pay-for-performance options",
    ],
    subServices: [
      { title: "Search Engine Optimisation", desc: "Technical SEO, content and link-building programs.", image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=70&auto=format&fit=crop" },
      { title: "Paid Media & PPC", desc: "Google, Meta and LinkedIn ads tuned for ROAS.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=70&auto=format&fit=crop" },
      { title: "Social Media Marketing", desc: "Always-on social content, community and reels.", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=70&auto=format&fit=crop" },
      { title: "Branding & Creative", desc: "Brand identity, websites and creative production.", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=70&auto=format&fit=crop" },
    ],
  },
  {
    slug: "information-technology",
    icon: Server,
    title: "Information Technology",
    tagline: "Cloud, IT support & cybersecurity",
    desc: "IT consulting, infrastructure management and digital transformation services.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=75&auto=format&fit=crop",
    points: ["Cloud & DevOps", "IT support", "Cybersecurity"],
    overview:
      "We help enterprises modernise infrastructure, secure their environment and run reliable IT operations — from cloud migration to 24x7 helpdesk and managed cybersecurity.",
    benefits: [
      "AWS, Azure & GCP certified engineers",
      "24x7 NOC & helpdesk",
      "ISO 27001 security practices",
      "Predictable monthly OPEX models",
    ],
    subServices: [
      { title: "Cloud & DevOps", desc: "Cloud migration, IaC and CI/CD pipelines.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=70&auto=format&fit=crop" },
      { title: "Managed IT Support", desc: "Helpdesk, asset management and end-user support.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=70&auto=format&fit=crop" },
      { title: "Cybersecurity", desc: "VAPT, SOC and managed security services.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=70&auto=format&fit=crop" },
      { title: "Network & Infrastructure", desc: "LAN/WAN, Wi-Fi and data-centre setup.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=70&auto=format&fit=crop" },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
