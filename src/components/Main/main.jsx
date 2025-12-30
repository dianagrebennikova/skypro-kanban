import Column from "../Column/Column";
import { MainWrapper, Container, MainBlock, MainContent, MainColumn } from "./main.styled";

const Main = ({ cards = [] }) => {
  
  const cardsWithoutStatus = cards.filter((c) => c.status === "Без статуса") || [];
  const cardsToDo = cards.filter((c) => c.status === "Нужно сделать") || [];
  const cardsInProgress = cards.filter((c) => c.status === "В работе") || [];
  const cardsTesting = cards.filter((c) => c.status === "Тестирование") || [];
  const cardsDone = cards.filter((c) => c.status === "Готово") || [];

  const defaultTheme = "_gray";

  const normalizeCards = (cardsArray) =>
    cardsArray.map((c, index) => ({
      id: c.id || index,
      theme: c.theme || defaultTheme,
      title: c.title || "Без названия",
      date: c.date || new Date().toISOString(),
    }));

  return (
    <MainWrapper>
      <Container>
        <MainBlock>
          <MainContent>
            <MainColumn>
              <Column title="Без статуса" cards={normalizeCards(cardsWithoutStatus)} />
            </MainColumn>
            <MainColumn>
              <Column title="Нужно сделать" cards={normalizeCards(cardsToDo)} />
            </MainColumn>
            <MainColumn>
              <Column title="В работе" cards={normalizeCards(cardsInProgress)} />
            </MainColumn>
            <MainColumn>
              <Column title="Тестирование" cards={normalizeCards(cardsTesting)} />
            </MainColumn>
            <MainColumn>
              <Column title="Готово" cards={normalizeCards(cardsDone)} />
            </MainColumn>
          </MainContent>
        </MainBlock>
      </Container>
    </MainWrapper>
  );
};

export default Main;
