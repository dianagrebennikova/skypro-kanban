// TaskProvider.js
import { useState, useEffect } from "react";
import { TaskContext } from "./TaskContext";
import { getTasks, createTask, updateTask, deleteTask } from "../services/kanban";
import { useAuth } from "./useAuth";

export const TaskProvider = ({ children }) => {
  const { isAuth } = useAuth();

  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Загрузка задач при авторизации
  useEffect(() => {
    if (!isAuth) {
      setTasks([]);
      return;
    }

    const fetchTasks = async () => {
      try {
        setError(null);
        setIsLoading(true);
        const data = await getTasks();
        setTasks(data);
      } catch {
        setError("Ошибка загрузки задач");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, [isAuth]);

  // Добавление новой задачи
  const addTask = async (task) => {
    try {
      const allTasks = await createTask(task);

      const createdTask = allTasks.find(
        (t) => t.title === task.title && t.date === task.date
      );
  
      if (createdTask) {
        setTasks((prev) => [...prev, createdTask]); 
      }
    } catch {
      setError("Ошибка добавления задачи");
    }
  };
  

  // Редактирование задачи 
  const editTask = async (id, updatedTask) => {
    try {
      setTasks((prev) =>
        prev.map((t) => (t._id === id || t.id === id ? { ...t, ...updatedTask } : t))
      );

      await updateTask(id, updatedTask);
    } catch {
      setError("Ошибка редактирования задачи");
    }
  };

  // Удаление задачи
  const removeTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id && t.id !== id));
    } catch {
      setError("Ошибка удаления задачи");
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, isLoading, error, addTask, editTask, removeTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
