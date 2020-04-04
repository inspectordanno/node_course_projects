const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async () => {
//   // const task = await Task.findById("5e8681ddc42e3961c47c1cd3");
//   // await task.populate('owner').execPopulate();
//   // console.log(task.owner);

//   const user = await User.findById("5e8679f31e53985f220c71d3");
//   await user.populate('tasks').execPopulate();
//   console.log(user.tasks);
// }

// main();
