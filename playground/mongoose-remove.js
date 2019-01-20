const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '5c43c46e137b5367135d3e39'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5c43c46e137b5367135d3e39').then((todo) => {
  console.log(todo);
});