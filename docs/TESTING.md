# Testing Guide for Lumynar UI v1.1.0

## Installation Instructions

### For React 19.x projects:

```bash
npm install lumynar-ui --legacy-peer-deps
```

### For React 16.8+ to 18.x projects:

```bash
npm install lumynar-ui
```

## Usage Examples

### Basic Import and Usage

```jsx
import React from 'react';
import { Button, Card, Container, InputField, Alert } from 'lumynar-ui';

function App() {
  return (
    <Container>
      <Card>
        <h1>Welcome to Lumynar UI</h1>
        <InputField placeholder='Enter your name...' />
        <Button onClick={() => alert('Hello!')}>Click me!</Button>
        <Alert variant='success'>Package is working correctly!</Alert>
      </Card>
    </Container>
  );
}

export default App;
```

### Available Components

#### Layout Components

- `Container` - Responsive container with size variants
- `Card` - Flexible card component with padding and shadow options
- `Grid`, `Row`, `Column` - Grid system components

#### Form Components

- `Button` - Versatile button with variants and sizes
- `InputField` - Text input with styling
- `Label` - Form labels
- `Checkbox` - Checkbox input
- `FormWrapper` - Form container

#### Typography

- `Heading` - Heading component with size variants
- `Paragraph` - Paragraph text component

#### UI Utilities

- `Badge` - Status badges
- `Loading` - Loading indicators
- `Skeleton` - Skeleton loaders
- `Divider` - Divider lines

#### Notifications

- `Alert` - Alert messages with variants
- `Toast` - Toast notifications

#### Media

- `Avatar` - User avatars
- `Image` - Enhanced image component

## Testing Your Installation

Create a test file to verify the package works:

```jsx
// test-components.jsx
import React from 'react';
import { Button, Card, InputField } from 'lumynar-ui';

export default function TestComponents() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Lumynar UI Test</h1>

      <Card style={{ marginBottom: '20px' }}>
        <h2>Button Test</h2>
        <Button variant='primary'>Primary Button</Button>
        <Button variant='secondary'>Secondary Button</Button>
      </Card>

      <Card>
        <h2>Input Test</h2>
        <InputField placeholder='Test input...' />
      </Card>
    </div>
  );
}
```

## Package Information

- **Name:** lumynar-ui
- **Version:** 1.1.0
- **React Compatibility:** >=16.8.0 (including React 19)
- **Bundle Size:** ~15KB (with all components)
- **Format:** CommonJS + ES Modules

## Troubleshooting

### Peer Dependency Issues

If you see peer dependency warnings with React 19:

```bash
npm install lumynar-ui --legacy-peer-deps
```

### Import Issues

Always import from the main package:

```jsx
// ✅ Correct
import { Button } from 'lumynar-ui';

// ❌ Don't do this
import Button from 'lumynar-ui/src/components/ui/buttons/Buttons';
```

### Build Issues

If components don't render, ensure:

1. React is properly installed
2. Package was installed with correct peer dependency flags
3. Using the built version (not source files)
