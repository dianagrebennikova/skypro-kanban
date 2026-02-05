import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import { useTasks } from "../../context/TaskContext";
import { toast } from "react-toastify";

const CATEGORY_MAP = {
  "Web Design": "_orange",
  Research: "_green",
  Copywriting: "_purple",
};

function PopNewCard() {
  const navigate = useNavigate();
  const { addTask } = useTasks();

  const [isDarkTheme] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(" ");
  const [topic, setTopic] = useState("Research");
  const [date, setDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => navigate(-1);

  const handleCreate = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const taskData = {
        title: title.trim() || "Новая задача",
        topic: topic || "Research",
        status: "Без статуса",
        description: description.trim() || " ",
        date: date ? new Date(date).toISOString() : new Date().toISOString(),
      };

      const success = await addTask(taskData);

      if (success) {
        toast.success("Задача успешно создана!");
        navigate(-1);
      } else {
        toast.error("Не удалось создать задачу");
      }
    } catch (err) {
      toast.error(err || "Ошибка сервера при создании задачи");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container" onClick={handleClose}>
        <div
          className={`pop-new-card__block ${isDarkTheme ? "dark-mode" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>

            <div className="pop-new-card__wrap">
              <form className="pop-new-card__form form-new">

                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>

                  <input
                    className="form-new__input"
                    type="text"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>

                  <textarea
                    className="form-new__area"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </form>

              <div className="form-new__block">
                <Calendar
                  date={date}
                  variant="full"
                  onChange={setDate}
                />
              </div>
            </div>

            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>

              <div className="categories__themes">
                {Object.keys(CATEGORY_MAP).map((cat) => (
                  <div
                    key={cat}
                    className={`categories__theme ${CATEGORY_MAP[cat]} ${
                      topic === cat ? "_active-category" : ""
                    }`}
                    onClick={() => setTopic(cat)}
                  >
                    <p style={{ margin: 0 }}>{cat}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="form-new__create _hover01"
              onClick={handleCreate}
              disabled={isLoading}
            >
              {isLoading ? "Создание..." : "Создать задачу"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;
