import { useState } from "react";
import Column from "../Column/Column";
import { DragDropContext } from "@hello-pangea/dnd";
import {
  MainWrapper,
  Container,
  MainBlock,
  MainContent,
  MainColumn,
} from "./main.styled";

const STATUSES = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const Main = ({
  cards = [],
  isLoading,
  onDeleteCard,
  onUpdateCard,
  onOrderChange, 
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const cardsByStatus = STATUSES.reduce((acc, status) => {
    acc[status] = cards.filter((c) => c.status === status);
    return acc;
  }, {});

  const handleDragEnd = (result) => {
    setIsDragging(false);
  
    if (!result.destination || isLoading) return;
  
    const { draggableId, destination } = result;
  
    const dragged = cards.find((c) => c.id === draggableId);
    if (!dragged) return;
  
    const newStatus = destination.droppableId;
  
    const updatedCards = [...cards];
  
    const fromIndex = updatedCards.findIndex((c) => c.id === draggableId);
    const [removed] = updatedCards.splice(fromIndex, 1);
  
    removed.status = newStatus;
  
    const sameColumn = updatedCards.filter((c) => c.status === newStatus);
    const other = updatedCards.filter((c) => c.status !== newStatus);
  
    sameColumn.splice(destination.index, 0, removed);
  
    const final = [...other, ...sameColumn];
  
    onOrderChange(final);
  
    onUpdateCard({
      ...dragged,
      status: newStatus,
    });
  };
  

  return (
    <MainWrapper>
      <Container>
        <MainBlock>
          <DragDropContext
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
          >
            <MainContent>
              {STATUSES.map((status) => (
                <MainColumn key={status}>
                  <Column
                    title={status}
                    cards={cardsByStatus[status]}
                    isLoading={isLoading}
                    isDragging={isDragging}
                    onDeleteCard={onDeleteCard}
                    onUpdateCard={onUpdateCard}
                  />
                </MainColumn>
              ))}
            </MainContent>
          </DragDropContext>
        </MainBlock>
      </Container>
    </MainWrapper>
  );
};

export default Main;
