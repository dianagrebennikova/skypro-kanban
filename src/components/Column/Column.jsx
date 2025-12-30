import Card from "../Card/Card";
import { ColumnWrapper, ColumnTitle, CardsWrapper } from "./column.styled";

export default function Column({ title, cards }) {
  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>

      <CardsWrapper>
        {cards.map((card, index) => (

          <Card
            key={card.id || index}
            id={card.id}
            theme={card.theme}
            title={card.title}
            date={card.date}
          />
        ))}
      </CardsWrapper>
    </ColumnWrapper>
  );
}
