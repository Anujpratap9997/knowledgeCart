// import React from "react";
// import { useDrag } from "react-dnd";

// const ListTopic = ({ top, id }) => {
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

// export default ListTopic;


import React from "react";
import { useDrag } from "react-dnd";

const ListTopic = ({ top, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "text",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }));

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div className="topic" ref={drag} style={{ opacity }}>
      <span>{top}</span>
    </div>
  );
};

export default ListTopic;
