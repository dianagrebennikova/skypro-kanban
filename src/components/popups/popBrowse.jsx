import { useNavigate, useParams } from "react-router-dom";
import { useContext, useMemo, useState, useEffect } from "react";
import Calendar from "../Calendar/Calendar";
import { TaskContext } from "../../context/TaskContext";
import { toast } from "react-toastify";


const STATUSES = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const CATEGORY_COLOR = {
  "Web Design": "_orange",
  Research: "_green",
  Copywriting: "_purple",
  Other: "_grey",
};

function PopBrowse() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { tasks, editTask, removeTask } = useContext(TaskContext);

  const task = useMemo(() => {
    return tasks.find((t) => String(t._id) === id || String(t.id) === id) || null;
  }, [tasks, id]);

  const [isEdit, setIsEdit] = useState(false);
  const [draft, setDraft] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkTheme] = useState(() => localStorage.getItem("theme") === "dark");

  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);


  useEffect(() => {
    if (task) {
      const timeout = setTimeout(() => setDraft({ ...task }), 0);
      return () => clearTimeout(timeout);
    }
  }, [task]);

  const handleClose = () => navigate(-1);

  const handleDelete = async () => {
    if (!task) return;
    setIsLoading(true);
    const success = await removeTask(task._id || task.id);
    setIsLoading(false);

    if (success) {
      toast.success("Задача удалена");
      navigate(-1);
    } else {
      toast.error("Не удалось удалить задачу");
    }
  };

  const handleSave = async () => {
    if (!draft) return;

    let hasError = false;
    if (!draft.title.trim()) {
      setTitleError(true);
      hasError = true;
    } else setTitleError(false);

    if (!draft.description.trim()) {
      setDescriptionError(true);
      hasError = true;
    } else setDescriptionError(false);

    if (hasError) {
      toast.error("Пожалуйста, заполните обязательные поля");
      return;
    }

    setIsLoading(true);
    try {
      const success = await editTask(task._id || task.id, {
        ...draft,
        title: draft.title.trim(),
        description: draft.description.trim(),
      });

      if (success) {
        toast.success("Задача сохранена");
        setIsEdit(false);
        navigate(-1);
      } else {
        toast.error("Не удалось сохранить задачу");
      }
    } catch (err) {
      toast.error(err || "Ошибка сервера при сохранении задачи");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setDraft({ ...task });
    setIsEdit(false);
    setTitleError(false);
    setDescriptionError(false);
  };

  if (!task || !draft) return null;

  const category = draft.topic || "Other";

  return (
    <div className="pop-browse">
      <div className="pop-browse__container" onClick={handleClose}>
        <div
          className={`pop-browse__block ${isDarkTheme ? "dark-mode" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className={`pop-browse__ttl ${titleError ? "_error" : ""}`}>
                {draft.title || "Без названия"}
              </h3>

              <div
                className={`categories__theme theme-top _active-category ${
                  CATEGORY_COLOR[category] || "_grey"
                }`}
              >
                <p>{category}</p>
              </div>
            </div>

            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                {isEdit
                  ? STATUSES.map((status) => (
                      <div
                        key={status}
                        className={`status__theme ${
                          draft.status === status ? "_active" : ""
                        }`}
                        onClick={() => setDraft({ ...draft, status })}
                      >
                        <p>{status}</p>
                      </div>
                    ))
                  : (
                      <div className="status__theme _active">
                        <p>{draft.status}</p>
                      </div>
                    )}
              </div>
            </div>

            <div className="pop-browse__wrap">
              <label className="subttl">Описание задачи</label>
              <form className="form-browse">
                <textarea
                  className={`form-browse__area ${descriptionError ? "_error" : ""}`}
                  readOnly={!isEdit}
                  value={draft.description || ""}
                  onChange={(e) =>
                    setDraft({ ...draft, description: e.target.value })
                  }
                />
                <Calendar
                  date={draft.date}
                  variant="full"
                  onChange={(newDate) => setDraft({ ...draft, date: newDate })}
                />
              </form>
            </div>

            <div className="pop-browse__btn-browse">
              {isEdit ? (
                <>
                  <button className="btn _save" onClick={handleSave} disabled={isLoading}>
                    {isLoading ? "Сохранение..." : "Сохранить"}
                  </button>
                  <button className="btn _cancel" onClick={handleCancel} disabled={isLoading}>
                    Отменить
                  </button>
                  <button className="btn _delete" onClick={handleDelete} disabled={isLoading}>
                    {isLoading ? "Удаление..." : "Удалить задачу"}
                  </button>
                </>
              ) : (
                <>
                  <button className="btn _edit" onClick={() => setIsEdit(true)} disabled={isLoading}>
                    Редактировать задачу
                  </button>
                  <button className="btn _delete" onClick={handleDelete} disabled={isLoading}>
                    {isLoading ? "Удаление..." : "Удалить задачу"}
                  </button>
                </>
              )}
              <button className="btn _close" onClick={handleClose} disabled={isLoading}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopBrowse;
