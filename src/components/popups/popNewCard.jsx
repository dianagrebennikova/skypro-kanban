import { useNavigate } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import { useTasks } from "../../context/TaskContext";
import { useState } from "react";

function PopNewCard() {
  const navigate = useNavigate();
  const { addTask } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [theme, setTheme] = useState("_orange");

  const handleClose = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Введите название задачи");

    addTask({ title, description, theme, date: new Date().toISOString() }); 
    navigate(-1);
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
              <form className="pop-new-card__form form-new" id="formNewCard">
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">Название задачи</label>
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
                  <label htmlFor="textArea" className="subttl">Описание задачи</label>
                  <textarea
                    className="form-new__area"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </form>

              <Calendar />
            </div>

            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div
                  className={`categories__theme _orange ${theme === "_orange" ? "_active-category" : ""}`}
                  onClick={() => setTheme("_orange")}
                >
                  <p className="_orange">Web Design</p>
                </div>
                <div
                  className={`categories__theme _green ${theme === "_green" ? "_active-category" : ""}`}
                  onClick={() => setTheme("_green")}
                >
                  <p className="_green">Research</p>
                </div>
                <div
                  className={`categories__theme _purple ${theme === "_purple" ? "_active-category" : ""}`}
                  onClick={() => setTheme("_purple")}
                >
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>

            <button className="form-new__create _hover01" onClick={handleCreate}>
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;
