import {
  ClipboardCheck,
  FolderTree,
  ScanLine,
  ShieldCheck,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Method", href: "#method" },
  { label: "Who we serve", href: "#who-we-serve" },
  { label: "About", href: "#contact" },
] as const;

export const HERO_ROTATING_WORDS = [
  "reimagined.",
  "mastered.",
  "simplified.",
  "secured.",
] as const;

export interface Service {
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    index: "01",
    title: "Records audit",
    description:
      "A no-cost diagnostic of your current records. You leave with a clear picture of your state — whether you continue with us or not.",
    icon: ClipboardCheck,
  },
  {
    index: "02",
    title: "Digital filing systems",
    description:
      "Custom structures built around how your business actually works. Searchable, scalable, and standardized.",
    icon: FolderTree,
  },
  {
    index: "03",
    title: "Document digitization",
    description:
      "The full transition from paper to digital — scanning, indexing, metadata, and secure storage. Every document, instantly findable.",
    icon: ScanLine,
  },
  {
    index: "04",
    title: "Retention & compliance policy",
    description:
      "Policies built for Canadian regulatory requirements. PIPEDA, provincial retention rules, industry-specific standards — engineered into your operations from the start.",
    icon: ShieldCheck,
    featured: true,
  },
  {
    index: "05",
    title: "Staff training & support",
    description:
      "Your team trained on best practices. Ongoing support as your business changes. The system stays maintained, the records stay organized.",
    icon: GraduationCap,
  },
];

export const METHOD_STEPS = [
  {
    number: "01.",
    title: "Book a free record audit",
    description:
      "We meet, we listen, we assess. A complete diagnostic of your current records situation. No cost, no commitment.",
  },
  {
    number: "02.",
    title: "Receive your roadmap",
    description:
      "A custom records management plan tailored to your workflows and Canadian compliance requirements. Yours to keep, whether or not you engage us.",
  },
  {
    number: "03.",
    title: "We build the system",
    description:
      "Digital filing structures, digitization workflows, retention policies, security protocols. We handle the entire transition.",
  },
  {
    number: "04.",
    title: "Stewardship & support",
    description:
      "Your team is trained. We remain available. Your records stay organized, compliant, and accessible — quarterly, annually, indefinitely.",
  },
] as const;

export const SMB_RECORD_TYPES = [
  "Financial & tax records",
  "HR & employment files",
  "Client contracts & agreements",
  "Vendor & supplier documents",
  "Regulatory & compliance files",
  "Insurance & licensing records",
  "Operational correspondence",
  "Invoices & accounts payable",
  "Corporate governance files",
] as const;

export const PRINCIPLES = [
  {
    number: "01.",
    title: "Practical solutions",
    description:
      "Easy to implement, easy to maintain. We don't believe in overcomplicated systems, and we won't sell you software you'll never use.",
  },
  {
    number: "02.",
    title: "Small business focus",
    description:
      "Enterprise-grade organization without enterprise-grade complexity. Designed for teams of five to five hundred.",
  },
  {
    number: "03.",
    title: "Compliance-oriented",
    description:
      "Every recommendation maps to specific Canadian regulatory requirements. PIPEDA, provincial retention rules, industry standards — you'll know exactly why each policy exists.",
  },
  {
    number: "04.",
    title: "Efficiency, measured",
    description:
      "Less time searching, more time billing. Our clients report twelve to twenty hours saved per employee per month.",
  },
  {
    number: "05.",
    title: "Canadian expertise",
    description:
      "We understand the regulatory and operational realities of running a small business in Canada. From Ontario to British Columbia, we know the landscape.",
  },
  {
    number: "06.",
    title: "Tailored engagements",
    description:
      "Every project is custom. We don't sell templates or products — we design records management around how your team actually works.",
  },
] as const;

export const FOOTER_SERVICES = [
  "Records Audit",
  "Filing Systems",
  "Digitization",
  "Compliance Policy",
  "Training & Support",
] as const;

export const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Apex Document Management Services",
  description:
    "A discreet, professional records management practice for Canadian small and medium-sized businesses.",
  url: "https://www.apexdms.ca",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  serviceType: [
    "Records Management",
    "Document Digitization",
    "Digital Filing Systems",
    "Compliance Policy",
    "Staff Training",
  ],
  foundingDate: "2025",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CA",
  },
};
