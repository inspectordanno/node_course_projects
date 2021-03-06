const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'your notes';
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
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

const listNotes = () => {
  console.log(chalk.inverse('Your notes'));
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(note.title)
  });
}

const readNote = (title) => {
  const notes = loadNotes();
  const foundNote = notes.find((note) => note.title === title);
  if (foundNote) {
    console.log(chalk.green.inverse(`Title: ${foundNote.title}`));
    console.log(`Body: ${foundNote.body}`);
  } else {
    console.log(chalk.red.inverse('no note found'));
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}