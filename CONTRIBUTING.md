# Contributing to Lumynar UI

Thank you for your interest in contributing to Lumynar UI! We welcome all contributions that help improve the library.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Setting up the Development Environment

1. **Fork the repository**

   - Click the "Fork" button at the top right of the repository page

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/nayem-ui-framework.git
   cd nayem-ui-framework
   ```

3. **Add upstream remote**

   ```bash
   git remote add upstream https://github.com/Nayem707/nayem-ui-framework.git
   ```

4. **Install dependencies**

   ```bash
   npm install
   ```

5. **Start development mode**
   ```bash
   npm run dev
   ```

## 🎯 How to Contribute

### Reporting Issues

Before creating a new issue, please:

- Search existing issues to avoid duplicates
- Use the issue template if available
- Provide as much detail as possible

### Suggesting Features

We love feature suggestions! Please:

- Check if the feature already exists or is planned
- Create an issue with the "feature request" label
- Describe the use case and expected behavior

### Code Contributions

1. **Create a new branch**

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes**

   - Follow the coding standards (see below)
   - Write clear, concise commit messages
   - Add tests if applicable

3. **Test your changes**

   ```bash
   npm run build
   # Test the build output
   ```

4. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: add new component X"
   ```

5. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Use a clear title and description
   - Reference any related issues
   - Include screenshots if UI changes are involved

## 📝 Coding Standards

### JavaScript/JSX

- Use ES6+ syntax
- Follow React best practices
- Use functional components with hooks
- Keep components simple and focused

### Component Structure

```jsx
import React from 'react';

export const ComponentName = ({ prop1, prop2, ...props }) => {
  // Component logic here

  return (
    <element
      {...props}
      style={{
        // Default styles
        ...defaultStyles,
        // Allow style overrides
        ...props.style,
      }}
    >
      {/* Component content */}
    </element>
  );
};

export default ComponentName;
```

### Styling Guidelines

- Use inline styles for component defaults
- Allow style prop overrides
- Keep styles minimal and focused
- Ensure responsive design principles

### File Organization

```
src/
├── components/
│   ├── ComponentName/
│   │   ├── index.js
│   │   └── ComponentName.jsx
│   └── index.js (export all components)
└── index.js (main entry point)
```

## 🔍 Code Review Process

1. All code changes must be submitted via Pull Request
2. At least one maintainer must review and approve the PR
3. All tests must pass
4. Code must follow the established patterns and standards
5. Documentation must be updated if applicable

## 📋 Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` new features
- `fix:` bug fixes
- `docs:` documentation changes
- `style:` code style changes (formatting, etc.)
- `refactor:` code refactoring
- `test:` adding or updating tests
- `chore:` maintenance tasks

Examples:

```
feat: add Modal component with accessibility features
fix: resolve Button hover state issue
docs: update installation instructions
style: format code according to prettier rules
```

## 🚀 Release Process

1. Version bumps follow [Semantic Versioning](https://semver.org/)
2. Releases are created from the `main` branch
3. Release notes are automatically generated from commit messages
4. NPM packages are published automatically via CI/CD

## 🤔 Questions?

If you have any questions about contributing:

1. Check this contributing guide
2. Look through existing issues and discussions
3. Create a new issue with the "question" label
4. Join our community discussions

## 📜 Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different viewpoints and experiences

## 🙏 Recognition

Contributors are recognized in:

- The project README
- Release notes
- Our contributors page (coming soon)

Thank you for helping make Lumynar UI better! 🎉
