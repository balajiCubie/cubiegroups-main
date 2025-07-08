# Introduction to React Hooks: Simplifying State Management and Side Effects

React Hooks have changed how we build components. Learn how to use useState, useEffect, and other built-in hooks to create more reusable and testable components.

## Why Hooks?

Before hooks, you needed to use class components to:
- Manage local state
- Handle lifecycle events
- Reuse stateful logic between components

Hooks solve these problems elegantly in functional components.

## The useState Hook

The \`useState\` hook allows you to add state to functional components:

\`\`\`jsx
import React, { useState }m from 'react';

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
