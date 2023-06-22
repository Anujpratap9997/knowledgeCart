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
import { Button } from 'react-bootstrap';
import Board from './Board';
import "./DnD.css"
import "./Acc.css"
import { useDrop } from "react-dnd";

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
const subjectList = [
  {
    id: 1,
    sub: "subject 1"
  },
  {
    id: 2,
    sub: "subject 2"
  },
  {
    id: 3,
    sub: "subject 3"
  },
  {
    id: 4,
    sub: "subject 4"
  },
  {
    id: 5,
    sub: "subject 5"
  },
];

const Acc = () => {
  const [savedTopics, setSavedTopics] = useState([]);

  const handleSaveTopics = (topics) => {
    setSavedTopics(topics);
    console.log("Saved Topics:", topics);
    alert("You have selected these topics: " + topics.map((topic) => topic.top).join(", "));
  };



  return (
    <>
        <div className='Container'>
    
    </div>
    <Card className="cont">
      <Card.Header>
      <label> <h2>Select Subject:</h2></label>
        <select className="form-select" aria-label="Select subject">
          {subjectList.map((subject) => (
            <option key={subject.id} value={subject.id}>
              <h2>{subject.sub}</h2>
            </option>
          ))}
        </select>

        {/* <h3> Subject 1</h3> */}

      </Card.Header>
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
            <Accordion.Item eventKey="3">
              <Accordion.Header>Chapter 3</Accordion.Header>
              <Accordion.Body className="acc-scroll">
                <DragAndDrop />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Chapter 4</Accordion.Header>
              <Accordion.Body className="acc-scroll">
                <DragAndDrop />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Chapter 5</Accordion.Header>
              <Accordion.Body className="acc-scroll">
                <DragAndDrop />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>Chapter 6</Accordion.Header>
              <Accordion.Body className="acc-scroll">
                <DragAndDrop />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>Chapter 7</Accordion.Header>
              <Accordion.Body className="acc-scroll">
                <DragAndDrop />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>Chapter 8</Accordion.Header>
              <Accordion.Body className="acc-scroll">
                <DragAndDrop />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>Chapter 9</Accordion.Header>
              <Accordion.Body className="acc-scroll">
                <DragAndDrop />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Card>
      <Card className="a1">
        <Card.Header><h4>Knowledge Cart</h4></Card.Header>
        <Board topicList={TopicList} onSave={handleSaveTopics} />
        {/* <div className="save-button">
        <Button variant="primary">Add to cart</Button>
      </div> */}
      </Card>
    </Card>

    </>
  );
}

export default Acc;
