import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import { useTasks } from "../../context/TaskContext";

const CATEGORY_MAP = {
  "Web Design": "_orange",
  Research: "_green",
  Copywriting: "_purple",
};

function PopNewCard() {
  const navigate = useNavigate();
  const { addTask } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("Web Design");
  const [date, setDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    navigate(-1);
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Введите название задачи");
      return;
    }

    setIsLoading(true);

    const success = await addTask({
      title,
      description,
      topic,
      status: "Без статуса",
      date,
    });

    setIsLoading(false);

    if (success) {
      navigate(-1);
    } else {
      alert("Не удалось создать задачу");
    }
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>

            <button className="pop-new-card__close" onClick={handleClose}>
              &#10006;
            </button>

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
                  onChange={(newDate) => setDate(newDate)}
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
                    <p className={CATEGORY_MAP[cat]}>{cat}</p>
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
