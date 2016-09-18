#!/usr/bin/env node

import program from 'commander';
import appicon from './appicon';

program
  .version('1.0.0')
  .option('-s --source <source>', 'Appicon.png')
  .parse(process.argv);

if (!program.source) {
  appicon('Appicon.png');
} else {
  appicon(program.source);
}
