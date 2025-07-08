import React from 'react';
import { FaLightbulb, FaLaptopCode, FaBuilding, FaShoppingCart, FaBolt, FaHeartbeat, FaIndustry, FaTruck, FaLeaf, FaGraduationCap, FaDollarSign } from 'react-icons/fa';

export interface Technology {
  name: string;
  icon?: string;
}

export interface Company {
  name: string;
  description: string;
  logo?: string;
  link: string;
  slug: string;
  location: string;
  industry: string; // New field
  foundedDate: string; // New field
  teamSize: string; // New field
  website: string; // New field for website link
  socialMedia?: { platform: string; url: string; }[]; // New field for social media links
  technologies: Technology[];
}

export interface Sector {
  name: string;
  description: string;
  icon: React.ElementType;
  companies: Company[];
}

export const sectorsData: Sector[] = [
  {
    name: "Investment Banking",
    description: "Strategic financial advisory and capital solutions for global enterprises.",
    icon: FaDollarSign,
    companies: [
      {
        name: "Cubie Capital Partners",
        description: "Leading M&A advisory and private equity investments.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-capital-partners",
        slug: "cubie-capital-partners",
        location: "New York, USA",
        industry: "Financial Services",
        foundedDate: "2005",
        teamSize: "500+",
        website: "https://www.cubiecapitalpartners.com",
        socialMedia: [
          { platform: "LinkedIn", url: "https://www.linkedin.com/company/cubie-capital-partners" }
        ],
        technologies: [{ name: "Fintech Platforms" }, { name: "Data Analytics" }],
      },
      {
        name: "Cubie Strategic Advisors",
        description: "Providing expert financial consulting and wealth management.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-strategic-advisors",
        slug: "cubie-strategic-advisors",
        location: "London, UK",
        industry: "Financial Services",
        foundedDate: "2010",
        teamSize: "200-500",
        website: "https://www.cubiestrategicadvisors.com",
        socialMedia: [
          { platform: "LinkedIn", url: "https://www.linkedin.com/company/cubie-strategic-advisors" }
        ],
        technologies: [{ name: "AI & ML" }, { name: "Blockchain" }],
      },
    ],
  },
  {
    name: "Technology & Digital Services",
    description: "Pioneering digital transformation with cutting-edge software and AI solutions.",
    icon: FaLaptopCode,
    companies: [
      {
        name: "CubieTech Innovations",
        description: "Developing scalable software and enterprise solutions.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-tech-innovations",
        slug: "cubie-tech-innovations",
        location: "San Francisco, USA",
        industry: "Software Development",
        foundedDate: "2015",
        teamSize: "1000+",
        website: "https://www.cubietechinnovations.com",
        socialMedia: [
          { platform: "Twitter", url: "https://twitter.com/cubietech" }
        ],
        technologies: [{ name: "Cloud Computing" }, { name: "Automation" }, { name: "AI & ML" }],
      },
      {
        name: "Cubie AI Labs",
        description: "Advancing artificial intelligence and machine learning research.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-ai-labs",
        slug: "cubie-ai-labs",
        location: "Seattle, USA",
        industry: "Artificial Intelligence",
        foundedDate: "2018",
        teamSize: "50-200",
        website: "https://www.cubieailabs.com",
        socialMedia: [
          { platform: "ResearchGate", url: "https://www.researchgate.net/cubieailabs" }
        ],
        technologies: [{ name: "AI & ML" }, { name: "Data Analytics" }],
      },
      {
        name: "Cubie Cloud Solutions",
        description: "Delivering secure and efficient cloud infrastructure services.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-cloud-solutions",
        slug: "cubie-cloud-solutions",
        location: "Dublin, Ireland",
        industry: "Cloud Computing",
        foundedDate: "2017",
        teamSize: "200-500",
        website: "https://www.cubiecloudsolutions.com",
        socialMedia: [
          { platform: "LinkedIn", url: "https://www.linkedin.com/company/cubie-cloud-solutions" }
        ],
        technologies: [{ name: "Cloud Computing" }, { name: "Cybersecurity" }],
      },
    ],
  },
  {
    name: "Infrastructure & Real Estate",
    description: "Building sustainable urban landscapes and modern infrastructure.",
    icon: FaBuilding,
    companies: [
      {
        name: "Cubie Urban Developers",
        description: "Creating smart, eco-friendly residential and commercial spaces.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-urban-developers",
        slug: "cubie-urban-developers",
        location: "Dubai, UAE",
        industry: "Real Estate Development",
        foundedDate: "2012",
        teamSize: "500+",
        website: "https://www.cubieurbandevelopers.com",
        socialMedia: [
          { platform: "Instagram", url: "https://www.instagram.com/cubieurbandevelopers" }
        ],
        technologies: [{ name: "Smart City Tech" }, { name: "Green Building" }],
      },
      {
        name: "Cubie Infra Solutions",
        description: "Developing critical infrastructure projects globally.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-infra-solutions",
        slug: "cubie-infra-solutions",
        location: "Singapore",
        industry: "Infrastructure",
        foundedDate: "2008",
        teamSize: "1000+",
        website: "https://www.cubieinfrasolutions.com",
        socialMedia: [
          { platform: "LinkedIn", url: "https://www.linkedin.com/company/cubie-infra-solutions" }
        ],
        technologies: [{ name: "IIoT" }, { name: "Automation" }],
      },
    ],
  },
  {
    name: "Consumer Goods & Retail",
    description: "Crafting beloved brands and seamless retail experiences for everyday life.",
    icon: FaShoppingCart,
    companies: [
      {
        name: "Cubie Lifestyle",
        description: "Innovating in fashion, home goods, and personal care.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-lifestyle",
        slug: "cubie-lifestyle",
        location: "Paris, France",
        industry: "Consumer Goods",
        foundedDate: "2016",
        teamSize: "200-500",
        website: "https://www.cubielifestyle.com",
        socialMedia: [
          { platform: "Facebook", url: "https://www.facebook.com/cubielifestyle" }
        ],
        technologies: [{ name: "E-commerce Platforms" }, { name: "Supply Chain AI" }],
      },
      {
        name: "Cubie Foods",
        description: "Producing high-quality, sustainable food and beverage products.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-foods",
        slug: "cubie-foods",
        location: "Berlin, Germany",
        industry: "Food & Beverage",
        foundedDate: "2014",
        teamSize: "500+",
        website: "https://www.cubiefoods.com",
        socialMedia: [
          { platform: "Instagram", url: "https://www.instagram.com/cubiefoods" }
        ],
        technologies: [{ name: "Food Tech" }, { name: "Sustainable Agriculture" }],
      },
      {
        name: "Cubie Fashion",
        description: "Setting trends with innovative and sustainable apparel.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-fashion",
        slug: "cubie-fashion",
        location: "Milan, Italy",
        industry: "Fashion",
        foundedDate: "2019",
        teamSize: "50-200",
        website: "https://www.cubiefashion.com",
        socialMedia: [
          { platform: "Pinterest", url: "https://www.pinterest.com/cubiefashion" }
        ],
        technologies: [{ name: "AI in Design" }, { name: "Sustainable Materials" }],
      },
    ],
  },
  {
    name: "Energy & Utilities",
    description: "Powering the future with sustainable energy solutions and efficient utilities.",
    icon: FaBolt,
    companies: [
      {
        name: "Cubie Renewables",
        description: "Investing in and developing renewable energy projects.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-renewables",
        slug: "cubie-renewables",
        location: "Oslo, Norway",
        industry: "Renewable Energy",
        foundedDate: "2011",
        teamSize: "200-500",
        website: "https://www.cubierenewables.com",
        socialMedia: [
          { platform: "LinkedIn", url: "https://www.linkedin.com/company/cubie-renewables" }
        ],
        technologies: [{ name: "Green Energy" }, { name: "Smart Grids" }],
      },
      {
        name: "Cubie Power Solutions",
        description: "Providing reliable and efficient power generation and distribution.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-power-solutions",
        slug: "cubie-power-solutions",
        location: "Houston, USA",
        industry: "Utilities",
        foundedDate: "2007",
        teamSize: "500+",
        website: "https://www.cubiepowersolutions.com",
        socialMedia: [
          { platform: "Twitter", url: "https://twitter.com/cubiepower" }
        ],
        technologies: [{ name: "Energy Storage" }, { name: "IIoT" }],
      },
    ],
  },
  {
    name: "Healthcare & Life Sciences",
    description: "Advancing health and well-being through innovative medical solutions.",
    icon: FaHeartbeat,
    companies: [
      {
        name: "Cubie HealthTech",
        description: "Developing digital health platforms and medical devices.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-health-tech",
        slug: "cubie-health-tech",
        location: "Boston, USA",
        industry: "Health Technology",
        foundedDate: "2018",
        teamSize: "50-200",
        website: "https://www.cubiehealthtech.com",
        socialMedia: [
          { platform: "LinkedIn", url: "https://www.linkedin.com/company/cubie-healthtech" }
        ],
        technologies: [{ name: "Telemedicine" }, { name: "Wearable Tech" }],
      },
      {
        name: "Cubie Pharma Research",
        description: "Pioneering drug discovery and pharmaceutical development.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-pharma-research",
        slug: "cubie-pharma-research",
        location: "Basel, Switzerland",
        industry: "Pharmaceuticals",
        foundedDate: "2010",
        teamSize: "500+",
        website: "https://www.cubiepharmaresearch.com",
        socialMedia: [
          { platform: "ResearchGate", url: "https://www.researchgate.net/cubiepharma" }
        ],
        technologies: [{ name: "Bioinformatics" }, { name: "Genomic Sequencing" }],
      },
    ],
  },
  {
    name: "Industrial & Manufacturing",
    description: "Driving efficiency and innovation in industrial production and advanced manufacturing.",
    icon: FaIndustry,
    companies: [
      {
        name: "Cubie Robotics",
        description: "Designing and deploying advanced robotics for industrial automation.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-robotics",
        slug: "cubie-robotics",
        location: "Tokyo, Japan",
        industry: "Robotics",
        foundedDate: "2017",
        teamSize: "50-200",
        website: "https://www.cubierobotics.com",
        socialMedia: [
          { platform: "YouTube", url: "https://www.youtube.com/cubierobotics" }
        ],
        technologies: [{ name: "Robotics" }, { name: "Automation" }],
      },
      {
        name: "Cubie Advanced Materials",
        description: "Developing next-generation materials for diverse industrial applications.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-advanced-materials",
        slug: "cubie-advanced-materials",
        location: "Seoul, South Korea",
        industry: "Advanced Materials",
        foundedDate: "2015",
        teamSize: "200-500",
        website: "https://www.cubieadvancedmaterials.com",
        socialMedia: [
          { platform: "LinkedIn", url: "https://www.linkedin.com/company/cubie-advanced-materials" }
        ],
        technologies: [{ name: "Nanotechnology" }, { name: "Additive Manufacturing" }],
      },
    ],
  },
  {
    name: "Logistics & Transportation",
    description: "Optimizing global supply chains and modernizing transportation networks.",
    icon: FaTruck,
    companies: [
      {
        name: "Cubie Global Logistics",
        description: "Providing end-to-end supply chain management and freight forwarding.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-global-logistics",
        slug: "cubie-global-logistics",
        location: "Shanghai, China",
        industry: "Logistics",
        foundedDate: "2009",
        teamSize: "1000+",
        website: "https://www.cubiegloballogistics.com",
        socialMedia: [
          { platform: "Twitter", url: "https://twitter.com/cubielogistics" }
        ],
        technologies: [{ name: "Smart Logistics" }, { name: "Blockchain" }],
      },
      {
        name: "Cubie Mobility Solutions",
        description: "Innovating in urban mobility and smart transportation systems.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-mobility-solutions",
        slug: "cubie-mobility-solutions",
        location: "Singapore",
        industry: "Transportation",
        foundedDate: "2018",
        teamSize: "200-500",
        website: "https://www.cubiemobilitysolutions.com",
        socialMedia: [
          { platform: "Facebook", url: "https://www.facebook.com/cubiemobility" }
        ],
        technologies: [{ name: "Autonomous Vehicles" }, { name: "Route Optimization AI" }],
      },
    ],
  },
  {
    name: "Sustainability & Green Tech",
    description: "Leading the charge in environmental solutions and sustainable technologies.",
    icon: FaLeaf,
    companies: [
      {
        name: "Cubie Eco Solutions",
        description: "Developing and implementing sustainable waste management and recycling.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-eco-solutions",
        slug: "cubie-eco-solutions",
        location: "Copenhagen, Denmark",
        industry: "Environmental Services",
        foundedDate: "2013",
        teamSize: "500+",
        website: "https://www.cubieecosolutions.com",
        socialMedia: [
          { platform: "LinkedIn", url: "https://www.linkedin.com/company/cubie-eco-solutions" }
        ],
        technologies: [{ name: "Circular Economy Tech" }, { name: "Waste-to-Energy" }],
      },
      {
        name: "Cubie Carbon Capture",
        description: "Pioneering technologies for carbon capture and environmental remediation.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-carbon-capture",
        slug: "cubie-carbon-capture",
        location: "Reykjavik, Iceland",
        industry: "Green Technology",
        foundedDate: "2020",
        teamSize: "50-200",
        website: "https://www.cubiecarboncapture.com",
        socialMedia: [
          { platform: "Twitter", url: "https://twitter.com/cubiecarbon" }
        ],
        technologies: [{ name: "Carbon Sequestration" }, { name: "Environmental AI" }],
      },
    ],
  },
  {
    name: "Education & Social Impact",
    description: "Empowering communities through innovative education and social initiatives.",
    icon: FaGraduationCap,
    companies: [
      {
        name: "Cubie EdTech",
        description: "Creating accessible and engaging digital learning platforms.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-ed-tech",
        slug: "cubie-ed-tech",
        location: "Boston, USA",
        industry: "Education Technology",
        foundedDate: "2016",
        teamSize: "200-500",
        website: "https://www.cubieedtech.com",
        socialMedia: [
          { platform: "LinkedIn", url: "https://www.linkedin.com/company/cubie-edtech" }
        ],
        technologies: [{ name: "Personalized Learning AI" }, { name: "Gamification" }],
      },
      {
        name: "Cubie Community Foundation",
        description: "Driving social change through philanthropic programs and community development.",
        logo: "/logos/Cubie Group's logo.png",
        link: "/subsidiaries/cubie-community-foundation",
        slug: "cubie-community-foundation",
        location: "Geneva, Switzerland",
        industry: "Non-profit",
        foundedDate: "2003",
        teamSize: "50-200",
        website: "https://www.cubiecommunityfoundation.org",
        socialMedia: [
          { platform: "Facebook", url: "https://www.facebook.com/cubiecommunityfoundation" }
        ],
        technologies: [{ name: "Impact Measurement Tech" }, { name: "Volunteer Management" }],
      },
    ],
  },
];

export function getAllCompanies() {
  return sectorsData.flatMap(sector => sector.companies);
}

export function getCompanyBySlug(slug: string) {
  const allCompanies = getAllCompanies();
  return allCompanies.find(company => company.slug === slug);
}
