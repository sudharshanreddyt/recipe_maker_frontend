# AI Recipe Cooking Assistant

### Project structure

```
recipe_maker_frontend/
├── app/
│   ├── (app)/
│   ├── api/
│   ├── components/
│   ├── fonts/
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── livekit/
│   ├── ui/
│   ├── app.tsx
│   ├── session-view.tsx
│   └── welcome.tsx
├── hooks/
├── lib/
├── public/
└── package.json
```

## Getting started

Then run the app with:

```bash
pnpm install
pnpm dev
```

And open http://localhost:3000 in your browser. You'll also need an agent to speak with.

#### Environment Variables

You'll also need to configure your LiveKit credentials in `.env.local`

```env
LIVEKIT_API_KEY=your_livekit_api_key
LIVEKIT_API_SECRET=your_livekit_api_secret
LIVEKIT_URL=https://your-livekit-server-url
```
