# Firebase Cloud Functions

## Setup

### Dev env setup

Perform following step when setting up a new development environment:

```bash
echo GOOGLE_API_KEY=... > .env
```

### Project init

These steps were perfomed when I set up this project for the 1st time. Under unusual circumstances, they may be useful again:

```bash
npm i langchain @langchain/google-genai eslint-config-prettier
```

### Local dev server

Run these steps when resuming development. In terminal #1:

```bash
npm i
tsc -w
```

#### Known limitations

- `@google/generative-ai` requires `fetch`, available in node v18+.

- API calls initiated by `@google/generative-ai` have [geo restrictions](https://ai.google.dev/available_regions#available_regions). Make sure your code runs from within a supported region.

- `.env` vars will only be available from within Cloud Functions calls, an never globally. All initialization code should be moved to your (`onRequest` or `onCall`) handlers.
