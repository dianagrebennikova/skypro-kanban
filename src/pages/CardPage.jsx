import { Overlay, Modal } from "./CardPage.styled";

function CardPage({ cardId, onClose }) {
  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>Закрыть</button>
        <h2>Карточка № {cardId}</h2>
      </Modal>
    </Overlay>
  );
}

export default CardPage;
