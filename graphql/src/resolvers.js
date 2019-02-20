var axios = require("axios");

let todoTasks = [];
let todoTask;

const baseUrl = "http://localhost:1337/todotask";

const resolvers = {
  Query: {
    TodoTasks: async function() {
      await axios.get(`${baseUrl}/list`).then(function(res) {
        todoTask = [];
        todoTasks = res.data;
      });
      return await todoTasks;
    },

    ToDoTask: async function(parent, args, context, info) {
      await axios.get(`${baseUrl}/task?id=${args.id}`).then(function(res) {
        todoTask = res.data;
      });
      return await todoTask[0];
    }
  },
  Mutation: {
    removeToDoTask: async function(parent, args, context, info) {
      await axios
        .post(`${baseUrl}/remove`, {
          id: args.id
        })
        .then(function(res) {
          todoTask = [];
          todoTasks = res.data;
        });
      return await todoTasks;
    },

    addToDoTask: async function(parent, args, context, info) {
      let unitData = [];
      await axios
        .post(`${baseUrl}/add`, {
          taskName: args.unit.taskName,
          taskDetail: args.unit.taskDetail,
          taskDate: args.unit.taskDate
        })
        .then(function(res) {
          unitData = res.data;
        });
      return await unitData[0];
    }
  }
};

module.exports.resolvers = resolvers;
