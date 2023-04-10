import React, { useState } from "react";
import "../style.css";
export default function Input(props) {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    props.submit(input);
    setInput({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <form className="forms">
      <input
        name="title"
        type="text"
        onChange={handleChange}
        value={input.title}
        placeholder="enter title"
      />
      <textarea
        name="content"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={input.content}
        placeholder="enter value"
      ></textarea>
      {input.title || input.content ? (
        <button onClick={handleSubmit} className="add--button">Add</button>
      ) : null}
    </form>
  );
}
