const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('email is invalid');
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number');
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('password cannot contain password');
      }
    },
  }
});

// const me = new User({
//   name: '    Mike   ',
//   email: 'FART@GMAIL.COM ',
//   password: 'fartsdsdffds'
// });

// me.save().then(() => {
//   console.log(me);
// }).catch((error) => {
//   console.log('Error!', error);
// });

const Task = mongoose.model('Task', {
  description: {
    type: String,
    trim: true,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const eggs = new Task({
  description: '  buy eggs    '
})

eggs.save().then(() => {
  console.log(eggs);
}).catch((error) => {
  console.log('Error!', error);
});
