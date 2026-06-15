import {
  getAllTasks,
  addTask,
} from "../services/taskService.js";

export const getTasks = async (
  req,
  res
) => {
  try {
    const tasks = await getAllTasks();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch tasks",
    });
  }
};

export const createTask = async (
  req,
  res
) => {
  try {
    const { title } = req.body;

    if (!title?.trim()) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const task = await addTask(title);

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create task",
    });
  }
};