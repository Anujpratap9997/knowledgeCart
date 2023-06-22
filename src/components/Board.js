
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import ListTopic from "./ListTopic";
import "./DnD.css";
import { Button } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';

const Board = ({ topicList, onSave }) => {
  const [board, setBoard] = useState([]);
  // const [board, setBoard] = useState(new Set());
  const [cart, setCart] = useState([]);

  // const [{ isOver }, drop] = useDrop(() => ({
  //   accept: "text",
  //   drop: (item) => addTopicToCart(item.id),
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver()
  //   })
  // }));  Vishakha wal h


  // const [{ isOver }, drop] = useDrop(() => ({
  //   accept: "text",
  //   drop: (item) => {
  //     // Check if the item already exists in the cart
  //     const isItemInCart = board.some((cartItem) => cartItem.id === item.id);
  //     if (!isItemInCart) {
  //       addTopicToCart(item.id);
  //     }
  //   },
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver()
  //   })
  // }));
  


 
  
  const addTopicToCart = (id) => {
    const selectedTopic = topicList.find((topic) => topic.id === id);
    console.log(selectedTopic);
  
    if (selectedTopic && !removeDuplicate(id)) {
      setBoard((prevBoard) => [...prevBoard, selectedTopic]);
      setCart((prevCart) => [...prevCart, selectedTopic]);
    }
  };

  // const addTopicToCart = (id) => {
  //   const selectedTopic = topicList.find((topic) => topic.id === id);
  //   console.log(selectedTopic);
    
  //   // Check if the item already exists in the ca
  //   if (selectedTopic) {
  //     setBoard((prevBoard) => [...prevBoard, selectedTopic]);
  //     setCart((prevCart) => [...prevCart, selectedTopic]);
  //   }
  // };
  {console.log(board)};
  {console.log(cart)};
  const removeDuplicate = (id) => {
    return cart.some((cartItem) => cartItem.id === id);
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "text",
    drop: (item) => {
      // Check if the item already exists in the cart
      const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);
      if (!isItemInCart) {
        addTopicToCart(item.id);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));


  // {console.log(board)};
  // {console.log(cart)};

  const handleSave = () => {
    onSave(board);
    setBoard([]);
    setCart([]); // Clear the board
  };


  return (
    <>

    {/* Without listgroup */}
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
