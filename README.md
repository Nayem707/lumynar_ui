<div align="center">
  <img src="./assets/header.svg" alt="Lumynar UI" width="100%" />
</div>

# Lumynar UI

[![npm version](https://badge.fury.io/js/lumynar-ui.svg)](https://www.npmjs.com/package/lumynar-ui)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![React](https://img.shields.io/badge/React-16.8%2B-blue.svg)](https://reactjs.org/)

> A modern, lightweight React UI components library built with simplicity and customization in mind.

## 🚀 Features

- ⚡ **Lightweight** - Minimal bundle size with zero dependencies
- 🎨 **Customizable** - Easy to style and extend components
- 🔧 **TypeScript Ready** - Full TypeScript support (coming soon)
- 📱 **Responsive** - Mobile-first design approach
- 🎯 **Modern** - Built with latest React patterns and best practices
- 🚀 **Fast** - Optimized for performance

## 📦 Installation

Install Lumynar UI using npm or yarn:

```bash
npm install lumynar-ui
```

```bash
yarn add lumynar-ui
```

## 🏁 Quick Start

Import and use Lumynar UI components in your React application:

```jsx
import React from 'react';
import { Button, Input } from 'lumynar-ui';

function App() {
  return (
    <div>
      <Button onClick={() => alert('Hello Lumynar UI!')}>Click me!</Button>
      <Input placeholder='Enter your name...' />
    </div>
  );
}

export default App;
```

## 📚 Components

### Button

A versatile button component with built-in styling and customization options.

#### Props

| Prop     | Type      | Default  | Description                         |
| -------- | --------- | -------- | ----------------------------------- |
| children | ReactNode | -        | Button content                      |
| onClick  | function  | -        | Click handler                       |
| disabled | boolean   | false    | Disable the button                  |
| type     | string    | 'button' | Button type (button, submit, reset) |

#### Usage

```jsx
import { Button } from 'lumynar-ui';

// Basic button
<Button>Click me</Button>

// Button with onClick handler
<Button onClick={() => console.log('Clicked!')}>
  Submit
</Button>

// Disabled button
<Button disabled>
  Loading...
</Button>
```

### Input

A clean and accessible input component for forms.

#### Props

| Prop        | Type     | Default | Description            |
| ----------- | -------- | ------- | ---------------------- |
| placeholder | string   | -       | Input placeholder text |
| value       | string   | -       | Controlled input value |
| onChange    | function | -       | Change handler         |
| type        | string   | 'text'  | Input type             |
| disabled    | boolean  | false   | Disable the input      |

#### Usage

```jsx
import { Input } from 'lumynar-ui';

// Basic input
<Input placeholder='Enter text...' />;

// Controlled input
const [value, setValue] = useState('');
<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder='Controlled input'
/>;
```

## 🎨 Customization

All Lumynar UI components are designed to be easily customizable. You can override default styles by passing custom styles through props or by using CSS classes.

### Custom Styling Example

```jsx
<Button
  style={{
    backgroundColor: '#ff6b6b',
    padding: '15px 30px',
    fontSize: '18px',
  }}
>
  Custom Styled Button
</Button>
```

## 🛠️ Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:

```bash
git clone https://github.com/Nayem707/lumynar_ui.git
cd lumynar_ui
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
│   │   ├── Button/
│   │   ├── Input/
│   │   └── Card/
│   └── index.js
├── dist/
├── assets/
├── package.json
├── rollup.config.js
└── README.md
```

## 📋 Roadmap

- [ ] 🎯 TypeScript support
- [ ] 📱 More components (Card, Modal, Tooltip, etc.)
- [ ] 🎨 Theme system
- [ ] 📖 Storybook documentation
- [ ] 🧪 Comprehensive testing suite
- [ ] 🌙 Dark mode support
- [ ] ♿ Enhanced accessibility features

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
- Email: [inaeem707@gmail.com](mailto:inaeem707@gmail.com)

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
