// React version compatibility utilities
import React from 'react';

// Check if we're using React 18+ with createRoot
export const isReact18Plus = () => {
  return !!(React.version && parseInt(React.version.split('.')[0]) >= 18);
};

// Check if we're using React 16.8+ with hooks
export const isReactHooksSupported = () => {
  return !!(React.useState && React.useEffect);
};

// Check if we're using React 17+
export const isReact17Plus = () => {
  return !!(React.version && parseInt(React.version.split('.')[0]) >= 17);
};

// Fallback for older React versions that don't have Fragment
export const SafeFragment = React.Fragment || 'div';

// Safe way to use forwardRef (available in React 16.3+)
export const safeForwardRef = (component) => {
  if (React.forwardRef) {
    return React.forwardRef(component);
  }
  // Fallback for older versions
  return component;
};

// Safe memo usage (React 16.6+)
export const safeMemo = (component, areEqual) => {
  if (React.memo) {
    return React.memo(component, areEqual);
  }
  return component;
};

// Safe use of React.lazy (React 16.6+)
export const safeLazy = (importFunc) => {
  if (React.lazy) {
    return React.lazy(importFunc);
  }
  // Fallback: return a component that immediately loads
  return (props) => {
    const [Component, setComponent] = React.useState(null);

    React.useEffect(() => {
      importFunc().then((mod) => setComponent(() => mod.default || mod));
    }, []);

    return Component ? React.createElement(Component, props) : null;
  };
};

// Polyfill for older React versions
export const ensureReactCompat = () => {
  // Add React.Fragment polyfill for very old versions
  if (!React.Fragment) {
    React.Fragment = ({ children }) => children;
  }

  // Add createContext polyfill for React < 16.3
  if (!React.createContext) {
    React.createContext = (defaultValue) => {
      const context = {
        Provider: ({ value, children }) => {
          React.Children.forEach(children, (child) => {
            if (child && child.type && child.type.contextType === context) {
              child.context = value !== undefined ? value : defaultValue;
            }
          });
          return children;
        },
        Consumer: ({ children }) => children(defaultValue),
      };
      return context;
    };
  }
};

// Initialize compatibility
if (typeof window !== 'undefined') {
  ensureReactCompat();
}
