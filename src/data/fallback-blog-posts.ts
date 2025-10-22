/**
 * Fallback blog posts for Pathmark Advisory
 * These will display when WordPress is not yet configured
 */

export interface FallbackPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  image?: {
    url: string;
    alt: string;
  } | null;
  excerpt?: string;
  content?: string;
  author?: string;
  categories?: string[];
}

export const fallbackBlogPosts: FallbackPost[] = [
  {
    _id: 'fallback-1',
    title: 'The Future of Renewable Energy in Nigeria',
    slug: { current: 'future-renewable-energy-nigeria' },
    publishedAt: new Date().toISOString(),
    image: {
      url: '/images/Energy-banner.png',
      alt: 'Renewable Energy Solutions',
    },
    excerpt: 'Exploring the immense potential of renewable energy solutions in Nigeria and how Pathmark Advisory is helping clients transition to sustainable energy sources.',
    content: `
      <p>Nigeria's energy landscape is undergoing a significant transformation, with renewable energy emerging as a key driver of sustainable development. At Pathmark Advisory, we're at the forefront of this green revolution, helping businesses and government agencies harness the power of clean energy.</p>
      
      <h2>The Renewable Energy Opportunity</h2>
      <p>With abundant solar resources and growing wind potential, Nigeria is positioned to become a renewable energy hub in West Africa. Our team specializes in:</p>
      <ul>
        <li>Solar farm development and implementation</li>
        <li>Wind energy feasibility studies</li>
        <li>Hybrid renewable energy systems</li>
        <li>Energy storage solutions</li>
      </ul>
      
      <h2>Our Approach</h2>
      <p>We work closely with international investors and local stakeholders to develop renewable energy projects that are both economically viable and environmentally sustainable. Our comprehensive services include project planning, regulatory compliance, and long-term operational support.</p>
      
      <p>Contact us to learn how renewable energy can transform your business operations and contribute to Nigeria's sustainable future.</p>
    `,
    author: 'Pathmark Advisory Team',
    categories: ['Energy', 'Renewable Energy'],
  },
  {
    _id: 'fallback-2',
    title: 'Mining Operations: Best Practices for Sustainable Development',
    slug: { current: 'mining-operations-sustainable-development' },
    publishedAt: new Date(Date.now() - 86400000 * 7).toISOString(),
    image: {
      url: '/images/mining-banner.png',
      alt: 'Mining Operations',
    },
    excerpt: 'Understanding the critical balance between profitable mining operations and environmental stewardship in Nigeria\'s growing mining sector.',
    content: `
      <p>Nigeria's mining sector holds tremendous potential, with vast reserves of solid minerals including gold, tin, iron ore, and limestone. At Pathmark Advisory, we provide comprehensive consulting services to help mining companies operate efficiently while maintaining environmental and social responsibility.</p>
      
      <h2>Our Mining Consulting Services</h2>
      <p>We offer end-to-end support for mining operations:</p>
      <ul>
        <li>Mining license acquisition and regulatory compliance</li>
        <li>Geological surveys and resource assessment</li>
        <li>Environmental impact assessments</li>
        <li>Community relations and stakeholder engagement</li>
        <li>Operations optimization and safety protocols</li>
      </ul>
      
      <h2>Sustainable Mining Practices</h2>
      <p>Modern mining operations must balance profitability with sustainability. We help our clients implement best practices that minimize environmental impact while maximizing operational efficiency and community benefit.</p>
      
      <p>Our team has extensive experience working with both local and international mining companies, ensuring projects meet global standards while respecting local contexts.</p>
    `,
    author: 'Pathmark Advisory Team',
    categories: ['Mining', 'Energy'],
  },
  {
    _id: 'fallback-3',
    title: 'Infrastructure Development: Building Nigeria\'s Future',
    slug: { current: 'infrastructure-development-nigeria-future' },
    publishedAt: new Date(Date.now() - 86400000 * 14).toISOString(),
    image: {
      url: '/images/construction-banner.png',
      alt: 'Construction and Infrastructure Development',
    },
    excerpt: 'How strategic infrastructure investments are transforming Nigeria\'s economic landscape and creating opportunities for growth.',
    content: `
      <p>Infrastructure development is the backbone of economic growth. Pathmark Advisory specializes in planning, executing, and managing large-scale infrastructure projects across Nigeria, from roads and bridges to commercial complexes and industrial facilities.</p>
      
      <h2>Our Construction Services</h2>
      <p>We provide comprehensive project management for:</p>
      <ul>
        <li>Roads and transportation infrastructure</li>
        <li>Commercial and residential buildings</li>
        <li>Industrial facilities and warehouses</li>
        <li>Water and sanitation systems</li>
        <li>Telecommunications infrastructure</li>
      </ul>
      
      <h2>Project Excellence</h2>
      <p>Our approach combines international best practices with local expertise. We ensure projects are completed on time, within budget, and to the highest quality standards. Our team handles everything from initial feasibility studies to final commissioning.</p>
      
      <h2>Investment Opportunities</h2>
      <p>We connect local and international investors with high-value infrastructure projects. Our due diligence and project management services help investors navigate Nigeria's construction sector with confidence.</p>
    `,
    author: 'Pathmark Advisory Team',
    categories: ['Construction', 'Investment'],
  },
  {
    _id: 'fallback-4',
    title: 'Digital Transformation: Technology Solutions for Modern Business',
    slug: { current: 'digital-transformation-technology-solutions' },
    publishedAt: new Date(Date.now() - 86400000 * 21).toISOString(),
    image: {
      url: '/images/technology-banner.png',
      alt: 'Digital Technology Solutions',
    },
    excerpt: 'Leveraging technology to drive business efficiency, innovation, and growth in the digital age.',
    content: `
      <p>In today's rapidly evolving business environment, digital transformation is no longer optional—it's essential. Pathmark Advisory helps organizations embrace technology to improve operations, enhance customer experiences, and drive growth.</p>
      
      <h2>Our Technology Services</h2>
      <p>We provide strategic technology consulting and implementation:</p>
      <ul>
        <li>Digital strategy development</li>
        <li>Enterprise software solutions</li>
        <li>Cloud migration and management</li>
        <li>Data analytics and business intelligence</li>
        <li>Cybersecurity consulting</li>
        <li>IT infrastructure optimization</li>
      </ul>
      
      <h2>Tailored Solutions</h2>
      <p>Every organization is unique. We work closely with clients to understand their specific challenges and opportunities, then design and implement technology solutions that deliver measurable results.</p>
      
      <p>Whether you're a startup looking to build your technology foundation or an established enterprise seeking to modernize operations, our team has the expertise to guide your digital transformation journey.</p>
    `,
    author: 'Pathmark Advisory Team',
    categories: ['Technology', 'Consulting'],
  },
  {
    _id: 'fallback-5',
    title: 'Investment Opportunities in Nigeria\'s Growing Economy',
    slug: { current: 'investment-opportunities-nigeria-economy' },
    publishedAt: new Date(Date.now() - 86400000 * 28).toISOString(),
    image: {
      url: '/images/investment.png',
      alt: 'Investment Opportunities',
    },
    excerpt: 'Discover high-potential investment opportunities across Nigeria\'s diverse economic sectors with expert guidance from Pathmark Advisory.',
    content: `
      <p>Nigeria's economy offers compelling investment opportunities across multiple sectors. With a population of over 200 million and a rapidly growing middle class, the potential for growth is enormous. Pathmark Advisory helps investors identify, evaluate, and execute profitable investments.</p>
      
      <h2>Key Investment Sectors</h2>
      <p>We specialize in connecting investors with opportunities in:</p>
      <ul>
        <li>Energy and renewable resources</li>
        <li>Mining and natural resources</li>
        <li>Infrastructure and construction</li>
        <li>Technology and telecommunications</li>
        <li>Agriculture and food processing</li>
        <li>Financial services</li>
      </ul>
      
      <h2>Our Investment Services</h2>
      <p>We provide comprehensive support throughout the investment lifecycle:</p>
      <ul>
        <li>Market analysis and opportunity identification</li>
        <li>Due diligence and risk assessment</li>
        <li>Regulatory compliance and licensing</li>
        <li>Partner identification and negotiation</li>
        <li>Project structuring and financing</li>
        <li>Ongoing operational support</li>
      </ul>
      
      <h2>Local Expertise, Global Standards</h2>
      <p>Our team combines deep local knowledge with international best practices. We help foreign investors navigate Nigeria's business environment while assisting local investors access global opportunities.</p>
      
      <p>Contact us to explore investment opportunities that match your risk profile and return expectations.</p>
    `,
    author: 'Pathmark Advisory Team',
    categories: ['Finance', 'Investment'],
  },
  {
    _id: 'fallback-6',
    title: 'Strategic Business Consulting: Driving Growth and Excellence',
    slug: { current: 'strategic-business-consulting-growth' },
    publishedAt: new Date(Date.now() - 86400000 * 35).toISOString(),
    image: {
      url: '/images/consulting-banner.png',
      alt: 'Strategic Business Consulting',
    },
    excerpt: 'Transform your business with strategic consulting services that deliver measurable results and sustainable growth.',
    content: `
      <p>Success in today's competitive business environment requires more than just hard work—it demands strategic thinking, expert guidance, and flawless execution. Pathmark Advisory provides comprehensive business consulting services to help organizations achieve their goals.</p>
      
      <h2>Our Consulting Approach</h2>
      <p>We work as your strategic partner, providing:</p>
      <ul>
        <li>Strategic planning and execution</li>
        <li>Organizational development and change management</li>
        <li>Process optimization and efficiency improvement</li>
        <li>Market entry and expansion strategies</li>
        <li>Performance management systems</li>
        <li>Leadership development and training</li>
      </ul>
      
      <h2>Industry Expertise</h2>
      <p>Our consultants have deep experience across multiple sectors including energy, construction, technology, finance, and government relations. This diverse expertise allows us to bring fresh perspectives and proven solutions to your unique challenges.</p>
      
      <h2>Results-Driven</h2>
      <p>We focus on delivering tangible results. Every engagement is tailored to your specific needs, with clear objectives, measurable outcomes, and ongoing support to ensure sustainable success.</p>
      
      <p>Partner with Pathmark Advisory to unlock your organization's full potential and achieve lasting competitive advantage.</p>
    `,
    author: 'Pathmark Advisory Team',
    categories: ['Consulting', 'Business Strategy'],
  },
];


