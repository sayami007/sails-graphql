/**
 * ToDoTaskController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  task: async function(req, res) {
    if (req.method == "GET") {
      let id = req.param("id");
      let todoTask = await ToDoTask.find({
        id
      });
      return res.send(todoTask);
    } else return res.send("Method mismatch error");
  },

  list: async function(req, res) {
    let todoTasks = await ToDoTask.find();
    return res.send(todoTasks);
  },

  add: async function(req, res) {
    let taskName = req.param("taskName");
    let taskDetail = req.param("taskDetail");
    let taskDate = req.param("taskDate");
    if (req.method == "POST") {
      try {
        var enterToDatabase = await ToDoTask.create({
          taskName,
          taskDetail,
          taskDate
        }).fetch();
        return res.send(
          await ToDoTask.find({
            id: enterToDatabase.id
          })
        );
      } catch (err) {
        return res.send(err);
      }
    } else {
      return res.serverError();
    }
  },

  addRandom: async function(req, res) {
    try {
      for (let i = 0; i < 10; i++) {
        await ToDoTask.create({
          taskName: `TaskName:${i}`,
          taskDetail: `TaskDetail:${i}`,
          taskDate: `TaskDate:${i}`
        });
      }
      return res.send(await ToDoTask.find());
    } catch (err) {
      return res.send(err);
    }
  },

  remove: async function(req, res) {
    let id = req.param("id");
    if (req.method == "POST") {
      ToDoTask.destroy({
        id
      }).then(async function() {
        return res.send(await ToDoTask.find());
      });
    } else {
      return res.serverError();
    }
  },

  edit: async function(req, res) {
    let id = req.param("id");
    let taskName = req.param("taskName");
    let taskDetail = req.param("taskDetail");
    let taskDate = req.param("taskDate");
    if (req.method == "POST") {
      try {
        var enterToDatabase = await ToDoTask.update(id)
          .set({
            taskName,
            taskDetail,
            taskDate
          })
          .fetch();
        return res.send(
          await ToDoTask.find({
            id: enterToDatabase.id
          })
        );
      } catch (err) {
        return res.send(err);
      }
    } else {
      return res.serverError();
    }
  }
};
