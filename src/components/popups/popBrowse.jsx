import { useNavigate, useParams } from "react-router-dom";
import Calendar from "../Calendar/Calendar";

function PopBrowse() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClose = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">Название задачи (ID: {id})</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>

            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
              </div>
            </div>

            <div className="pop-browse__wrap">
              <form className="pop-browse__form form-browse" id="formBrowseCard">
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                  <textarea
                    className="form-browse__area"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  />
                </div>
              </form>

              <Calendar />
            </div>

            <div className="pop-browse__btn-browse">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">Редактировать задачу</button>
                <button className="btn-browse__delete _btn-bor _hover03">Удалить задачу</button>
              </div>

              <button className="btn-browse__close _btn-bg _hover01" onClick={handleClose}>
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
