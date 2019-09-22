const chalk = require('chalk')
const yargs = require('yargs');
const getNotes = require('./notes.js');

//customize yargs version
yargs.version('1.1.0');

//create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    console.log(`Title:${argv.title}`);
    console.log(`Body:${argv.body}`);
  }
});

//create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () => console.log('Removing the note!')
});

//create list command
yargs.command({
  command: 'list',
  describe: 'Listing the notes',
  handler: () => console.log('Listing the notes!')
});

//create read command
yargs.command({
  command: 'read',
  describe: 'Reading the notes',
  handler: () => console.log('Reading the notes!')
});

yargs.parse();



