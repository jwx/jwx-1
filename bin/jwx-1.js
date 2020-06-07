#!/usr/bin/env node
'use strict';

let jwx1;
// Require lib (local, for debugging) or dist (production)
try {
    jwx1 = require('../lib');
} catch (e) {
    jwx1 = require('../dist');
}

const { version } = require('../package.json');
console.log(`jwx-1 v${version}\n`);

jwx1().catch(error => {
    console.error(error);
    process.exit(1);
});
