// import Accordion from 'react-bootstrap/Accordion';
// import DragAndDrop from './DragAndDrop';
// import Card from 'react-bootstrap/Card';
// import Board from './Board';
// import "./DnD.css"
// import "./Acc.css"
// function Acc() {
//     return (
//         <Card className="cont">
//             <Card.Header>Subject 1</Card.Header>
//             <Card className="a2">
//             <div >
//                 <Accordion defaultActiveKey="0" >
//                 <Accordion.Item eventKey="1" >
//                     <Accordion.Header>Chapter 1</Accordion.Header>
//                     <Accordion.Body className="acc-scroll">
//                         <DragAndDrop />
//                     </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="2">
//                     <Accordion.Header>Chapter 2</Accordion.Header>
//                     <Accordion.Body className="acc-scroll">
//                         <DragAndDrop />
//                     </Accordion.Body>
//                 </Accordion.Item>
//             </Accordion>
//             </div>
//             </Card>
//             <Card className="a1">
//             <Board />
//             </Card>
//         </Card>
//     );
// }

// export default Acc;

// import React from 'react';
// import Accordion from 'react-bootstrap/Accordion';
// import DragAndDrop from './DragAndDrop';
// import Card from 'react-bootstrap/Card';
// import Board from './Board';
// import "./DnD.css"
// import "./Acc.css"

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

// function Acc() {
//   return (
//     <Card className="cont">
//       <Card.Header>Subject 1</Card.Header>
//       <Card className="a2">
//         <div>
//           <Accordion defaultActiveKey="0">
//             <Accordion.Item eventKey="1">
//               <Accordion.Header>Chapter 1</Accordion.Header>
//               <Accordion.Body className="acc-scroll">
//                 <DragAndDrop />
//               </Accordion.Body>
//             </Accordion.Item>
//             <Accordion.Item eventKey="2">
//               <Accordion.Header>Chapter 2</Accordion.Header>
//               <Accordion.Body className="acc-scroll">
//                 <DragAndDrop />
//               </Accordion.Body>
//             </Accordion.Item>
//           </Accordion>
//         </div>
//       </Card>
//       <Card className="a1">
//         <Board topicList={TopicList} />
//       </Card>
//     </Card>
//   );
// }

// export default Acc;
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import DragAndDrop from './DragAndDrop';
import Card from 'react-bootstrap/Card';
import Board from './Board';
import "./DnD.css"
import "./Acc.css"

const TopicList = [
  {
    id: 1,
    top: "Topic 1"
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

function Acc() {
  const [savedTopics, setSavedTopics] = useState([]);

  const handleSaveTopics = (topics) => {
    setSavedTopics(topics);
    console.log("Saved Topics:", topics);
    alert("Selected Topics: " + topics.map((topic) => topic.top).join(", "));
  };

  return (
    <Card className="cont">
      <Card.Header>Subject 1</Card.Header>
      <Card className="a2">
        <div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Chapter 1</Accordion.Header>
              <Accordion.Body className="acc-scroll">
                <DragAndDrop />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Chapter 2</Accordion.Header>
              <Accordion.Body className="acc-scroll">
                <DragAndDrop />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Card>
      <Card className="a1">
        <Board topicList={TopicList} onSave={handleSaveTopics} />
      </Card>
    </Card>
  );
}

export default Acc;
