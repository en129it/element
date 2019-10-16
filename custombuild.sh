#!/bin/sh
# ng build testelement --output-hashing=none && cat dist/testelement/runtime.js <(echo) dist/testelement/polyfills.js <(echo) dist/testelement/scripts.js <(echo) dist/testelement/main.js > preview/testelement.js
ng build testelement --output-hashing=none --es5-browser-support &&
rm preview/testelement.js
rm preview/styles.css

cat dist/testelement/runtime.js >> preview/testelement.js
echo "" >> preview/testelement.js
cat dist/testelement/es2015-polyfills.js >> preview/testelement.js
echo "" >> preview/testelement.js
cat dist/testelement/polyfills.js >> preview/testelement.js
echo "" >> preview/testelement.js
cat dist/testelement/styles.js >> preview/testelement.js
echo "" >> preview/testelement.js
cat dist/testelement/vendor.js >> preview/testelement.js
echo "" >> preview/testelement.js
cat dist/testelement/main.js >> preview/testelement.js
echo "" >> preview/testelement.js



#for f in dist/testelement/*.js; do (cat "${f}"; echo "") >> preview/testelement.js; done
cp dist/testelement/styles.css preview/