# Installing Lumynar UI Locally (Bypass npm Registry Issues)

Since the npm registry has the old version (0.0.1) and your local version (1.1.0) has React 19 support, you can install directly from your local package.

## Method 1: Install from Local Path

In your test project directory:

```bash
# Navigate to your test project
cd C:\Users\HP\Desktop\lumynar-test

# Install from local path
npm install "C:\Users\HP\Desktop\lumynar-ui"
```

## Method 2: Create a Local Link

```bash
# In the lumynar-ui directory
cd C:\Users\HP\Desktop\lumynar-ui
npm link

# In your test project
cd C:\Users\HP\Desktop\lumynar-test
npm link lumynar-ui
```

## Method 3: Pack and Install

```bash
# In lumynar-ui directory - create a tarball
cd C:\Users\HP\Desktop\lumynar-ui
npm pack

# This creates lumynar-ui-1.1.0.tgz
# Then in your test project:
cd C:\Users\HP\Desktop\lumynar-test
npm install "C:\Users\HP\Desktop\lumynar-ui\lumynar-ui-1.1.0.tgz"
```

## Publishing to npm (When Ready)

To publish to npm and fix the 2FA issue:

1. **Enable 2FA on your npm account:**

   ```bash
   npm profile enable-2fa auth-and-writes
   ```

2. **Publish with OTP:**

   ```bash
   npm publish --otp=<your-6-digit-code>
   ```

3. **Or use a 2FA app** and get the code when publishing

## Testing Your Package

Once installed locally, test in your React 19 project:

```jsx
// In your test project
import { Button, Card, Container } from 'lumynar-ui';

function App() {
  return (
    <Container>
      <Card>
        <h1>Testing Lumynar UI v1.1.0</h1>
        <Button variant='primary'>React 19 Compatible! 🎉</Button>
      </Card>
    </Container>
  );
}
```

## Current Versions

- **Local Package:** v1.1.0 (React >=16.8.0 - includes React 19)
- **npm Registry:** v0.0.1 (React ^16.8.0 || ^17.0.0 || ^18.0.0 - excludes React 19)

The local installation will give you the updated version that works with React 19!
