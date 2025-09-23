import React, { useState } from "react";

export default function TextForm(parameters) {
  // Convert To Uppercase
  const handleUpClick = () => {
    console.log("uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  // Convert To Lowercase
  const handleLoClick = () => {
    console.log("lowercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  // Clear The Text
  const handleClearClick = () => {
    setText("");
  };

  // On Change
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  // Copy Text
  const handleCopyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };

  // Removing Extra Space
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container mx-3"
        style={{ color: parameters.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{parameters.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: parameters.mode === "dark" ? "grey" : "white",
              color: parameters.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: parameters.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.trim().length
            ? text.trim().split(/\s+/).filter(Boolean).length
            : 0}{" "}
          words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
