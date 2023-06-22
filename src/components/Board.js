
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import ListTopic from "./ListTopic";
import "./DnD.css";
import { Button } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';

const Board = ({ topicList, onSave }) => {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "text",
    drop: (item) => addTopicToCart(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));

  const addTopicToCart = (id) => {
    const selectedTopic = topicList.find((topic) => topic.id === id);
    if (selectedTopic) {
      setBoard((prevBoard) => [...prevBoard, selectedTopic]);
    }
  };

  const handleSave = () => {
    onSave(board);
    setBoard([]); // Clear the board
  };

  return (
    <>
      {/* <div className="Board" ref={drop}>
      {board.map((topic) => {
        return <ListTopic key={topic.id} top={topic.top} id={topic.id} />;
      })}
    </div> */}

      <div className="Board" ref={drop}>
        <ListGroup className="list-group-flush">
          {board.map((topic) => {
            return (
              <ListGroup.Item className="my-1 mx-4 Box shadow-sm rounded bg-primary text-white" key={topic.id}>
                <ListTopic top={topic.top} id={topic.id} /> 
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
      <div className="save-button">
        <Button variant="primary" onClick={handleSave}>Add to cart</Button>
      </div>
    </>
  );
};

export default Board;
