
import program from 'commander';
import appicon from './appicon';

program
  .version('1.0.0')
  .option('-s --source <source>', 'Appicon.png')
  .option('-D --dest [dest]', 'Destination')
  .parse(process.argv);

if (!program.source && !program.dest) {
  appicon('Appicon.png');
} else if (program.source && !program.dest) {
  appicon(program.source);
} else if (program.source && program.dest) {
  appicon(program.source, program.dest);
}
