const notes = require('./notes.js');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const note = notes();

console.log(note);
console.log(validator.isURL("chritiananalgelo@msn.com"));
console.log(chalk.blue("Success!"))