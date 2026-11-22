#!/bin/zsh
# Writes the favicons, app icons and the Open Graph image to public/. Run with `npm run assets`
# after the app icon (src/assets/app-icon.png) or the hero changes. Needs ImageMagick and Google Chrome.
#
# - Icons: from the app's own icon (AppIcon.appiconset/icon_512x512@2x.png in the app repo, copied to
#   src/assets/app-icon.png). The 1024 px PNG has the macOS grid margin: the tile is 824 px at 100,100.
# - og.png: a crop of the hero (headline and the top of the app window), screenshotted from a fresh build.
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
SRC=src/assets/app-icon.png
PORT=4339
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"; [[ -n ${PREVIEW:-} ]] && kill $PREVIEW 2>/dev/null || true' EXIT

# The tile alone: transparent corners for the browser tab, on ink for places where the system rounds the corners
magick "$SRC" -crop 824x824+100+100 +repage "$TMP/tile.png"
magick "$TMP/tile.png" -resize 96x96 public/favicon.png
magick "$TMP/tile.png" -define icon:auto-resize=48,32,16 public/favicon.ico
magick "$TMP/tile.png" -background '#1e2621' -flatten "$TMP/square.png"
magick "$TMP/square.png" -resize 180x180 public/apple-touch-icon.png
magick "$TMP/square.png" -resize 192x192 public/icon-192.png
magick "$TMP/square.png" -resize 512x512 public/icon-512.png

# Open Graph image: build, serve dist/ with Python (a plain static server, independent of a running astro preview), screenshot the hero at 1440 px (2x), crop to 1.905:1 and scale to 1200 × 630
npx astro build --silent
python3 -m http.server $PORT --bind 127.0.0.1 --directory dist >/dev/null 2>&1 &
PREVIEW=$!
for _ in {1..50}; do curl -sf "http://127.0.0.1:$PORT/" >/dev/null && break; sleep 0.2; done
"$CHROME" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 --virtual-time-budget=3000 \
  --window-size=1440,1000 --screenshot="$TMP/hero.png" "http://127.0.0.1:$PORT/" 2>/dev/null
magick "$TMP/hero.png" -crop 2880x1512+0+300 +repage -resize 1200x630 -strip public/og.png

echo "Wrote favicon.png, favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png and og.png to public/"
