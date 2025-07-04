export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js: A Comprehensive Guide',
    excerpt: 'Next.js is a powerful React framework that enables you to build server-side rendered applications with ease. Learn how to get started and build your first app.',
    content: `
      # Getting Started with Next.js: A Comprehensive Guide

      Next.js has revolutionized the way developers build React applications by providing a powerful framework for server-side rendering, static site generation, and more.

      ## Why Next.js?

      Next.js offers several advantages over a traditional React application:

      - **Server-Side Rendering (SSR)**: Improves performance and SEO
      - **Static Site Generation (SSG)**: Generate static pages at build time
      - **Automatic Code Splitting**: Load only what's necessary
      - **Built-in CSS and Sass Support**: Simplified styling
      - **API Routes**: Create API endpoints within your Next.js app

      ## Setting Up Your First Next.js Project

      Getting started with Next.js is remarkably simple. Here's how you can create your first project:

      \`\`\`bash
      npx create-next-app my-next-app
      cd my-next-app
      npm run dev
      \`\`\`

      This will create a new Next.js project and start the development server on http://localhost:3000.

      ## Understanding the Project Structure

      A default Next.js project includes the following key directories:

      - \`pages/\`: Contains all the pages of your application
      - \`public/\`: Stores static assets like images
      - \`styles/\`: Contains your CSS files

      ## Creating Your First Page

      In Next.js, a page is simply a React component exported from a file in the \`pages\` directory. For example, creating a file at \`pages/about.js\` with the following content:

      \`\`\`jsx
      export default function About() {
        return <div>About Page</div>
      }
      \`\`\`

      This will be accessible at \`/about\`.

      ## Data Fetching

      Next.js provides several ways to fetch data for your pages:

      - \`getStaticProps\`: Fetch data at build time
      - \`getStaticPaths\`: Specify dynamic routes to pre-render based on data
      - \`getServerSideProps\`: Fetch data on each request

      ## Conclusion

      Next.js simplifies building React applications while providing powerful features out of the box. By leveraging its capabilities, you can create fast, SEO-friendly applications with a great developer experience.
    `,
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    date: 'May 7, 2025',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    tags: ['Next.js', 'React', 'Web Development']
  },
  {
    id: 'mastering-tailwind-css',
    title: 'Mastering Tailwind CSS: From Basics to Advanced',
    excerpt: 'Learn how to use Tailwind CSS to build beautiful, responsive user interfaces without writing custom CSS. Discover tips, tricks, and best practices.',
    content: `
      # Mastering Tailwind CSS: From Basics to Advanced

      Tailwind CSS has taken the web development world by storm, offering a utility-first approach to styling that can dramatically speed up development.

      ## What is Tailwind CSS?

      Tailwind CSS is a utility-first CSS framework that allows you to build designs directly in your markup. Unlike traditional CSS frameworks like Bootstrap, Tailwind doesn't provide pre-designed components. Instead, it gives you utility classes that you can combine to create custom designs.

      ## Getting Started with Tailwind

      Adding Tailwind to your project is straightforward:

      \`\`\`bash
      npm install tailwindcss
      npx tailwindcss init
      \`\`\`

      Then, configure your \`tailwind.config.js\` and create a CSS file that imports Tailwind:

      \`\`\`css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      \`\`\`

      ## Building with Utility Classes

      Tailwind's approach shines when you start building interfaces:

      \`\`\`html
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/store.jpg" alt="Store front">
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
            <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
          </div>
        </div>
      </div>
      \`\`\`

      ## Advanced Techniques

      ### Custom Configurations

      Tailwind allows extensive customization through its configuration file:

      \`\`\`js
      // tailwind.config.js
      module.exports = {
        theme: {
          extend: {
            colors: {
              brand: {
                light: '#E8F5E9',
                DEFAULT: '#4CAF50',
                dark: '#2E7D32',
              }
            }
          }
        }
      }
      \`\`\`

      ### Creating Component Classes

      For repeating patterns, you can extract components using \`@apply\`:

      \`\`\`css
      @layer components {
        .btn-primary {
          @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
        }
      }
      \`\`\`

      ## Conclusion

      Tailwind CSS offers a refreshing approach to styling web applications. By embracing its utility-first philosophy, you can build unique, responsive designs faster than ever before, all while maintaining complete control over your styling.
    `,
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    date: 'May 5, 2025',
    author: {
      name: 'Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    tags: ['CSS', 'Tailwind', 'Frontend']
  },
  {
    id: 'modern-javascript-features',
    title: 'Modern JavaScript Features Every Developer Should Know',
    excerpt: 'Explore the latest JavaScript features that can make your code more readable, maintainable, and efficient. From async/await to optional chaining.',
    content: `
      # Modern JavaScript Features Every Developer Should Know

      JavaScript continues to evolve with new features that make coding more efficient and enjoyable. Let's explore some of the most useful modern JavaScript features that you should be using in your projects.

      ## Async/Await

      Async/await is a revolutionary way to work with promises that makes asynchronous code look and behave more like synchronous code.

      \`\`\`javascript
      // The old way with promises
      function fetchUserData() {
        return fetch('/api/user')
          .then(response => response.json())
          .then(data => {
            console.log(data);
            return data;
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }

      // The new way with async/await
      async function fetchUserData() {
        try {
          const response = await fetch('/api/user');
          const data = await response.json();
          console.log(data);
          return data;
        } catch (error) {
          console.error('Error:', error);
        }
      }
      \`\`\`

      ## Optional Chaining

      Optional chaining (?.) allows you to access deeply nested object properties without having to check if each reference in the chain is valid.

      \`\`\`javascript
      // Without optional chaining
      const streetName = user && user.address && user.address.street && user.address.street.name;

      // With optional chaining
      const streetName = user?.address?.street?.name;
      \`\`\`

      ## Nullish Coalescing

      The nullish coalescing operator (??) provides a way to specify a default value when dealing with null or undefined.

      \`\`\`javascript
      // Using || (returns the default for any falsy value)
      const count = data.count || 0; // Returns 0 when count is 0, but that might not be what you want

      // Using ?? (only defaults for null or undefined)
      const count = data.count ?? 0; // Returns 0 only when count is null or undefined
      \`\`\`

      ## Destructuring Assignment

      Destructuring allows you to extract data from arrays or objects into distinct variables.

      \`\`\`javascript
      // Array destructuring
      const [first, second, ...rest] = ['a', 'b', 'c', 'd', 'e'];
      console.log(first); // 'a'
      console.log(second); // 'b'
      console.log(rest); // ['c', 'd', 'e']

      // Object destructuring
      const { name, age, job = 'Developer' } = { name: 'John', age: 30 };
      console.log(name); // 'John'
      console.log(age); // 30
      console.log(job); // 'Developer' (default value)
      \`\`\`

      ## Spread Syntax

      The spread operator (...) allows you to expand an iterable into its elements.

      \`\`\`javascript
      // Combine arrays
      const arr1 = [1, 2, 3];
      const arr2 = [4, 5, 6];
      const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

      // Clone an object
      const original = { a: 1, b: 2 };
      const copy = { ...original }; // { a: 1, b: 2 }

      // Merge objects
      const updated = { ...original, b: 3, c: 4 }; // { a: 1, b: 3, c: 4 }
      \`\`\`

      ## Conclusion

      Modern JavaScript offers many powerful features that can help you write cleaner, more efficient code. By incorporating these features into your workflow, you'll not only improve your developer experience but also create more maintainable applications.
    `,
    coverImage: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
    date: 'May 2, 2025',
    author: {
      name: 'Alex Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    },
    tags: ['JavaScript', 'ES6', 'Programming']
  },
  {
    id: 'introduction-to-react-hooks',
    title: 'Introduction to React Hooks: Simplifying State Management and Side Effects',
    excerpt: 'React Hooks have changed how we build components. Learn how to use useState, useEffect, and other built-in hooks to create more reusable and testable components.',
    content: `
      # Introduction to React Hooks: Simplifying State Management and Side Effects

      React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. They've revolutionized how React components are built, making them more concise and reusable.

      ## Why Hooks?

      Before hooks, you needed to use class components to:
      - Manage local state
      - Handle lifecycle events
      - Reuse stateful logic between components

      Hooks solve these problems elegantly in functional components.

      ## The useState Hook

      The \`useState\` hook allows you to add state to functional components:

      \`\`\`jsx
      import React, { useState } from 'react';

      function Counter() {
        const [count, setCount] = useState(0);

        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }
      \`\`\`

      ## The useEffect Hook

      The \`useEffect\` hook handles side effects in functional components:

      \`\`\`jsx
      import React, { useState, useEffect } from 'react';

      function Example() {
        const [count, setCount] = useState(0);

        // Similar to componentDidMount and componentDidUpdate:
        useEffect(() => {
          // Update the document title using the browser API
          document.title = \`You clicked \${count} times\`;
          
          // Optional cleanup function (similar to componentWillUnmount)
          return () => {
            document.title = 'React App';
          };
        }, [count]); // Only re-run when count changes

        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }
      \`\`\`

      ## Custom Hooks

      One of the most powerful features of hooks is the ability to create custom hooks, which allow you to extract component logic into reusable functions:

      \`\`\`jsx
      import { useState, useEffect } from 'react';

      function useWindowWidth() {
        const [width, setWidth] = useState(window.innerWidth);
        
        useEffect(() => {
          const handleResize = () => setWidth(window.innerWidth);
          window.addEventListener('resize', handleResize);
          
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
        
        return width;
      }

      // Then use it in a component
      function ResponsiveComponent() {
        const width = useWindowWidth();
        
        return (
          <div>
            {width < 768 ? <MobileView /> : <DesktopView />}
          </div>
        );
      }
      \`\`\`

      ## Other Built-in Hooks

      React provides several other hooks for different purposes:

      - \`useContext\`: Subscribe to React context
      - \`useReducer\`: Manage complex state logic
      - \`useCallback\`: Memoize functions
      - \`useMemo\`: Memoize values
      - \`useRef\`: Access DOM elements or persist values without causing re-renders

      ## Rules of Hooks

      To ensure hooks work correctly, follow these rules:

      1. Only call hooks at the top level of your function
      2. Only call hooks from React functions, not regular JavaScript functions
      3. The React linter plugin helps enforce these rules

      ## Conclusion

      React Hooks have transformed how we build React applications, making components more reusable, testable, and easier to understand. By embracing hooks, you'll write more maintainable code and have a better developer experience.
    `,
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    date: 'April 29, 2025',
    author: {
      name: 'Jessica Lee',
      avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
    },
    tags: ['React', 'Hooks', 'JavaScript']
  },
  {
    id: 'secrets-of-effective-web-design',
    title: 'The Secrets of Effective Web Design: Principles that Convert',
    excerpt: 'Discover the key design principles that not only make websites look good but also drive user engagement and conversion. Learn practical techniques to implement in your next project.',
    content: `
      # The Secrets of Effective Web Design: Principles that Convert

      Great web design goes beyond aesthetics—it's about creating experiences that guide users toward taking desired actions. Let's explore the key principles that make websites not just beautiful, but effective conversion tools.

      ## Visual Hierarchy: Guiding the User's Eye

      Visual hierarchy determines how users process information on your page. By strategically using size, color, contrast, and spacing, you can guide visitors to the most important elements first.

      ### Practical Implementation:

      - Make your call-to-action (CTA) buttons stand out with contrasting colors
      - Use larger font sizes for headlines and important information
      - Position critical content "above the fold" (visible without scrolling)
      - Create Z-pattern layouts for text-heavy pages and F-patterns for content-heavy sites

      ## White Space: The Power of Breathing Room

      Also called negative space, white space isn't wasted space—it's a critical design element that improves readability, comprehension, and focus.

      ### Practical Implementation:

      - Add generous padding around important elements
      - Increase line spacing in text blocks to 1.5-2 times the font size
      - Group related elements closer together while separating distinct sections
      - Don't fear emptiness—it gives the eye a place to rest

      ## Color Psychology: Emotional Connection

      Colors evoke specific emotions and associations. Strategic use of color can significantly impact how users perceive your brand and influence their behavior.

      ### Practical Implementation:

      - Use blue to convey trust and reliability (ideal for financial or healthcare sites)
      - Implement red or orange for urgent CTAs that require immediate action
      - Apply green for growth, environmental, or financial gain messaging
      - Limit your palette to 2-3 primary colors with supporting neutrals

      ## Responsive Design: Universal Accessibility

      With mobile traffic exceeding desktop on many sites, responsive design isn't optional—it's essential. Your design must provide an optimal experience across all devices.

      ### Practical Implementation:

      - Use flexible grid layouts that adapt to screen sizes
      - Test your design on multiple devices and browsers
      - Implement touch-friendly elements (larger buttons, adequate spacing) for mobile
      - Consider content prioritization differently for mobile vs. desktop

      ## Load Time Optimization: Keeping Users Engaged

      Design decisions impact load time, and users abandon sites that load slowly. Each second of delay reduces conversions significantly.

      ### Practical Implementation:

      - Optimize image sizes without sacrificing quality
      - Implement lazy loading for below-the-fold content
      - Minimize HTTP requests by combining files where possible
      - Use performance monitoring tools to identify bottlenecks

      ## Typography: Readability and Brand Voice

      Typography choices affect both readability and brand personality. The right font combination enhances user experience and strengthens brand identity.

      ### Practical Implementation:

      - Use sans-serif fonts for digital readability (especially on mobile)
      - Limit your site to 2-3 complementary font families
      - Ensure adequate contrast between text and background
      - Scale font sizes appropriately for headlines, subheads, and body text

      ## Conclusion

      Effective web design balances aesthetics with functionality, creating experiences that not only delight users visually but guide them toward taking desired actions. By implementing these principles in your next project, you'll create designs that don't just look good—they convert.
    `,
    coverImage: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
    date: 'April 27, 2025',
    author: {
      name: 'David Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    tags: ['Web Design', 'UI/UX', 'Conversion']
  }
];

export function getBlogPostById(id: string): BlogPost | undefined {
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
