'use strict';

const facebooklogin = require('..');
const assert = require('assert').strict;

assert.strictEqual(facebooklogin(), 'Hello from facebooklogin');
console.info('facebooklogin tests passed');
