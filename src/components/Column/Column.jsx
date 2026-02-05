import Card from "../Card/Card";
import {
  ColumnWrapper,
  ColumnTitle,
  CardsWrapper,
  DropZone,
} from "./column.styled";
import { Droppable, Draggable } from "@hello-pangea/dnd";

export default function Column({ title, cards, isLoading, isDragging }) {
  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>

      <Droppable droppableId={title} isDropDisabled={isLoading}>
        {(provided) => (
          <CardsWrapper
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {cards.map((card, index) => (
              <Draggable
                key={card.id}
                draggableId={card.id.toString()}
                index={index}
                isDragDisabled={isLoading || card.isSkeleton}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      ...provided.draggableProps.style,
                      minHeight: "130px",
                    }}
                  >
                    <Card
                      id={card.id}
                      topic={card.topic}
                      title={card.title}
                      date={card.date}
                      isLoading={isLoading || card.isSkeleton}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {isDragging && !isLoading && <DropZone />}

            {provided.placeholder}
          </CardsWrapper>
        )}
      </Droppable>
    </ColumnWrapper>
  );
}
