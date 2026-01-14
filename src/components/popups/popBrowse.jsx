import { useNavigate, useParams } from "react-router-dom";
import { useContext, useMemo, useState, useEffect } from "react";
import Calendar from "../Calendar/Calendar";
import { TaskContext } from "../../context/TaskContext";

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
};

function PopBrowse() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { tasks, editTask, removeTask } = useContext(TaskContext);

  const task = useMemo(() => {
    return (
      tasks.find((t) => String(t._id) === id || String(t.id) === id) || null
    );
  }, [tasks, id]);

  const [isEdit, setIsEdit] = useState(false);
  const [draft, setDraft] = useState(null);

  useEffect(() => {
    if (task) {
      const timeout = setTimeout(() => setDraft({ ...task }), 0);
      return () => clearTimeout(timeout);
    }
  }, [task]);

  const handleClose = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleDelete = async () => {
    await removeTask(task._id || task.id);
    navigate(-1);
  };

  const handleSave = async () => {
    if (!draft) return;
    await editTask(task._id || task.id, draft);
    setIsEdit(false);
    navigate("/"); 
  };

  const handleCancel = () => {
    setDraft({ ...task });
    setIsEdit(false);
  };

  if (!task || !draft) return null;

  const category = draft.topic || "Other";
  const categoryClass = CATEGORY_COLOR[draft.topic] || "_grey";

  return (
    <div className="pop-browse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">
                {draft.title || "Без названия"}
              </h3>
              <div
                className={`categories__theme theme-top _active-category ${categoryClass}`}
              >
                <p>{category}</p>
              </div>
            </div>

            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>

              <div className="status__themes">
                {isEdit ? (
                  STATUSES.map((status) => (
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
                ) : (
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
                  className="form-browse__area"
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
                  <button className="btn _save" onClick={handleSave}>
                    Сохранить
                  </button>
                  <button className="btn _cancel" onClick={handleCancel}>
                    Отменить
                  </button>
                  <button className="btn _delete" onClick={handleDelete}>
                    Удалить задачу
                  </button>
                </>
              ) : (
                <>
                  <button className="btn _edit" onClick={() => setIsEdit(true)}>
                    Редактировать задачу
                  </button>
                  <button className="btn _delete" onClick={handleDelete}>
                    Удалить задачу
                  </button>
                </>
              )}
              <button className="btn _close" onClick={handleClose}>
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
