#!/bin/sh
# ng build testelement --output-hashing=none && cat dist/testelement/runtime.js <(echo) dist/testelement/polyfills.js <(echo) dist/testelement/scripts.js <(echo) dist/testelement/main.js > preview/testelement.js
ng build testelement --output-hashing=none &&
for f in dist/testelement/*.js; do (cat "${f}"; echo "") >> preview/testelement.js; done