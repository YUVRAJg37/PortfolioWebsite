#!/usr/bin/env bash
# Ships the site to the GCP VM behind Caddy. Usage: GCP_ACCOUNT=you@example.com ./deploy.sh
set -euo pipefail
cd "$(dirname "$0")"
gc() { gcloud --account="${GCP_ACCOUNT:?set GCP_ACCOUNT to the Google account that owns the VM}" --project=expenses-509914 "$@"; }
gc compute scp --quiet --zone=us-central1-a index.html expenses:/tmp/portfolio-index.html
gc compute scp --quiet --zone=us-central1-a deploy/Caddyfile.portfolio expenses:/tmp/Caddyfile.portfolio
gc compute ssh expenses --zone=us-central1-a --quiet --command 'bash -s' <deploy/remote.sh
echo "Deployed: https://yuvi.dev"
