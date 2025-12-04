import Calendar from "../Calendar/Calendar";

const Card = ({ theme, title, date }) => {
  return (
    <div className="cards__item">
      {" "}
      <div className="cards__card card">
        {" "}
        <div className="card__group">
          <div className={`card__theme ${theme}`}>
            <p className={theme.replace("_", "")}>
              {theme === "_orange"
                ? "Web Design"
                : theme === "_green"
                ? "Research"
                : "Copywriting"}{" "}
            </p>{" "}
          </div>{" "}
          <a href="#popBrowse" target="_self">
            {" "}
            <div className="card__btn">
              {" "}
              <div></div> <div></div> <div></div>{" "}
            </div>{" "}
          </a>{" "}
        </div>{" "}
        <div className="card__content">
          {" "}
          <a href="" target="_blank">
            {" "}
            <h3 className="card__title">{title}</h3>{" "}
          </a>{" "}
          <div className="card__date">
            {" "}
            <Calendar date={date} />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Card;
