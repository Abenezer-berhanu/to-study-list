import React from "react";
import "../style.css";

export default function Notes(props) {


  function handleDelete() {
   props.onDelete(props.id)
 }


  return (
    <div className="notes">
      <span className="title">
        <p className="title--result">{props.title}</p> =
        <p className="content--result">{props.content}</p>
      </span>
      <button onClick={handleDelete} className="delete--button">
        delete
      </button>
    </div>
  );
}
