import React from 'react';
import Link from 'next/link';
import { FaLightbulb, FaLaptopCode, FaBuilding, FaShoppingCart, FaBolt, FaHeartbeat, FaIndustry, FaTruck, FaLeaf, FaGraduationCap, FaDollarSign } from 'react-icons/fa'; // Example icons

interface Technology {
  name: string;
  icon?: string; // Placeholder for actual icon paths or component names
}

interface Company {
  name: string;
  description: string;
  logo?: string; // Placeholder for logo path
  link: string;
  technologies: Technology[];
}

interface Sector {
  name: string;
  description: string;
  icon: React.ElementType; // Using React.ElementType for dynamic icons
  companies: Company[];
}

const sectorsData: Sector[] = [
  {
    name: "Investment Banking",
    description: "Strategic financial advisory and capital solutions for global enterprises.",
    icon: FaDollarSign,
    companies: [
      {
        name: "Cubie Capital Partners",
        description: "Leading M&A advisory and private equity investments.",
        link: "/subsidiaries/cubie-capital-partners",
        technologies: [{ name: "Fintech Platforms" }, { name: "Data Analytics" }],
      },
      {
        name: "Cubie Strategic Advisors",
        description: "Providing expert financial consulting and wealth management.",
        link: "/subsidiaries/cubie-strategic-advisors",
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
        link: "/subsidiaries/cubie-tech-innovations",
        technologies: [{ name: "Cloud Computing" }, { name: "Automation" }, { name: "AI & ML" }],
      },
      {
        name: "Cubie AI Labs",
        description: "Advancing artificial intelligence and machine learning research.",
        link: "/subsidiaries/cubie-ai-labs",
        technologies: [{ name: "AI & ML" }, { name: "Data Analytics" }],
      },
      {
        name: "Cubie Cloud Solutions",
        description: "Delivering secure and efficient cloud infrastructure services.",
        link: "/subsidiaries/cubie-cloud-solutions",
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
        link: "/subsidiaries/cubie-urban-developers",
        technologies: [{ name: "Smart City Tech" }, { name: "Green Building" }],
      },
      {
        name: "Cubie Infra Solutions",
        description: "Developing critical infrastructure projects globally.",
        link: "/subsidiaries/cubie-infra-solutions",
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
        link: "/subsidiaries/cubie-lifestyle",
        technologies: [{ name: "E-commerce Platforms" }, { name: "Supply Chain AI" }],
      },
      {
        name: "Cubie Foods",
        description: "Producing high-quality, sustainable food and beverage products.",
        link: "/subsidiaries/cubie-foods",
        technologies: [{ name: "Food Tech" }, { name: "Sustainable Agriculture" }],
      },
      {
        name: "Cubie Fashion",
        description: "Setting trends with innovative and sustainable apparel.",
        link: "/subsidiaries/cubie-fashion",
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
        link: "/subsidiaries/cubie-renewables",
        technologies: [{ name: "Green Energy" }, { name: "Smart Grids" }],
      },
      {
        name: "Cubie Power Solutions",
        description: "Providing reliable and efficient power generation and distribution.",
        link: "/subsidiaries/cubie-power-solutions",
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
        link: "/subsidiaries/cubie-health-tech",
        technologies: [{ name: "Telemedicine" }, { name: "Wearable Tech" }],
      },
      {
        name: "Cubie Pharma Research",
        description: "Pioneering drug discovery and pharmaceutical development.",
        link: "/subsidiaries/cubie-pharma-research",
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
        link: "/subsidiaries/cubie-robotics",
        technologies: [{ name: "Robotics" }, { name: "Automation" }],
      },
      {
        name: "Cubie Advanced Materials",
        description: "Developing next-generation materials for diverse industrial applications.",
        link: "/subsidiaries/cubie-advanced-materials",
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
        link: "/subsidiaries/cubie-global-logistics",
        technologies: [{ name: "Smart Logistics" }, { name: "Blockchain" }],
      },
      {
        name: "Cubie Mobility Solutions",
        description: "Innovating in urban mobility and smart transportation systems.",
        link: "/subsidiaries/cubie-mobility-solutions",
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
        link: "/subsidiaries/cubie-eco-solutions",
        technologies: [{ name: "Circular Economy Tech" }, { name: "Waste-to-Energy" }],
      },
      {
        name: "Cubie Carbon Capture",
        description: "Pioneering technologies for carbon capture and environmental remediation.",
        link: "/subsidiaries/cubie-carbon-capture",
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
        link: "/subsidiaries/cubie-ed-tech",
        technologies: [{ name: "Personalized Learning AI" }, { name: "Gamification" }],
      },
      {
        name: "Cubie Community Foundation",
        description: "Driving social change through philanthropic programs and community development.",
        link: "/subsidiaries/cubie-community-foundation",
        technologies: [{ name: "Impact Measurement Tech" }, { name: "Volunteer Management" }],
      },
    ],
  },
];

const CompaniesSectorsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Intro Section */}
      <section className="py-16 bg-white text-center shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Our Companies & Sectors</h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Cubie Groups brings together a dynamic portfolio of businesses across diverse sectors — from cutting-edge technology and strategic investment banking to sustainable infrastructure and consumer lifestyle brands.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Powered by next-generation technologies, our companies drive growth, innovation, and positive impact worldwide. We are committed to building a future where diverse businesses thrive through advanced solutions and a dedication to sustainable practices.
          </p>
        </div>
      </section>

      {/* Interactive Sectors Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Explore Our Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectorsData.map((sector, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <sector.icon className="text-cubie-blue-500 text-4xl mr-4" />
                  <h3 className="text-2xl font-semibold text-gray-900">{sector.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{sector.description}</p>
                <Link href={`/sectors/${sector.name.toLowerCase().replace(/\s/g, '-')}`} className="text-cubie-blue-600 hover:underline font-medium">
                  Learn More &rarr;
                </Link>

                {/* Companies Listing under each sector */}
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Group Companies:</h4>
                  <ul className="space-y-4">
                    {sector.companies.map((company, compIndex) => (
                      <li key={compIndex} className="border border-gray-100 rounded-md p-4 bg-gray-50">
                        <Link href={company.link} className="block">
                          <h5 className="text-lg font-medium text-gray-900 hover:text-cubie-blue-600 transition-colors duration-200">
                            {company.name}
                          </h5>
                          <p className="text-sm text-gray-600 mt-1">{company.description}</p>
                        </Link>
                        {/* Technology Tags */}
                        <div className="mt-3 flex flex-wrap gap-2">
                          {company.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cubie-blue-100 text-cubie-blue-800">
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-cubie-blue-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Partner with Cubie Groups</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explore opportunities for partnerships, connect with our business leaders, or read about the group’s innovation stories.
          </p>
          <Link href="/contact" className="bg-white text-cubie-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
            Connect With Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CompaniesSectorsPage;
