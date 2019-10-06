const tasks = {
  tasks: [{
      text: 'Grocery shopping',
      completed: true
  },{
      text: 'Clean yard',
      completed: false
  }, {
      text: 'Film course',
      completed: false
  }],
  getTasksToDo() { //es6 method definition syntax
    return this.tasks.filter((task) => !task.completed);
  }
}

console.log(tasks.getTasksToDo())