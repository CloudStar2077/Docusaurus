# Docusaurus Portfolio

A personal portfolio website built with Docusaurus, hosted on GitHub Pages. It showcases projects and writeups in the areas of cybersecurity, software development, and IT operations.

# Table of Contents

1. [Quickstart](#Quickstart) 
2. [Usage](#Usage)

## Quickstart

Prerequisites

- Node.js v24.16.0 or higher
- npm 11.17.0 or higher
- Git

- Clone Repository 
```bash
git clone git@github.com:CloudStar2077/Docusaurus.git &&
cd Docusaurus
``` 

- Install Node.js and npm 
```bash
sudo apt update && sudo apt install -y nodejs npm
```

- Create a new Docusaurus project:
```bash
npx create-docusaurus@latest my-portfolio classic --typescript
cd my-portfolio
```

- Install dependencies:
```bash
npm install
```

- Start the local development server:
```bash
npm run start
```

The site is now available at `http://localhost:3000`.

## Usage

The portfolio is built with Docusaurus, a modern static site generator based on React and TypeScript. The `docusaurus.config.ts` is the central configuration file and controls the site title, base URL, navbar, footer, and custom fields. Environment variables are loaded at build time via `dotenv` and passed to React components through Docusaurus `customFields`, since process.env is not available in the browser. The `sidebars.ts` defines the structure of the documentation sidebar and is set to auto-generate from the `docs/` folder structure. Each project documentation is stored in its own subfolder under `docs/` and contains a `README.md` as the entry point and a `_category_.json` for the sidebar label and position. The portfolio homepage is defined in `src/pages/index.tsx` and assembles all React components — Header, Hero, Skills, Projects, Contact, and Footer into a single page layout. Each component lives in its own folder under `src/components/` with an `index.tsx` and a CSS Module file for styling. Sensitive configuration such as contact email, LinkedIn URL, and GitHub username is stored in the `.env` file and never committed to the repository. The .gitignore ensures that the .env file and automatically generated content like build/ and node_modules/ are excluded from version control. The CI/CD pipeline is defined in 
`.github/workflows/deploy.yml` and is triggered on every push to the main branch. GitHub Actions reads the environment variables from GitHub Secrets, creates the .env file at build time, builds the static site, and deploys it to GitHub Pages.

- Copy the example and fill in your values:
```bash
cp example.env .env
```

| Variable | Description |
|---|---|
| `DOCUSAURUS_GITHUB_USERNAME` | Your GitHub username |
| `DOCUSAURUS_CONTACT_EMAIL` | Your contact email |
| `DOCUSAURUS_LINKEDIN_URL` | Your LinkedIn profile URL |
| `DOCUSAURUS_SITE_TITLE` | Your name |
| `DOCUSAURUS_SITE_TAGLINE` | Your job title |
| `DOCUSAURUS_GITHUB_URL` | Your GitHub profile URL |
| `DOCUSAURUS_URL` | Your GitHub Pages URL |
| `DOCUSAURUS_BASE_URL` | Your repository base URL (e.g. `/Docusaurus/`) |

:::caution
Never commit your `.env` file. Make sure `.env` is listed in `.gitignore`.
:::

## GitHub Repository Setup

Create a new repository on GitHub and push the project:
```bash
git init
git add .
git commit -m "initial commit"
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## GitHub Pages Setup

1. Go to your repository on GitHub
2. Navigate to **Settings → Pages**
3. Under **Source** select **GitHub Actions**

## GitHub Actions Secrets

Go to **Settings → Secrets → Actions → New repository secret** and add the following secrets:

| Secret | Value |
|---|---|
| `DOCUSAURUS_GITHUB_USERNAME` | Your GitHub username |
| `DOCUSAURUS_CONTACT_EMAIL` | Your contact email |
| `DOCUSAURUS_LINKEDIN_URL` | Your LinkedIn URL |
| `DOCUSAURUS_SITE_TITLE` | Your name |
| `DOCUSAURUS_SITE_TAGLINE` | Your job title |
| `DOCUSAURUS_GITHUB_URL` | Your GitHub profile URL |
| `DOCUSAURUS_URL` | Your GitHub Pages URL |
| `DOCUSAURUS_BASE_URL` | `/YOUR_REPO_NAME/` |

## Deployment

The site is automatically deployed on every push to the `main` branch via GitHub Actions.

To trigger a manual deployment:
```bash
git commit --allow-empty -m "trigger deployment"
git push
```

The site will be available at:

`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

To build the site locally:
```bash
npm install dotenv && npm run build  
```

To serve the built site locally:
```bash
npm run serve
```









