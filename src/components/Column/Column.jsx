import Card from "../Card/Card";
import { ColumnWrapper, ColumnTitle, CardsWrapper } from "./column.styled";


export default function Column({ title, cards }) {
    return (
      <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>

      <CardsWrapper>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </CardsWrapper>
    </ColumnWrapper>
    );
  }

