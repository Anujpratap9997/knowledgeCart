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
    // <button ref={drag} >{top}</button>
    <span ref={drag} >{top}</span>
  );
}

export default Topic;
