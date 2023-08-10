'use strict';

const share = require('..');
const assert = require('assert').strict;

assert.strictEqual(share(), 'Hello from share');
console.info('share tests passed');
