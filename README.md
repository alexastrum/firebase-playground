# Firebase + Google AI Quickstart Template

## Setup

### Dev env setup

Perform following step when setting up a new development environment:

1. Use `prettier` auto-formatting everywhere.

2. ```bash
   # Needed by Firebase Emulator
   brew install java

   npm i -g typescript firebase-tools

   firebase login
   ```

### Project init

These steps were perfomed when I set up this project for the 1st time. Under unusual circumstances, they may be useful again:

```bash
firebase init
npm create vite@latest
```

### Local dev server

Run these steps when resuming development:

1. First read:

   - [functions/README.md](./vite-project/README.md)
   - [vite-project/README.md](./vite-project/README.md)

2. Then, in terminal #2:

   ```bash
   firebase emulators:start
   ```

3. Open

   - Vite: <http://localhost:5173>
   - Firebase Emulator UI: <http://127.0.0.1:4000>
   - Cloud Functions: <http://127.0.0.1:5001/langchain-playground-df8bd/us-central1/helloWorld>
