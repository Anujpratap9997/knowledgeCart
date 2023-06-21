// import React, { useState } from "react";
// import { useDrop } from "react-dnd";
// import ListTopic from "./ListTopic";
// import "./DnD.css";

// const TopicList = [
//   {
//     id: 1,
//     top: "Topic 1"
//   },
//   {
//     id: 2,
//     top: "Topic 2"
//   },
//   {
//     id: 3,
//     top: "Topic 3"
//   },
//   {
//     id: 4,
//     top: "Topic 4"
//   },
//   {
//     id: 5,
//     top: "Topic 5"
//   },
//   {
//     id: 6,
//     top: "Topic 6"
//   }
// ];

// const Board = () => {
//   const [board, setBoard] = useState([]);

//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: "text",
//     drop: (item) => addTopicToCart(item.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver()
//     })
//   }));

//   const addTopicToCart = (id) => {
//     const topicList = TopicList.filter((topic) => id === topic.id);
//     setBoard((board) => [...board, topicList[0]]);
//   };

//   return (
//     <div className="Board" ref={drop}>
//       {board.map((topic) => {
//         return <ListTopic key={topic.id} top={topic.top} id={topic.id} />;
//       })}
//     </div>
//   );
// };

// export default Board;

// import React, { useState } from "react";
// import { useDrop } from "react-dnd";
// import ListTopic from "./ListTopic";
// import "./DnD.css";

// const Board = ({ topicList }) => {
//   const [board, setBoard] = useState([]);

//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: "text",
//     drop: (item) => addTopicToCart(item.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver()
//     })
//   }));

//   const addTopicToCart = (id) => {
//     const topicList = topicList.filter((topic) => id === topic.id);
//     setBoard((board) => [...board, topicList[0]]);
//   };

//   return (
//     <div className="Board" ref={drop}>
//       {board.map((topic) => {
//         return <ListTopic key={topic.id} top={topic.top} id={topic.id} />;
//       })}
//     </div>
//   );
// };

// export default Board;

// import React, { useState } from "react";
// import { useDrop } from "react-dnd";
// import ListTopic from "./ListTopic";
// import "./DnD.css";

// const Board = ({ topicList }) => {
//   const [board, setBoard] = useState([]);

//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: "text",
//     drop: (item) => addTopicToCart(item.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver()
//     })
//   }));

//   const addTopicToCart = (id) => {
//     const selectedTopic = topicList.find((topic) => topic.id === id);
//     if (selectedTopic) {
//       setBoard((prevBoard) => [...prevBoard, selectedTopic]);
//     }
//   };

//   return (
//     <div className="Board" ref={drop}>
//       {board.map((topic) => {
//         return <ListTopic key={topic.id} top={topic.top} id={topic.id} />;
//       })}
//     </div>
//   );
// };

// export default Board;


// import React, { useState } from "react";
// import { useDrop } from "react-dnd";
// import ListTopic from "./ListTopic";
// import "./DnD.css";

// const Board = ({ topicList }) => {
//   const [board, setBoard] = useState([]);

//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: "text",
//     drop: (item) => addTopicToCart(item.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver()
//     })
//   }));

//   const addTopicToCart = (id) => {
//     const selectedTopic = topicList.find((topic) => topic.id === id);
//     if (selectedTopic) {
//       setBoard((prevBoard) => [...prevBoard, selectedTopic]);
//     }
//   };

//   return (
//     <div className="Board" ref={drop}>
//       {board.map((topic) => {
//         return <ListTopic key={topic.id} top={topic.top} id={topic.id} />;
//       })}
//     </div>
//   );
// };

// export default Board;


// import React, { useState } from "react";
// import { useDrop } from "react-dnd";
// import ListTopic from "./ListTopic";
// import "./DnD.css";

// const Board = ({ topicList, onSave }) => {
//   const [board, setBoard] = useState([]);

//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: "text",
//     drop: (item) => addTopicToCart(item.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver()
//     })
//   }));

//   const addTopicToCart = (id) => {
//     const selectedTopic = topicList.find((topic) => topic.id === id);
//     if (selectedTopic) {
//       setBoard((prevBoard) => [...prevBoard, selectedTopic]);
//     }
//   };

//   const handleSave = () => {
//     onSave(board);
//   };

//   return (
//     <div className="Board" ref={drop}>
//       {board.map((topic) => {
//         return <ListTopic key={topic.id} top={topic.top} id={topic.id} />;
//       })}
//       <button onClick={handleSave} className="board-footer">Save</button>
//     </div>
//   );
// };

// export default Board;


import React, { useState } from "react";
import { useDrop } from "react-dnd";
import ListTopic from "./ListTopic";
import "./DnD.css";

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
    <div className="Board" ref={drop}>
      {board.map((topic) => {
        return <ListTopic key={topic.id} top={topic.top} id={topic.id} />;
      })}
      <div className="save-button">
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default Board;
