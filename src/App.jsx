import React, { useState } from 'react';
import Modal from 'react-modal';
import Card from './components/Card.jsx';
import './styles/App.css';

Modal.setAppElement('#root');

const App = () => {
    const [cards, setCards] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalText, setModalText] = useState('');

    const addCard = () => {
        const newCard = {
            id: Date.now(),
            position: { x: 100, y: 100 },
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        };
        setCards([...cards, newCard]);
    };

    const handleDeleteCard = (id) => {
        setCards(cards.filter(card => card.id !== id));
    };

    const updateCardPosition = (id, position) => {
        setCards(cards.map(card => card.id === id ? { ...card, position } : card));
    };

    const updateCardText = (id, text) => {
        setCards(cards.map(card => card.id === id ? { ...card, text } : card));
    };

    const showMoreText = (text) => {
        setModalText(text);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="app">
            <button onClick={addCard}>Add Card</button>
            <div className="canvas-container">
                <div className="cards-container">
                    {cards.map(card => (
                        <Card
                            key={card.id}
                            card={card}
                            onDelete={handleDeleteCard}
                            updatePosition={updateCardPosition}
                            updateText={updateCardText}
                            showMore={() => showMoreText(card.text)}
                        />
                    ))}
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Card Details"
                className="modal"
                overlayClassName="modal-overlay"
            >
                <h2>Card Details</h2>
                <p>{modalText}</p>
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};

export default App;

