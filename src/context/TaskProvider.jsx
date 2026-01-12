import { useEffect, useState } from "react";
import { TaskContext } from "./TaskContext";
import { getTasks } from "../services/kanban";
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
        setTasks(await getTasks());
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, [isAuth]);

  return (
    <TaskContext.Provider value={{ tasks, isLoading, error }}>
      {children}
    </TaskContext.Provider>
  );
};
