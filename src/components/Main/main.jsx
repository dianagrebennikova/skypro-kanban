import Column from "../Column/Column";
import { MainWrapper, Container, MainBlock, MainContent, MainColumn } from "./main.styled";

const Main = ({ cards }) => {
  const cardsWithoutStatus = cards.filter((c) => c.status === "Без статуса");
  const cardsToDo = cards.filter((c) => c.status === "Нужно сделать");
  const cardsInProgress = cards.filter((c) => c.status === "В работе");
  const cardsTesting = cards.filter((c) => c.status === "Тестирование");
  const cardsDone = cards.filter((c) => c.status === "Готово");

  return (
    <MainWrapper>
      <Container>
        <MainBlock>
          <MainContent>
            <MainColumn>
              <Column title="Без статуса" cards={cardsWithoutStatus} />
            </MainColumn>
            <MainColumn>
              <Column title="Нужно сделать" cards={cardsToDo} />
            </MainColumn>
            <MainColumn>
              <Column title="В работе" cards={cardsInProgress} />
            </MainColumn>
            <MainColumn>
              <Column title="Тестирование" cards={cardsTesting} />
            </MainColumn>
            <MainColumn>
              <Column title="Готово" cards={cardsDone} />
            </MainColumn>
          </MainContent>
        </MainBlock>
      </Container>
    </MainWrapper>
  );
};

export default Main;
