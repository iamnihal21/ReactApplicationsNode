import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  
  const convertToUppercase = () => {
    const uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleTextChange}
          id="exampleFormControlTextarea1"
          rows="10"
          style={{ width: '100%' }} 
        ></textarea>
      <button className="btn btn-primary my-4" onClick={convertToUppercase}>
        Convert to Uppercase
      </button>
      </div>
    </>
  );
}