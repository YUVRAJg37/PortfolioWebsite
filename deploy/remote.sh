#!/usr/bin/env bash
# Runs on the VM: installs the site and adds the Caddy site once.
# Safe to re-run; the Caddy change is validated first and rolled back if invalid.
set -euo pipefail
sudo mkdir -p /var/www/portfolio
sudo cp /tmp/portfolio-index.html /var/www/portfolio/index.html
sudo chmod 644 /var/www/portfolio/index.html
rm -f /tmp/portfolio-index.html

if ! sudo grep -q '^yuvi.dev' /etc/caddy/Caddyfile; then
  sudo cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.bak-before-portfolio
  printf '\n' | sudo tee -a /etc/caddy/Caddyfile >/dev/null
  sudo tee -a /etc/caddy/Caddyfile </tmp/Caddyfile.portfolio >/dev/null
  if sudo caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile &>/tmp/caddy-validate.log; then
    sudo systemctl reload caddy
    echo "caddy: site added"
  else
    sudo cp /etc/caddy/Caddyfile.bak-before-portfolio /etc/caddy/Caddyfile
    echo "caddy: new config invalid, restored the old one" >&2
    cat /tmp/caddy-validate.log >&2
    exit 1
  fi
fi
rm -f /tmp/Caddyfile.portfolio
systemctl is-active caddy
