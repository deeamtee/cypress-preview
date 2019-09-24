#!/bin/bash
set -e
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1

echo "Node `node -v`"
echo "NPM v`npm -v`"

printf "\n\e[92m[*] Clean ./dist directory\e[0m\n"
rm -rf ./dist && echo "Done"

printf "\n\e[92m[*] Clean ./node_modules directory\e[0m\n"
rm -rf node_modules && echo "Done"

printf "\n\e[92m[*] Install npm dependencies\e[0m\n"
npm prune --production
npm install --no-progress --ignore-scripts --no-optional

printf "\n\e[92m[*] Build w/ webpack\e[0m\n"
./node_modules/.bin/webpack --mode production --config scripts/webpack/webpack.prod.js --color -p --hide-modules --display-optimization-bailout

printf "\n\e[92m[*] Gziped files\e[0m\n"
find ./dist -type f -name "*.css" -or -name "*.js" | while read file; do echo "Compressing $file"; gzip -9 -c "$file" > "$file.gz"; done

printf "\n\e[92mDone\e[0m"
