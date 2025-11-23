# 🚀 Lumynar UI v1.1.0 - Temporary Installation Guide

**Note:** Due to npm 2FA requirements, version 1.1.0 is available for local installation while we update the npm registry.

## ✅ Install Latest Version (1.1.0) with React 19 Support

### Method 1: Direct Installation from GitHub

```bash
npm install https://github.com/Nayem707/nayem-ui-framework.git
```

### Method 2: Local Package Installation

If you have the package locally:

```bash
npm install path/to/lumynar-ui-1.1.0.tgz
```

### Method 3: For React 19 Users (Workaround for registry version)

```bash
npm install lumynar-ui --legacy-peer-deps --force
```

## 🔄 npm Registry Status

- **Current npm version:** 0.0.1 (React 16.8-18 support)
- **Latest local version:** 1.1.0 (React 16.8+ including React 19)
- **Publishing status:** Setting up 2FA for npm registry update

## 📦 What's New in v1.1.0

- ✅ React 19 compatibility
- ✅ 15+ UI components
- ✅ Improved build process
- ✅ Better TypeScript support preparation
- ✅ Enhanced documentation

## 🧩 Component Usage

```jsx
import { Button, Card, Container, InputField } from 'lumynar-ui';

function App() {
  return (
    <Container>
      <Card>
        <h1>Lumynar UI v1.1.0</h1>
        <InputField placeholder='Works with React 19!' />
        <Button variant='primary'>Click me!</Button>
      </Card>
    </Container>
  );
}
```

## 🔜 Coming Soon

The v1.1.0 will be available on npm registry once 2FA setup is complete.

---

**For immediate React 19 support, use Method 1 or contact the maintainer for the latest package file.**
