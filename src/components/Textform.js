import React, { useState } from "react";

export default function Func(props) {
    const [text, setText] = useState('My name is Tanmay');
    //setText = ("JAI MATA DI");

    const upperCaseOnClick = () => {
        setText(text.toUpperCase());
    }
 
    const lowerCaseOnClick = () => {
        setText(text.toLowerCase());
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
          <div className="container">
            <label htmlFor="myBox" className="form-label" >{props.heading}</label>
            <textarea className="form-control" id="myBox" onChange={handleOnChange} rows="18" value={text}></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={upperCaseOnClick}>convert to upperCase</button>
          <button className="btn btn-primary mx-2" onClick={lowerCaseOnClick}>convert to lowerCase</button>
          <div className="container">
            <h1>Text Summary</h1>
            <ul>
              <li>Characters - {text.length}</li>
              <li>Words - {text.split(" ").length}</li>
              <li>Reading Time - {(0.008*text.split(" ").length)} seconds</li>
            </ul>
            <h2>Preview</h2>
            <p>{text}</p>
          </div>
        </>
    )
}