#!/usr/bin/env node
'use strict';
const meow = require('meow');
const doNotDisturb = require('./');

const cli = meow(`
  Usage
    $ do-not-disturb <input>

  Examples
    $ do-not-disturb on

    $ do-not-disturb off
`);

const state = cli.input[0]

if (state === 'on') {
  doNotDisturb.on();
} else if (state === 'off') {
  doNotDisturb.off()
} else {
  throw new Error(`Unrecognized input: ${cli.input}`)
}
