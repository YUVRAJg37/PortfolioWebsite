# yuvi.dev

My portfolio: a room path traced live in the browser, with a working terminal on the CRT and one readable page below it. One HTML file, no build step and no 3D library.

- `index.html`: the whole site
- `deploy.sh`, `deploy/`: ships it to a VM behind Caddy

Run locally:

```bash
python3 -m http.server 8765
```

Deploy:

```bash
GCP_ACCOUNT=you@example.com ./deploy.sh
```
