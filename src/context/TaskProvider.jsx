import { useState, useEffect } from "react";
import { TaskContext } from "./TaskContext";
import { getTasks, createTask, updateTask, deleteTask } from "../services/kanban";
import { useAuth } from "./useAuth";

export const TaskProvider = ({ children }) => {
  const { isAuth } = useAuth();

  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isAuth) return;

    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        const data = await getTasks();
        setTasks(data);
      } catch (err) {
        setError(err.message || "Ошибка загрузки задач");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, [isAuth]);

  const addTask = async (task) => setTasks(await createTask(task));
  const editTask = async (id, task) => setTasks(await updateTask(id, task));
  const removeTask = async (id) => setTasks(await deleteTask(id));

  return (
    <TaskContext.Provider value={{ tasks, isLoading, error, addTask, editTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};
