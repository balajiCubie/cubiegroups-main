export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string;
    bio?: string; // New optional bio property
  };
  tags: string[];
  series?: { // New series property
    name: string;
    order: number;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js: A Comprehensive Guide',
    excerpt: 'Next.js is a powerful React framework that enables you to build server-side rendered applications with ease. Learn how to get started and build your first app.',
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    date: 'May 7, 2025',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Sarah is a senior full-stack developer with a passion for Next.js and modern web technologies. She loves sharing her knowledge through technical articles and open-source contributions.',
    },
    tags: ['Next.js', 'React', 'Web Development'],
    series: { name: 'Next.js Series', order: 1 } // Example series data
  },
  {
    id: 'mastering-tailwind-css',
    title: 'Mastering Tailwind CSS: From Basics to Advanced',
    excerpt: 'Learn how to use Tailwind CSS to build beautiful, responsive user interfaces without writing custom CSS. Discover tips, tricks, and best practices.',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    date: 'May 5, 2025',
    author: {
      name: 'Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Michael is a UI/UX expert and a strong advocate for utility-first CSS frameworks. He specializes in creating highly performant and visually appealing web interfaces.',
    },
    tags: ['CSS', 'Tailwind', 'Frontend']
  },
  {
    id: 'modern-javascript-features',
    title: 'Modern JavaScript Features Every Developer Should Know',
    excerpt: 'Explore the latest JavaScript features that can make your code more readable, maintainable, and efficient. From async/await to optional chaining.',
    coverImage: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
    date: 'May 2, 2025',
    author: {
      name: 'Alex Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
      bio: 'Alex is a JavaScript enthusiast and a backend developer. He enjoys diving deep into language features and optimizing code for scalability and efficiency.',
    },
    tags: ['JavaScript', 'ES6', 'Programming']
  },
  {
    id: 'introduction-to-react-hooks',
    title: 'Introduction to React Hooks: Simplifying State Management and Side Effects',
    excerpt: 'React Hooks have changed how we build components. Learn how to use useState, useEffect, and other built-in hooks to create more reusable and testable components.',
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    date: 'April 29, 2025',
    author: {
      name: 'Jessica Lee',
      avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
      bio: 'Jessica is a frontend developer specializing in React. She focuses on building intuitive user interfaces and improving developer experience with modern React patterns.',
    },
    tags: ['React', 'Hooks', 'JavaScript']
  },
  {
    id: 'secrets-of-effective-web-design',
    title: 'The Secrets of Effective Web Design: Principles that Convert',
    excerpt: 'Discover the key design principles that not only make websites look good but also drive user engagement and conversion. Learn practical techniques to implement in your next project.',
    coverImage: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
    date: 'April 27, 2025',
    author: {
      name: 'David Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      bio: 'David is a seasoned web designer and UX strategist. He believes in the power of user-centered design to create impactful digital experiences.',
    },
    tags: ['Web Design', 'UI/UX', 'Conversion']
  },
  {
    id: 'placeholder-post-6',
    title: 'The Future of AI in Web Development',
    excerpt: 'Explore how artificial intelligence is set to transform web development, from automated coding to intelligent user interfaces.',
    coverImage: 'https://images.unsplash.com/photo-1507146153580-6137f195690d',
    date: 'June 1, 2025',
    author: {
      name: 'Emily White',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      bio: 'Emily is an AI researcher and a software engineer. She focuses on integrating AI capabilities into web applications to create smarter and more dynamic user experiences.',
    },
    tags: ['AI', 'Web Development', 'Future Tech']
  },
  {
    id: 'placeholder-post-7',
    title: 'Understanding Microservices Architecture',
    excerpt: 'Dive into the world of microservices, understanding their benefits, challenges, and best practices for building scalable applications.',
    coverImage: 'https://images.unsplash.com/photo-1581092917900-c717f217122e',
    date: 'May 28, 2025',
    author: {
      name: 'Daniel Green',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      bio: 'Daniel is a backend architect with extensive experience in designing and implementing distributed systems. He is passionate about microservices and cloud-native development.',
    },
    tags: ['Architecture', 'Backend', 'Cloud']
  },
  {
    id: 'placeholder-post-8',
    title: 'A Guide to Progressive Web Apps (PWAs)',
    excerpt: 'Learn how to build Progressive Web Apps that offer a native app-like experience, combining the best of web and mobile applications.',
    coverImage: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    date: 'May 25, 2025',
    author: {
      name: 'Olivia Brown',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      bio: 'Olivia is a mobile web specialist, dedicated to creating seamless and engaging experiences across all devices. She is an expert in Progressive Web Apps and mobile-first design.',
    },
    tags: ['PWA', 'Frontend', 'Mobile']
  },
  {
    id: 'placeholder-post-9',
    title: 'Demystifying Blockchain Technology',
    excerpt: 'An accessible introduction to blockchain, explaining its core concepts, applications, and impact on various industries.',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af367',
    date: 'May 22, 2025',
    author: {
      name: 'James Taylor',
      avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
      bio: 'James is a blockchain researcher and a fintech consultant. He explores the transformative potential of decentralized technologies and their real-world applications.',
    },
    tags: ['Blockchain', 'Fintech', 'Technology']
  },
  {
    id: 'placeholder-post-10',
    title: 'Optimizing React Performance: Tips and Tricks',
    excerpt: 'Boost your React application\'s speed and responsiveness with these essential optimization techniques and best practices.',
    coverImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
    date: 'May 19, 2025',
    author: {
      name: 'Sophia Miller',
      avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
      bio: 'Sophia is a performance optimization specialist for React applications. She helps teams build fast, scalable, and efficient user interfaces.',
    },
    tags: ['React', 'Performance', 'Frontend']
  },
  {
    id: 'placeholder-post-11',
    title: 'Getting Started with GraphQL',
    excerpt: 'A beginner-friendly guide to GraphQL, covering its advantages over REST and how to start building your first GraphQL API.',
    coverImage: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03',
    date: 'May 16, 2025',
    author: {
      name: 'William Davis',
      avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
      bio: 'William is a backend developer with a focus on API design and data fetching. He is passionate about GraphQL and its ability to streamline data interactions.',
    },
    tags: ['GraphQL', 'API', 'Backend']
  },
  {
    id: 'placeholder-post-12',
    title: 'The Power of Serverless Functions',
    excerpt: 'Discover the benefits of serverless computing and how functions-as-a-service (FaaS) can simplify deployment and scaling.',
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    date: 'May 13, 2025',
    author: {
      name: 'Ava Garcia',
      avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
      bio: 'Ava is a cloud solutions architect, specializing in serverless technologies. She helps businesses build scalable and cost-effective applications on the cloud.',
    },
    tags: ['Serverless', 'Cloud', 'AWS Lambda']
  },
  {
    id: 'placeholder-post-13',
    title: 'Introduction to WebAssembly (Wasm)',
    excerpt: 'Explore WebAssembly, a new type of code that can be run in modern web browsers, offering near-native performance for web applications.',
    coverImage: 'https://images.unsplash.com/photo-1507146153580-6137f195690d',
    date: 'May 10, 2025',
    author: {
      name: 'Noah Martinez',
      avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
      bio: 'Noah is a performance engineer with a keen interest in WebAssembly. He explores how Wasm can bring desktop-like performance to web applications.',
    },
    tags: ['WebAssembly', 'Performance', 'Web Development']
  },
  {
    id: 'placeholder-post-14',
    title: 'Building Accessible Web Interfaces',
    excerpt: 'Learn the importance of web accessibility and practical steps to ensure your websites are usable by everyone, regardless of ability.',
    coverImage: 'https://images.unsplash.com/photo-1581092917900-c717f217122e',
    date: 'May 7, 2025',
    author: {
      name: 'Isabella Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      bio: 'Isabella is an accessibility advocate and a frontend developer. She is passionate about building inclusive web experiences for all users.',
    },
    tags: ['Accessibility', 'UI/UX', 'Inclusive Design']
  },
  {
    id: 'placeholder-post-15',
    title: 'Containerization with Docker and Kubernetes',
    excerpt: 'A guide to containerization, covering Docker for packaging applications and Kubernetes for orchestrating them at scale.',
    coverImage: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    date: 'May 4, 2025',
    author: {
      name: 'Liam Hernandez',
      avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
      bio: 'Liam is a DevOps engineer specializing in containerization and orchestration. He helps teams streamline their deployment pipelines with Docker and Kubernetes.',
    },
    tags: ['DevOps', 'Docker', 'Kubernetes']
  },
  {
    id: 'placeholder-post-16',
    title: 'Introduction to Design Systems',
    excerpt: 'Understand what design systems are, why they are crucial for consistent and scalable product development, and how to build one.',
    coverImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
    date: 'May 1, 2025',
    author: {
      name: 'Mia Lopez',
      avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
      bio: 'Mia is a product designer and a design system enthusiast. She believes in the power of design systems to foster consistency and efficiency in product development.',
    },
    tags: ['Design System', 'UI/UX', 'Product Development']
  },
  {
    id: 'placeholder-post-17',
    title: 'Exploring the Jamstack Ecosystem',
    excerpt: 'Dive into the Jamstack architecture, its benefits for modern web development, and popular tools and frameworks in its ecosystem.',
    coverImage: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03',
    date: 'April 28, 2025',
    author: {
      name: 'Benjamin Gonzalez',
      avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
      bio: 'Benjamin is a web architect focused on modern web development paradigms like Jamstack. He enjoys building fast, secure, and scalable web applications.',
    },
    tags: ['Jamstack', 'Frontend', 'Static Sites']
  },
  {
    id: 'placeholder-post-18',
    title: 'The Rise of Low-Code/No-Code Platforms',
    excerpt: 'Examine how low-code and no-code platforms are empowering developers and non-developers to build applications faster than ever before.',
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    date: 'April 25, 2025',
    author: {
      name: 'Charlotte Perez',
      avatar: 'https://randomuser.me/api/portraits/women/16.jpg',
      bio: 'Charlotte is a technology evangelist exploring the impact of low-code and no-code platforms on software development. She believes in democratizing app creation.',
    },
    tags: ['Low-Code', 'No-Code', 'Rapid Development']
  },
  {
    id: 'placeholder-post-19',
    title: 'Understanding Web Performance Metrics',
    excerpt: 'A deep dive into key web performance metrics like Core Web Vitals, and how to measure and improve your website\'s speed.',
    coverImage: 'https://images.unsplash.com/photo-1507146153580-6137f195690d',
    date: 'April 22, 2025',
    author: {
      name: 'Henry Sanchez',
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
      bio: 'Henry is a web performance consultant, helping businesses optimize their websites for speed and user experience. He is an expert in Core Web Vitals and performance auditing.',
    },
    tags: ['Performance', 'SEO', 'Web Development']
  },
  {
    id: 'placeholder-post-20',
    title: 'The Evolution of CSS: From Floats to Flexbox and Grid',
    excerpt: 'Trace the journey of CSS layout techniques, from older methods to modern Flexbox and Grid, and learn when to use each.',
    coverImage: 'https://images.unsplash.com/photo-1581092917900-c717f217122e',
    date: 'April 19, 2025',
    author: {
      name: 'Amelia Ramirez',
      avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
      bio: 'Amelia is a frontend developer with a strong focus on CSS and responsive design. She enjoys exploring new layout techniques and creating beautiful, adaptable user interfaces.',
    },
    tags: ['CSS', 'Frontend', 'Layout']
  }
];

export function getBlogPostById(id: string): BlogPost | undefined {
  // In a real application, this would fetch content from the markdown file
  return blogPosts.find(post => post.id === id);
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
  return [...blogPosts].slice(0, limit);
}

export function getRelatedPosts(currentPostId: string, limit: number = 2): BlogPost[] {
  const currentPost = getBlogPostById(currentPostId);
  if (!currentPost) return getRecentPosts(limit);

  // Find posts with similar tags
  const relatedPosts = blogPosts
    .filter(post => post.id !== currentPostId)
    .sort((a, b) => {
      const aCommonTags = a.tags.filter(tag => currentPost.tags.includes(tag)).length;
      const bCommonTags = b.tags.filter(tag => currentPost.tags.includes(tag)).length;
      return bCommonTags - aCommonTags;
    })
    .slice(0, limit);

  return relatedPosts;
}

export function getSeriesPost(seriesName: string, order: number): BlogPost | undefined {
  return blogPosts.find(post => post.series?.name === seriesName && post.series?.order === order);
}

export function getPostsByAuthor(authorName: string): BlogPost[] {
  return blogPosts.filter(post => post.author.name === authorName);
}
