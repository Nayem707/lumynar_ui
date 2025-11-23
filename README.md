<div align="center">
  <img src="./src/assets/header.svg" alt="Lumynar UI" width="100%" />
</div>

# Lumynar UI

[![npm version](https://badge.fury.io/js/lumynar-ui.svg)](https://www.npmjs.com/package/lumynar-ui)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![React](https://img.shields.io/badge/React-15.0%2B%20to%2019%2B-blue.svg)](https://reactjs.org/)
[![Universal](https://img.shields.io/badge/Universal-All%20React%20Versions-green.svg)]()

> A modern, lightweight React UI components library compatible with ALL React versions (15+ to 19+) built with simplicity and customization in mind.

## 🚀 Features

- 🌍 **Universal** - Compatible with ALL React versions (15+ to 19+)
- ⚡ **Lightweight** - Minimal bundle size with zero dependencies
- 🎨 **Customizable** - Easy to style and extend components
- 🔧 **TypeScript Ready** - Full TypeScript support (coming soon)
- 📱 **Responsive** - Mobile-first design approach
- 🎯 **Modern** - Built with latest React patterns and best practices
- 🚀 **Fast** - Optimized for performance
- 🔄 **Future-Proof** - Automatic compatibility layer for new React versions

## 📦 Installation

### Universal Installation (Works with ANY React version)

```bash
npm install lumynar-ui
```

```bash
yarn add lumynar-ui
```

### React Version Compatibility

| React Version | Installation             | Status            |
| ------------- | ------------------------ | ----------------- |
| 19.x          | `npm install lumynar-ui` | ✅ Perfect        |
| 18.x          | `npm install lumynar-ui` | ✅ Perfect        |
| 17.x          | `npm install lumynar-ui` | ✅ Perfect        |
| 16.x          | `npm install lumynar-ui` | ✅ Perfect        |
| 15.x          | `npm install lumynar-ui` | ✅ Legacy Support |

## 🏁 Quick Start

Import and use Lumynar UI components in your React application:

```jsx
import React from 'react';
import { Button, InputField, Card, Container } from 'lumynar-ui';

function App() {
  return (
    <Container>
      <Card>
        <h1>Welcome to Lumynar UI</h1>
        <InputField placeholder='Enter your name...' />
        <Button onClick={() => alert('Hello Lumynar UI!')}>Click me!</Button>
        <p>✅ Works with React {React.version}!</p>
      </Card>
    </Container>
  );
}

export default App;
```

## 📚 Components

### 🔘 Interactive Components

- **Button** - Versatile button with variants and sizes
- **InputField** - Text input with styling and validation
- **Checkbox** - Styled checkbox component
- **Label** - Accessible form labels

### 📦 Layout Components

- **Container** - Responsive container with size variants
- **Card** - Flexible card component with shadows
- **Grid** - CSS Grid layout system
- **Row/Column** - Flexible layout components

### 📝 Typography

- **Heading** - Semantic headings with size variants
- **Paragraph** - Styled paragraph component

### 🎨 UI Elements

- **Badge** - Status and notification badges
- **Loading** - Loading spinners and indicators
- **Skeleton** - Skeleton loading placeholders
- **Divider** - Visual content separators
- **Alert** - Alert messages with variants
- **Toast** - Toast notifications

### 🖼️ Media

- **Avatar** - User profile avatars
- **Image** - Enhanced image component

### Example Usage

```jsx
import { Button, InputField, Card, Container, Alert, Badge } from 'lumynar-ui';

function ComponentShowcase() {
  return (
    <Container>
      <Card>
        <Badge variant='success'>New</Badge>
        <h2>Contact Form</h2>

        <InputField placeholder='Enter your email...' type='email' />

        <Button variant='primary' size='lg'>
          Subscribe
        </Button>

        <Alert variant='info'>Works with React {React.version}!</Alert>
      </Card>
    </Container>
  );
}
```

## 🌍 Universal React Compatibility

Lumynar UI is the **first React UI library** that works seamlessly across ALL React versions!

### Compatibility Matrix

| React Version       | Features Available              | Installation             |
| ------------------- | ------------------------------- | ------------------------ |
| **React 19.x**      | 🟢 All features + Future-ready  | `npm install lumynar-ui` |
| **React 18.x**      | 🟢 All features + Concurrent    | `npm install lumynar-ui` |
| **React 17.x**      | 🟢 All features + JSX Transform | `npm install lumynar-ui` |
| **React 16.8+**     | 🟢 All features + Hooks         | `npm install lumynar-ui` |
| **React 16.0-16.7** | 🟡 Core features                | `npm install lumynar-ui` |
| **React 15.x**      | 🟡 Legacy support               | `npm install lumynar-ui` |

### Installation Troubleshooting

```bash
# If you see peer dependency warnings:
npm install lumynar-ui --legacy-peer-deps

# For force installation:
npm install lumynar-ui --force

# Check your React version:
npm list react
```

### Version Detection Example

```jsx
import React from 'react';
import { Button, Alert } from 'lumynar-ui';

function VersionCheck() {
  const reactVersion = React.version;

  return (
    <div>
      <Alert variant='success'>
        🎉 Running React {reactVersion} with Lumynar UI!
      </Alert>
      <Button>Universal Compatibility ✅</Button>
    </div>
  );
}
```

## 🎨 Customization

All Lumynar UI components are designed to be easily customizable. You can override default styles by passing custom styles through props or by using CSS classes.

### Custom Styling Example

```jsx
<Button
  variant='primary'
  size='lg'
  style={{
    backgroundColor: '#ff6b6b',
    padding: '15px 30px',
    fontSize: '18px',
  }}
>
  Custom Styled Button
</Button>
```

### Tailwind CSS Integration

```jsx
<Button className='bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded'>
  Tailwind Styled
</Button>
```

## 🛠️ Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:

```bash
git clone https://github.com/Nayem707/nayem-ui-framework.git
cd nayem-ui-framework
```

2. Install dependencies:

```bash
npm install
```

3. Start development mode:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

### Project Structure

```
lumynar-ui/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── buttons/
│   │   │   ├── forms/
│   │   │   ├── layouts/
│   │   │   ├── typography/
│   │   │   ├── notifications/
│   │   │   └── Media/
│   │   └── utils/
│   └── index.js
├── dist/
├── assets/
├── package.json
├── rollup.config.js
└── README.md
```

## 📋 Roadmap

- [x] 🌍 Universal React compatibility (15+ to 19+)
- [x] 📦 15+ Core UI components
- [x] ⚡ Zero-dependency architecture
- [ ] 🎯 TypeScript support
- [ ] 🎨 Theme system and CSS variables
- [ ] 📖 Storybook documentation
- [ ] 🧪 Comprehensive testing suite
- [ ] 🌙 Dark mode support
- [ ] ♿ Enhanced accessibility features
- [ ] 🚀 Server Components support (React 19+)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Nayem Islam**

- GitHub: [@Nayem707](https://github.com/Nayem707)
- portfolio: [nayemislam.com](https://nayem-490.vercel.app)
- E-mail: [inaeem707@gmail.com](mailto:inaeem707@gmail.com)
- npm: [nayemislam](https://www.npmjs.com/~nayemislam)

## 🙏 Acknowledgments

- React team for the amazing library
- All contributors who help improve this project
- The open-source community for inspiration

## 📞 Support

If you have any questions or need help, please:

1. Check the [documentation](#-components)
2. Search through [existing issues](https://github.com/Nayem707/nayem-ui-framework/issues)
3. Create a [new issue](https://github.com/Nayem707/nayem-ui-framework/issues/new) if needed

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/Nayem707">Nayem Islam</a>
</div>
