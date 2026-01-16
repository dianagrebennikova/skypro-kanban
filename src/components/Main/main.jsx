import Column from "../Column/Column";
import {
  MainWrapper,
  Container,
  MainBlock,
  MainContent,
  MainColumn,
} from "./main.styled";

const CATEGORY_COLOR = {
  "Web Design": "_orange",
  Research: "_green",
  Copywriting: "_purple",
  Other: "_gray",
};

const STATUSES = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const Main = ({ cards = [] }) => {
  const cardsByStatus = STATUSES.reduce((acc, status) => {
    acc[status] = cards.filter((c) => c.status === status) || [];
    return acc;
  }, {});

  const normalizeCards = (cardsArray) =>
    cardsArray.map((c) => ({
      id: c._id,
      topic: c.topic || "Other",
      theme: CATEGORY_COLOR[c.topic] || "_gray",
      title: c.title || "Без названия",
      date: c.date || null, 
    }));
  

  return (
    <MainWrapper>
      <Container>
        <MainBlock>
          <MainContent>
            {STATUSES.map((status) => (
              <MainColumn key={status}>
                <Column
                  title={status}
                  cards={normalizeCards(cardsByStatus[status])}
                />
              </MainColumn>
            ))}
          </MainContent>
        </MainBlock>
      </Container>
    </MainWrapper>
  );
};

export default Main;
