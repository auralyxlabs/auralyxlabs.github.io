/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StatItem, ServiceItem, CaseStudyItem, TeamMember, ProcessStep, TestimonialItem } from "./types";

export const siteMetadata = {
  brand: "Auralyx Labs",
  founded: 2026,
  location: "Sialkot, Punjab, Pakistan",
  email: "auralyxlabs@gmail.com",
  whatsapp: "+92 327 0514746",
  tagline: "Your Digital Solutions Partner",
  hero: {
    heading: "Bespoke Digital Solutions Tailored for Global Scale",
    subheadline: "Auralyx Labs is a premium development agency. We empower startups, growing enterprises, and luxury brands to capture market value with custom-crafted websites, application products, and conversion-optimized digital stores.",
    primaryBtn: "Book a Consultation",
    secondaryBtn: "View Our Work",
    illustration: "/src/assets/images/hero_illustration_1781725281056.jpg"
  },
  about: {
    text: "Auralyx Labs operates as a leading digital creative and development team. We build high-performance products and scale operations with absolute engineering rigor, transparent agency leadership, and strategic product consulting.",
    highlights: [
      { title: "Strategic Vision", text: "We align digital architecture directly with your physical business growth goals." },
      { title: "Uncompromising Quality", text: "Every pixel, line of code, and layout pattern is optimized for maximum conversions." },
      { title: "Rigor & Reliability", text: "We operate with clear schedules, predictive sprint gating, and complete delivery honesty." },
      { title: "Long-Term Growth Partner", text: "We monitor performance, manage upgrades, and guide tech scaling as your business expands." }
    ]
  },
  contact: {
    availability: "Accepting Growth Partners",
    businessHours: "Monday - Friday (9:00 AM - 6:00 PM)",
    socials: {
      instagram: "https://www.instagram.com/auralyx_labs?igsh=a2ExZnJ6dHlvNzRx",
      linkedin: "https://www.linkedin.com/company/auralyx-labs/",
      facebook: "https://www.facebook.com/share/1DKqxEewEV/?mibextid=wwXIfr",
      pinterest: "https://pin.it/45o0fCxDv",
      whatsapp: "https://wa.me/923270514746"
    }
  }
};

export const statsData: StatItem[] = [
  { id: "stat-satisfaction", value: "98%", label: "Client Satisfaction" },
  { id: "stat-delivered", value: "25+", label: "Projects Delivered" },
  { id: "stat-industries", value: "10+", label: "Industries Served" },
  { id: "stat-quality", value: "100%", label: "Commitment To Quality" }
];

export const servicesData: ServiceItem[] = [
  {
    id: "srv-web-custom",
    title: "Web & Custom Development",
    description: "Premium high-conversion web platforms, custom-engineered database workspaces, and process automation middleware built around your business goals.",
    longDescription: "We design and build fast, secure, and fully SEO-responsive business platforms, custom operational workspaces, proprietary developer-friendly databases, and automated back-office pipelines. By pairing modern frameworks like React and Next.js with normalized storage servers (PostgreSQL/MySQL), we replace slow custom spreadsheets with high-powered digital applications that convert active user traffic into enterprise revenue.",
    bullets: [
      "Incorporate custom corporate web pages and multi-tier business ecosystems",
      "Model PostgreSQL, MySQL, and secure cloud schema database architectures",
      "Construct secure custom RESTful and GraphQL APIs for live synchronization",
      "Develop ultra-fast responsive landing profiles optimized for organic search ranking"
    ],
    benefits: [
      "Improve Organic Reach and Rank on major search indexes",
      "Eliminate repetitive manual entry tasks, saving dozens of operational hours",
      "Boost Conversion Rates by up to 45% over standardized templates",
      "Enjoy full software ownership with zero ongoing platform licensing fees"
    ],
    deliverables: [
      "Figma UI Architecture & Interactive Web Screen Prototype",
      "Fully Normalized Relational Database Scheme (PostgreSQL/MySQL)",
      "Deployable Production-ready Git Code Repository with API Docs",
      "1-Month Hypercare Active Performance Support & Performance Check"
    ],
    ctaText: "Start Your Integrated Project",
    category: "Web & Apps",
    image: "/src/assets/images/business_site_ui_1781721744753.jpg",
    stats: [
      { value: "60 Hours", label: "Admin Sparing Weekly" },
      { value: "+45%", label: "Organic Reach Surge" }
    ]
  },
  {
    id: "srv-app",
    title: "Mobile & Desktop Applications",
    description: "Elegant, fluid responsive native systems engineered to accompany global users.",
    longDescription: "We build intuitive business applications across iOS, Android, and Desktop platforms that extend brand touchpoints. Focused on secure, low-latency client state management and clean responsive design, interactive animations, and offline-first databases.",
    bullets: [
      "Incorporate native Android Apps published securely on Google Play Store",
      "Design native iOS Apps meeting rigid Apple Store Human Interface Guidelines",
      "Develop cross-platform utility platforms using React Native and Flutter",
      "Build offline-first desktop systems with hardware-accelerated processing hooks"
    ],
    benefits: [
      "Direct Customer Integration with secure push notifications and device utilities",
      "Offline-capabilities that permit continuous operational use anywhere",
      "Stately animated interactive widgets that drive user loyalty and retention",
      "Synchronous cloud backups and secure state encryption paradigms"
    ],
    deliverables: [
      "Figma Prototype Boards with Interactive Path Flows",
      "Production-compiled Store Bundles (.ipa, .apk, .msi, .dmg)",
      "Database Relational Schema Diagrams",
      "App Store and Google Play Publishing Support"
    ],
    ctaText: "Launch Your App",
    category: "Web & Apps",
    image: "/src/assets/images/startup_app_ui_1781721763898.jpg",
    stats: [
      { value: "40%", label: "Triage Process Acceleration" },
      { value: "100%", label: "Secure Data Isolation" }
    ]
  },
  {
    id: "srv-ecommerce",
    title: "E-Commerce Solutions",
    description: "Highly customized digital storefronts and robust sales channels designed for luxury retail.",
    longDescription: "We engineer customized Shopify, WooCommerce, and tailored full-stack eCommerce engines to ensure frictionless checkouts and high order volumes. Specializing in advanced liquid logic, API integrations, third-party logistics syncing, and smart variant selectors.",
    bullets: [
      "Configure highly customized premium Shopify themes and responsive styling",
      "Build versatile WordPress WooCommerce stores integrated with global structures",
      "Develop fully custom-engineered transaction engines with tailored invoice templates",
      "Perform conversion rate optimization (CRO) audits across mobile checkouts"
    ],
    benefits: [
      "Shrink cart abandonment ratios immediately through step-optimized checkouts",
      "Automated stock level notifications and third-party logistics syncing",
      "Support complex tax brackets, multi-currency layouts, and responsive discount lists",
      "Lightning-fast product search indexing and smart relational browsing filters"
    ],
    deliverables: [
      "Fully Custom Shopify Store Configuration & Accent Styling",
      "Automated Payment Gateway and Logistics API Integrity Testing",
      "In-depth Administrative Inventory Dashboard Onboarding Tutorial",
      "Launch day continuous monitoring desk standby"
    ],
    ctaText: "Build Your Store",
    category: "E-Commerce",
    image: "/src/assets/images/wazeer_shopify_1781725200281.jpg",
    stats: [
      { value: "30%", label: "Reduction in Checkout Abandonment" },
      { value: "Sub-1s", label: "Mobile Page Load Speed" }
    ]
  },
  {
    id: "srv-uiux",
    title: "UI/UX & Graphic Design",
    description: "Research-driven customer layouts, luxury vector assets, and exquisite visual design boards.",
    longDescription: "We craft gorgeous, distinct layouts that communicate a luxury corporate message. We focus on research-driven client journeys, modern elegant typography pairings, responsive rhythm layouts, and gorgeous custom vector illustration packs.",
    bullets: [
      "Design clean high-fidelity client journey visual prototypes in Figma",
      "Formulate custom luxury corporate design stylebooks and typography rules",
      "Produce high-resolution vector layout assets and illustrations",
      "Conduct in-depth usability heatmapping audits for existing products"
    ],
    benefits: [
      "Establish deep trust through superior layout aesthetic visual precision",
      "Clarify user tasks, eliminating navigation friction completely",
      "Deliver consistent guidelines for clean front-end code implementation",
      "Export assets organized by exact CSS standards for swift deployment"
    ],
    deliverables: [
      "Clickable High-Fidelity Figma Prototype Panels",
      "Full Typography Pairing and Digital Brand Specification Sheets",
      "Complete Component Visual Kit with active states",
      "Clean Optimized SVG and Vector Assets Packages"
    ],
    ctaText: "Refine Your Visual Identity",
    category: "Creative",
    image: "/src/assets/images/hero_workspace_1781721704715.jpg",
    stats: [
      { value: "100%", label: "Custom Figma Blueprints" },
      { value: "Zero", label: "Layout Template Dependency" }
    ]
  },
  {
    id: "srv-game",
    title: "Game Development",
    description: "Immersive games, custom Asset layouts, and interactive experiences for the browser.",
    longDescription: "We create captivating 2D and 3D web-based games and interactive digital graphics. Combining clever physics, smooth frames, and rewarding audio cues to keep browser users engaged.",
    bullets: [
      "Construct interactive 2D physics puzzles and casual web gaming setups",
      "Develop hardware-accelerated 3D environments on PixiJS and ThreeJS",
      "Engineer educational interactives and gamified commercial paths",
      "Optimize graphics for stable rendering across classic mobile screens"
    ],
    benefits: [
      "Create immediate engagement that keeps users on-site for longer durations",
      "Build a unique viral product marketing loop that captures social value",
      "Immersive gamified onboarding flows that make learning complex tools fun",
      "Clean canvas sizing layouts matching multiple viewport screen densities"
    ],
    deliverables: [
      "Interactive Playable Web Game Canvas Build",
      "Optimized Graphics Asset Sheet (Sprites, Audio blocks, Particles)",
      "High-score and Database Leaderboard Integration Setup",
      "Comprehensive performance bottleneck test log"
    ],
    ctaText: "Bring Your Game To Life",
    category: "Creative",
    image: "/src/assets/images/educational_portal_1781725236636.jpg",
    stats: [
      { value: "5x", label: "Interactive Session Duration" },
      { value: "60 FPS", label: "Smooth WebGL Render Rules" }
    ]
  },
  {
    id: "srv-fyp",
    title: "Technical Documentation & FYP Support",
    description: "Structured system specs, database relational blueprints, and professional research papers.",
    longDescription: "We author detailed, structured technical manuals, university-tier computer science research journals, systems design blueprints, and normalized database layouts following IEEE formatting.",
    bullets: [
      "Write multi-chapter technical system architectures & system diagrams",
      "Model complete database normalization diagrams up to 3rd Normal Form",
      "Formulate systematic reviews on advanced software paradigms",
      "Develop step-by-step developer setup scripts and host configurations"
    ],
    benefits: [
      "Secure academic validation with error-free formal prose formats",
      "Provide developers with crystal clear schemas to deploy networks precisely",
      "Preserve historical corporate software IP through detailed documentation",
      "Clean API parameters indexing that allows seamless future iterations"
    ],
    deliverables: [
      "IEEE / Academic Custom Structured Documentation Files",
      "Fully Described System Diagrams and Database Designs",
      "Setup Scripts & Environment Guides File Packages",
      "Professional Presentation Slides Deck"
    ],
    ctaText: "Inquire About Research Support",
    category: "Enterprise",
    image: "/src/assets/images/process_automation_1781725258690.jpg",
    stats: [
      { value: "3NF", label: "Relational Normalization Target" },
      { value: "IEEE", label: "Structured Formats Aligned" }
    ]
  }
];

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "case-wazeer",
    client: "Wazeer International",
    project: "Premium Shopify Storefront & Catalog Redefinition",
    representative: "Mahnoor Amer (Director & CEO)",
    summary: "Transformed an elite luxury garment manufacturer's online footprint with a bespoke, fast-loading, variant-heavy custom Shopify store that lowered cart abandonment significantly and aligned beautifully with their high-end textile legacy.",
    challenge: "Wazeer International required a stunning digital showroom to showcase a massive, customizable fabric catalog across diverse size variants, while maintaining instant load speeds and a smooth mobile shopping experience.",
    solution: "Our creative and development team built a customized Shopify environment using advanced liquid optimization, responsive vector grid layouts, custom variant filters, and a high-contrast elegant cream structure.",
    results: [
      "30% reduction in checkout abandonment within the initial 45 days post-launch",
      "Sub-second load times on product listings across modern mobile devices",
      "Automated stock synchronization that simplified internal administrative operations for staff"
    ],
    image: "/src/assets/images/wazeer_shopify_1781725200281.jpg",
    category: "E-Commerce Solutions",
    industry: "Luxury Textile & Retail",
    timeline: "6 Weeks (Q1 2026)",
    servicesDelivered: ["Shopify Theme Customization", "Mobile Optimization", "Variant Filtering Architecture", "API Payment Integration", "Brand Graphic Design"],
    logoText: "WAZEER"
  },
  {
    id: "case-healthcare",
    client: "Clinical Suite & Triage Portal",
    project: "Integrated Responsive Patient Management System",
    summary: "Replaced an outdated clinic's paper workflow with a highly secure, responsive web and tablet dashboard that coordinates multi-department bookings, symptom screening, and secure doctor check-ins.",
    challenge: "Siloed reception desks, scheduling overlaps, and sluggish retrieval of old clinical histories caused lengthy patient check-in wait times and high administrative stress.",
    solution: "We designed and deployed an office-wide responsive interface that updates doctor calendars instantly, provides digital triage tools, and tracks logs in compliance with strict privacy standards.",
    results: [
      "Trimmed average clinical check-in times by 40% using simple tablet triage",
      "Completely eliminated reservation overlaps via live secure state sync",
      "Enabled doctors to review encrypted patient diagnostic histories within a single click"
    ],
    image: "/src/assets/images/healthcare_platform_1781725218870.jpg",
    category: "Mobile & Desktop Applications",
    industry: "Healthcare Tech",
    timeline: "8 Weeks (2026)",
    servicesDelivered: ["User-Journey Research", "Responsive Dashboard Development", "Secure State Encryption", "Offline Support Systems", "UI/UX Design"],
    logoText: "CLINIC"
  },
  {
    id: "case-educational",
    client: "Interactive Student Academy",
    project: "Learning Management System & Virtual Tutoring Desk",
    summary: "Developed a modern, modular learning app equipped with course progression saving, multi-chapter video playlists, online quizzes, and digital credential generation.",
    challenge: "Low student course completion due to choppy playback over poor networks, combined with friction during continuous class progression tracking.",
    solution: "We built a lightweight learning app utilizing secure progressive video streaming, client-side auto-save milestones, and an intuitive dashboard styled on a clean, peaceful sage-green theme.",
    results: [
      "Surpassed student course completion milestones, reaching a high of 92%",
      "Secured smooth video performance across patchy 3G/LTE mobile setups",
      "Automated personalized certificate generation upon test completion"
    ],
    image: "/src/assets/images/educational_portal_1781725236636.jpg",
    category: "Web Development",
    industry: "EdTech Systems",
    timeline: "5 Weeks (2026)",
    servicesDelivered: ["Full-Stack App Development", "Progressive Video Streaming Integrations", "Figma Prototyping", "Automated Certificate Systems", "Custom Graphic Design"],
    logoText: "ACADEMY"
  },
  {
    id: "case-automation",
    client: "Enterprise Logistics Suite",
    project: "Warehouse Process & Document Automation",
    summary: "Connected warehouse status tracking, shipping labels, and digital accounting records into a unified business platform, removing manual file copying errors.",
    challenge: "Administrative staff spent hours manually copying data between separate CRM software, payment gates, and courier accounts, resulting in shipping delays.",
    solution: "Our leadership team configured a centralized backend service that reads online inquiries, updates stock counts, prints shipping labels, and outputs real-time operations charts.",
    results: [
      "Saved administrators 60+ business hours weekly from repetitive manual entry",
      "Decreased inventory mismatches and shipping dispatch delays to absolute zero",
      "Empowered corporate managers with elegant responsive analytics to drive growth"
    ],
    image: "/src/assets/images/process_automation_1781725258690.jpg",
    category: "Custom Development",
    industry: "B2B Logistics & Automation",
    timeline: "10 Weeks (2026)",
    servicesDelivered: ["Bespoke System Integrations", "Database Normalization", "Process Automation Rules", "Technical Documentation Profiles", "Operations Dashboard"],
    logoText: "LOGISTICS"
  }
];

export const processStepsData: ProcessStep[] = [
  {
    step: "01",
    title: "Understand Your Vision",
    description: "We initiate the relationship with deep, active listening. We map your specific market growth goals, customer profiles, brand identity, and technical parameters to outline a clear project proposal.",
    deliverables: ["Product Specification Blueprint", "Technology Stack Alignment", "Predictive Scope & Timeline Plan"]
  },
  {
    step: "02",
    title: "Plan The Right Strategy",
    description: "Our agency leadership maps out the complete operational plan, organizing database structures, secure APIs, content structures, and user journeys to ensure solid digital security from launch.",
    deliverables: ["Database Normalized Schema Map", "Interactive Navigation Flow", "Risk Mitigation & Optimization Study"]
  },
  {
    step: "03",
    title: "Design & Prototype",
    description: "We style beautiful, high-fidelity clickable web and mobile prototypes in Figma, pairing premium typography with our new luxury colors to capture your unique brand identity.",
    deliverables: ["Figma Interactive Workspace", "Digital Color & Brand Guidelines", "Usability Path Sign-Off Report"]
  },
  {
    step: "04",
    title: "Develop & Refine",
    description: "Our development experts write clean, component-focused React code combined with robust TypeScript type handling. You receive direct access to weekly preview sandboxes to check milestones transparently.",
    deliverables: ["Production-Ready Git Repository", "Weekly Interactive Preview Sandbox", "Clean Code Quality Audit Check"]
  },
  {
    step: "05",
    title: "Launch & Scale",
    description: "We configure secure production server routing, optimize assets for fast load times, perform rigorous cross-browser testing, and launch your product in stand-by readiness.",
    deliverables: ["Live Server Deployment & Domain Synced", "Technical System Documentation Bundle", "Post-Launch Hypercare Verification Log"]
  }
];

export const teamData: TeamMember[] = [
  {
    id: "founder-myda",
    name: "Myda Noor",
    position: "Founder & CEO",
    linkedin: "https://www.linkedin.com/in/myda-noor-02462a282/",
    email: "mydanoor388@gmail.com",
    shortBio: "Leading strategic brand vision and client growth. Specialized in aligning custom digital systems with business scaling goals, steering executive client support and delivery perfection.",
    photoUrl: "/src/assets/images/myda_premium_blur_1781798775708.jpg"
  },
  {
    id: "cto-komal",
    name: "Komal Rashid",
    position: "Co-Founder & CTO",
    linkedin: "https://www.linkedin.com/in/komal-rashid-b027902b9?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    email: "komalrashid263@gmail.com",
    shortBio: "Commanding our development experts and setting responsive system rules. Dedicated to securing pristine React networks and high-security databases with impeccable code architectures.",
    photoUrl: "/src/assets/images/komal_headshot_blur_1781798593408.jpg"
  },
  {
    id: "coo-tahreem",
    name: "Tahreem Zubair",
    position: "Co-Founder & COO",
    linkedin: "https://www.linkedin.com/in/tahreem-zubair-4598a2304?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    email: "tahreemzubair456@gmail.com",
    shortBio: "Optimizing relationship management and project execution. Authoring professional technical summaries, keeping schedules exact, and ensuring we launch each project on time with zero friction.",
    photoUrl: "/src/assets/images/tahreem_headshot_blur_1781798608705.jpg"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-wazeer",
    name: "Mahnoor Amer",
    company: "Wazeer International",
    position: "Director & CEO",
    review: "Auralyx Labs transformed our Shopify presence with a modern, user-friendly storefront. Their client-first responsiveness, creative direction, and attention to detail exceeded our expectations. The final result perfectly aligned with our business goals.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Zainab Malik",
    company: "ModaGlow Textiles",
    position: "Founder & Director",
    review: "As a startup founder, finding an agency that understands luxury branding was challenging. The design team at Auralyx Labs delivered a custom web presence that makes us look like a global brand from day one.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Hamza Farooq",
    company: "Apex Swift Logistics",
    position: "Operations Lead",
    review: "We commissioned a custom automation system from Auralyx Labs, and they saved our staff 60+ business hours weekly. Their transparent leadership made the entire development journey feel simple.",
    rating: 5
  },
  {
    id: "test-4",
    name: "Dr. Ayesha Alvi",
    company: "Sialkot Clinic Group",
    position: "Founder & Resident Director",
    review: "Their mobile and tablet appointment suite solved our queue bottlenecks completely. The app loads instantly, doctors love the simple triage page, and patient information remains fully secure.",
    rating: 5
  },
  {
    id: "test-6",
    name: "Bilal Ghazi",
    company: "Stellar Academy",
    position: "Dean of EdTech Systems",
    review: "Their academic reports and research project support are top-notch. High-standard citation formats, perfectly normalized database diagrams, and professional delivery.",
    rating: 5
  },
  {
    id: "test-7",
    name: "Aiman Fatima",
    company: "FAST-NUCES",
    position: "CS Gold Medalist / FYP Lead",
    review: "Tahreem and her team developed a highly-standardized database schema and UML structural guide for our software engineering capstone. The clear IEEE formatting and error-free validation secured us perfect university marks.",
    rating: 5
  },
  {
    id: "test-8",
    name: "Rohail Qureshi",
    company: "NUST School of EECS",
    position: "Research Scholar",
    review: "The academic validation and database normalization diagrams received outstanding remarks from our university evaluation board. Auralyx Labs maintains immaculate scientific precision and meets institutional milestones.",
    rating: 5
  },
  {
    id: "test-9",
    name: "Eshaal Khan",
    company: "ITU Lahore",
    position: "SE Student / FYP Researcher",
    review: "Their systematic documentation, source repository flow charts, and clean system design blueprints saved us months of thesis formatting struggle. Highly professional academics who understand core computer science standards.",
    rating: 5
  },
  {
    id: "test-intl-1",
    name: "Sarah Jenkins",
    company: "Summit Digital Ltd (UK)",
    position: "Global Head of Digital",
    review: "Auralyx Labs delivered an exceptional high-performance custom application that cut our customer checkout latency by 45%. Their co-founders matched our rigorous SLAs and communicated with outstanding technical poise.",
    rating: 5
  },
  {
    id: "test-intl-2",
    name: "Marcus Vance",
    company: "Apex Retail LLC (USA)",
    position: "VP of Digital Operations",
    review: "Deploying our inventory management system on containerized infrastructure was done flawlessly. Auralyx Labs bypassed loose assumptions with pristine, high-fidelity system design blueprints.",
    rating: 5
  },
  {
    id: "test-intl-3",
    name: "Jean-Pierre Moreau",
    company: "L'Atelier Paris (France)",
    position: "Brand Experience Officer",
    review: "Immaculate visual taste paired with robust backend engineering. They transformed our luxury showcase with beautifully responsive, high-contrast grids, boosting visitor engagement across our European showrooms.",
    rating: 5
  }
];

export const faqData = [
  {
    question: "How long does a premium Web Development project typically take?",
    answer: "A standard corporate web platform or robust landing experience takes average 4 to 6 weeks from initial research discovery to production sign-off. Complex custom applications with deep API schemas may require 8 to 10 weeks of predictive sprint cycles."
  },
  {
    question: "Do you specialize in Shopify theme customization and custom app connections?",
    answer: "Yes, we are eCommerce experts. We customize premium Shopify stores with custom Liquid parameters, tailored checkout flows, and custom product variant filters to maximize client conversions."
  },
  {
    question: "How does Auralyx Labs approach client communication during development?",
    answer: "We support our clients through complete delivery honesty. We share direct weekly interactive previews and detail active milestones clearly. You can also contact our leadership co-founders anytime over WhatsApp or Email."
  },
  {
    question: "What is your commitment to long-term post-launch care and SEO optimization?",
    answer: "Unlike template creators, we act as a true strategic growth partner. We include 1-month of complimentary active monitoring, and offer flexible monthly optimization packages to manage host scalability, security upgrades, and routine content checks."
  },
  {
    question: "Do you supply customized academic support and university documentation?",
    answer: "Yes, Tahreem Zubair leads our technical documentation department, authoring systematic system specifications, database normalization schemas, and high-quality presentation decks aligned with premium standards."
  }
];

export const techStackData = {
  frontend: ["React 19+", "TypeScript", "Tailwind CSS v4", "Next.js", "motion"],
  ecommerce: ["Shopify Liquid", "WooCommerce", "Stripe API", "Inventory Webhooks"],
  backend: ["Node.js Express", "RESTful & GraphQL", "Drizzle ORM", "Secure WebSockets"],
  database: ["PostgreSQL", "Firebase Firestore", "MySQL RDS", "Cloud Cache Databases"],
  design: ["Figma Clicking Prototypes", "Adobe Illustrator Vectors", "Corporate Guidelines Layouts", "Usability Heatmapping"]
};
