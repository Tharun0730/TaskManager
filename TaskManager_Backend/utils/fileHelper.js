import fs from "fs/promises";
import path from "path";

const filePath = path.join(
  process.cwd(),
  "tasks.json"
);

export const readTasks = async () => {
  const data = await fs.readFile(
    filePath,
    "utf-8"
  );

  return JSON.parse(data);
};

export const writeTasks = async (tasks) => {
  await fs.writeFile(
    filePath,
    JSON.stringify(tasks, null, 2)
  );
};