require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.deleteOne({ id: "5e58071b4b6eff2def447d00" }).then(() => {
  return Task.countDocuments({ completed: false });
}).then((result) => {
  console.log(result);
}).catch((e) => {
  console.log(e);
})
