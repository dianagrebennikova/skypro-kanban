import Card from "../Card/Card";

export default function Column({ title, cards }) {
    return (
      <div className="column">
        <div className="column__title">
          <p>{title}</p>
        </div>
  
        <div className="cards">
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    );
  }
  