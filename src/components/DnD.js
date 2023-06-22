// import React, { useState } from "react";
// import { useDrop } from "react-dnd";
// import "./DnD.css";
// import Topic from './Topic';

// const TopicList = [
//     {
//         id: 1,
//         top: "Topic 1"
//     },
//     {
//         id: 2,
//         top: "Topic 2"
//     },
//     {
//         id: 3,
//         top: "Topic 3"
//     },
//     {
//         id: 4,
//         top: "Topic 4"
//     },
//     {
//         id: 5,
//         top: "Topic 5"
//     },
//     {
//         id: 6,
//         top: "Topic 6"
//     }
// ];
// function DnD() {
//   const [board, setBoard] = useState([]);

//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: "text",
//     drop: (item) => addTopicToCart(item.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }));

//   const addTopicToCart = (id) => {
//     const topicList = TopicList.filter((topic) => id === topic.id);
//     setBoard((board) => [...board, topicList[0]]);
//   };
//   return (
//     <div className="contain">
//       <div className="Topics">
//         {TopicList.map((topic) => {
//           return <Topic top={topic.top} id={topic.id} />;
//         })}
//       </div>
//       <div className="Board" ref={drop}>
//         {board.map((topic) => {
//           return <Topic top={topic.top} id={topic.id} />;
//         })}
//       </div>
//     </div>
//   );
// }

// export default DnD;


// import React, { useState } from "react";
// import { useDrop, useDrag } from "react-dnd";
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

// const Topic = ({ top, id }) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: "text",
//     item: { id },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging()
//     })
//   }));

//   const opacity = isDragging ? 0.4 : 1;

//   return (
//     <div className="topic" ref={drag} style={{ opacity }}>
//       <span>{top}</span>
//     </div>
//   );
// };

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
//         return <Topic key={topic.id} top={topic.top} id={topic.id} />;
//       })}
//     </div>
//   );
// };

// const DnD = () => {
//   return (
//     <div className="contain">
//       <div className="Topics">
//         {TopicList.map((topic) => {
//           return <Topic key={topic.id} top={topic.top} id={topic.id} />;
//         })}
//       </div>
//       <Board />
//     </div>
//   );
// };

// export default DnD;


// 

// import React from "react";
// import Board from "./Board";
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

// const App = () => {
//   return (
//     <div className="contain">
//       <div className="Topics">
//         {TopicList.map((topic) => {
//           return <ListTopic key={topic.id} top={topic.top} id={topic.id} />;
//         })}
//       </div>
//       <Board topicList={TopicList} />
//     </div>
//   );
// };

// export default App;


import React from "react";
import Board from "./Board";
import ListTopic from "./ListTopic";
import "./DnD.css";
import { ListGroup } from "react-bootstrap";
import {Button} from "react-bootstrap";

const TopicList = [
  {
    id: 1,
    top: "Entreprenuership and it's Developement"
  },
  {
    id: 2,
    top: "Topic 2"
  },
  {
    id: 3,
    top: "Topic 3"
  },
  {
    id: 4,
    top: "Topic 4"
  },
  {
    id: 5,
    top: "Topic 5"
  },
  {
    id: 6,
    top: "Topic 6"
  }
];

const App = () => {
  return (
    <div className="contain">
      {/* <div className="Topics">
        {TopicList.map((topic) => {
          return <ListTopic key={topic.id} top={topic.top} id={topic.id} />;
        })}
      </div> */}



{/* This is for ListGroup */}
<div className="Topics">
        <ListGroup className="list-group-flush">
          {TopicList.map((topic) => {
            return (
              <ListGroup.Item className="my-1 Box shadow-sm rounded bg-light" key={topic.id}>
                 <Button variant="outline-primary"><ListTopic top={topic.top} id={topic.id} /></Button>
                
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>



      {/* <Board topicList={TopicList} /> */}
    </div>
  );
};

export default App;
