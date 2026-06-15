import { v4 as uuidv4 } from "uuid";
import {
  readTasks,
  writeTasks,
} from "../utils/fileHelper.js";

export const getAllTasks = async () => {
  return await readTasks();
};

export const addTask = async (title) => {
  const tasks = await readTasks();

  const newTask = {
    id: uuidv4(),
    title,
    isCompleted: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);

  await writeTasks(tasks);

  return newTask;
};