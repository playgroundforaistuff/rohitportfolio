# Rohit Kanojia — Portfolio Website

A modern, dark-themed portfolio with an AI chat assistant powered by Groq.

## Tech Stack
- **Next.js 14** (App Router)
- **Tailwind CSS** — styling
- **Framer Motion** — animations
- **Groq API** — AI chat (llama-3.3-70b-versatile)
- **Vercel** — deployment

---

## Local Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Add your Groq API key
Open `.env.local` and replace the placeholder:
```
GROQ_API_KEY=your_actual_groq_api_key_here
```
Get a free key at: https://console.groq.com

### 3. Run locally
```bash
npm run dev
```
Visit http://localhost:3000

---

## Deploy to Vercel

### Option A: Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (follow prompts)
vercel

# For production deployment
vercel --prod
```

### Option B: Deploy via GitHub
1. Push this project to a GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/rohit-portfolio.git
git push -u origin main
```

2. Go to https://vercel.com → New Project → Import from GitHub
3. Select your repository
4. Vercel auto-detects Next.js — click Deploy

### ⚠️ IMPORTANT: Add Environment Variable on Vercel
After deploying, go to:
**Vercel Dashboard → Your Project → Settings → Environment Variables**

Add:
- **Name:** `GROQ_API_KEY`
- **Value:** your actual Groq API key
- **Environment:** Production, Preview, Development

Then redeploy: **Deployments → Redeploy**

---

## Project Structure
```
rohit-portfolio/
├── app/
│   ├── page.jsx              # Main page (imports all sections)
│   ├── layout.jsx            # Root layout + metadata
│   ├── globals.css           # Global styles + fonts
│   └── api/chat/route.js     # Groq API endpoint
├── components/
│   ├── Navbar.jsx            # Sticky nav with mobile menu
│   ├── Hero.jsx              # Landing section with stats
│   ├── About.jsx             # Summary + highlight cards
│   ├── Experience.jsx        # Expandable timeline
│   ├── Skills.jsx            # Animated skill bars + tags
│   ├── Certifications.jsx    # Badge-style cert cards
│   ├── AiChat.jsx            # Groq-powered chat widget
│   └── Contact.jsx           # Email + LinkedIn + footer
├── .env.local                # API keys (never commit)
├── vercel.json               # Vercel config
└── package.json
```

---

## Customization

**Update your info:** Edit the data arrays at the top of each component file.

**Change AI behavior:** Edit the `SYSTEM_PROMPT` in `app/api/chat/route.js`

**Change colors:** Edit CSS variables in `app/globals.css`
