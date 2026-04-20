Deploying a static site using Github Action on Github Pages
# Deploy to GitHub Pages (Systematic Guide)

This project uses Vite, so deployment should publish the built output from the dist folder.

## 1. Prerequisites

- GitHub account
- Repository created on GitHub
- Branch name: main
- Node.js 18+ installed locally

## 2. Deployment Flow

1. Developer pushes code to main.
2. GitHub Actions workflow runs.
3. Workflow installs dependencies and builds the project.
4. Build artifact from dist is uploaded.
5. GitHub Pages deploys the artifact.
6. Website is available at the GitHub Pages URL.

## 3. One-Time Repository Setup

1. Open repository settings.
2. Go to Pages.
3. Under Build and deployment, set Source to GitHub Actions.
4. Save.

## 4. Create Workflow File

Create this file:

- .github/workflows/deploy.yml

Use this content:

```yaml
name: Deploy Vite site to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload build artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 5. Push and Trigger Deployment

Run:

```bash
git add .
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

Then:

1. Open the Actions tab.
2. Open the latest workflow run.
3. Wait until the Deploy to GitHub Pages step is successful.

## 6. Get Live URL

After success:

1. Open repository Settings > Pages.
2. Copy the Pages URL.
3. Open it in browser.

Expected format:

- https://<github-username>.github.io/<repository-name>/

## 7. Update Cycle

For each new change:

1. Update code.
2. Commit and push to main.
3. GitHub Actions redeploys automatically.
4. Refresh the same Pages URL.

## 8. Troubleshooting

### Build fails in Actions

- Check Node version in workflow (use Node 20).
- Run locally first:

```bash
npm ci
npm run build
```

### 404 or blank page on GitHub Pages

- Confirm source is set to GitHub Actions in Pages settings.
- Confirm workflow uploads ./dist, not ./.
- If using a project repository path, ensure Vite base is configured in vite.config.js when needed.

### Permission errors during deploy

- Ensure workflow includes these permissions:
  - pages: write
  - id-token: write

## 9. Optional: Vite Base Config (Project Pages)

If deployed to https://<user>.github.io/<repo>/ and assets fail, set base in vite.config.js:

```js
export default defineConfig({
  base: '/<repo>/',
  plugins: [vue()],
})
```

For custom domain or user/organization root pages, keep base as default.
If you want to look into more crisp and quick summary of steps needed, you can visit the following link GitHub Pages Deployment

