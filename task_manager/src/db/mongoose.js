const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
});

const me = new User({
  name: 'Danno',
  age: 'poop'
});

me.save().then(() => {
  console.log(me);
}).catch((error) => {
  console.log('Error!', error);
})
