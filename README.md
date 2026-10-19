# Shiva Engineering Works

## Run locally

```sh
npm install
npm start
```

The development server is available at http://localhost:3000.

## Deploy to GitHub Pages

The GitHub Actions workflow builds and deploys the site to
https://vverma01232.github.io/SEW whenever a commit is pushed to `main`.

In the repository settings, open **Pages** and set **Build and deployment** >
**Source** to **GitHub Actions**. The workflow creates a `404.html` fallback so
client-side routes continue to work when opened directly or refreshed.

The custom domain `shivaenggworks.com` is configured in GitHub Pages and declared
in `public/CNAME`. Configure the apex (`@`) DNS record(s) with your DNS provider
to point to GitHub Pages. Optionally point `www` to `shivaenggworks.com` with a
`CNAME` record. Keep existing mail-related `MX` and `TXT` records unchanged.
After DNS propagates and GitHub finishes its DNS check, enable **Enforce HTTPS**
in the repository's Pages settings.
