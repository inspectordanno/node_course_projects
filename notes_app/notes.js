const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'your notes';
}

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function(note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('new note added!'));
  } else {
    console.log(chalk.red.inverse('note title taken'));
  }

  saveNotes(notes);
}

const removeNote = (title) => {
  const notes = loadNotes();
  const remainingNotes = notes.filter((note) => note.title !== title);
  if (notes.length > remainingNotes.length) {
    saveNotes(remainingNotes);
    console.log(chalk.green.inverse('note removed'));
  } else {
    console.log(chalk.red.inverse('note not found'));
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}