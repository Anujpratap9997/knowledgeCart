import React from "react";
import { useDrag } from "react-dnd";
import "./Topic.css"

function Topic({ id, top }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "text",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <button className="btn1"
      ref={drag}
      width="150px"
      style={{ border: isDragging ? "5px solid #99D9EA" : "0px" }}
    >{top}</button>
  );
}

export default Topic;
