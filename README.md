# Anik Kumar Portfolio

This is a static React portfolio built with Vite and packaged for production with Docker.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Docker

Build the production image:

```bash
docker build -t anik-portfolio .
```

Run the container:

```bash
docker run --rm -p 8080:80 anik-portfolio
```

Open `http://localhost:8080` in your browser.

## Publish To GitHub

The workspace is ready for GitHub publishing, but the local macOS Git command is currently blocked by the Xcode license prompt in this environment. Once that is cleared, the usual flow is:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/anik-ug/anik-portfolio.git
git push -u origin main
```
