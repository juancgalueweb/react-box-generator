import React, { useState } from "react";
import { Boxes } from "./components/Boxes";

function App() {
  const initialProps = {
    bgColor: "",
    width: "",
  };
  const [input, setInput] = useState(initialProps);
  const { bgColor, width } = input;

  const [list, setList] = useState([]);

  const handleOnChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, input]);
    setInput(initialProps);
  };
  // console.log(input);
  // console.log("Result", list);
  return (
    <form className="app" onSubmit={handleSubmit}>
      <p className="leftAlign">
        {" "}
        <b>It is a box generator.</b> Write the name of the color in English. If
        you don't write anything in the Width and Height field, by default the
        dimensions of the quadrilateral will be 100px X 100px
      </p>
      <label htmlFor="color">Color</label>
      <input
        type="text"
        id="color"
        name="bgColor"
        value={bgColor}
        onChange={handleOnChange}
      />
      <label htmlFor="width">Width</label>
      <input
        type="text"
        id="width"
        name="width"
        value={width}
        onChange={handleOnChange}
      />
      <button type="submit">Add</button>
      <Boxes divProps={list} />
    </form>
  );
}

export default App;
