import React from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import '../styles/Card.css';


const Card = ({ card, onDelete, updatePosition, updateText, showMore }) => {
    const handleStop = (e, data) => {
        updatePosition(card.id, { x: data.x, y: data.y });
    };

    return (
        <Draggable
            defaultPosition={{ x: card.position.x, y: card.position.y }}
            onStop={handleStop}
        >
            <div className="card" id={`card-${card.id}`}>
                <ResizableBox
                    width={200}
                    height={200}
                    minConstraints={[100, 100]}
                    maxConstraints={[600, 600]}
                    className="resizable-card"
                >
                    <div className="card-content">
                        <textarea
                            value={card.text}
                            onChange={(e) => updateText(card.id, e.target.value)}
                            placeholder="Type your content here..."
                            rows={4}
                            cols={30}
                        />
                        {card.text.length > 50 ? (
                            <>
                                <p>{card.text.substring(0, Math.floor(card.text.length / 2)) + '...'}</p>
                                <button className="show-more-button" onClick={() => showMore(card.text)}>Show More</button>
                            </>
                        ) : (
                            <p>{card.text}</p>
                        )}

                        <button className="delete-button" onClick={() => onDelete(card.id)}>Delete</button>
                    </div>
                </ResizableBox>
            </div>
        </Draggable>
    );
};

export default Card;

