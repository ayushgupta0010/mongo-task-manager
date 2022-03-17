const Task = require("../model/Task");

const getAllTasks = (req, res) => {
  Task.find({})
    .then((tasks) => res.status(200).json(tasks))
    .catch((err) => res.status(400).json(err));
};

const createTask = (req, res) => {
  Task.create(req.body)
    .then((task) => res.status(201).json(task))
    .catch((err) => res.status(400).json(err));
};

const getTask = (req, res) => {
  Task.findById(req.params.id)
    .then((task) => res.status(200).json(task))
    .catch((err) => res.status(404).json(err));
};

const updateTask = (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((task) => res.status(200).json(task))
    .catch((err) => res.status(400).json(err));
};

const deleteTask = (req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then((task) => res.status(200).json(task))
    .catch((err) => res.status(400).json(err));
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
