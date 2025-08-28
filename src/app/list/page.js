"use client"
import React, { useState } from "react";

const inputField = () => {
    const [ index, setIndex ] = useState("");

    const handleOnchange = (event) => {
            setIndex(event.target.value);
    }

  return (
        <div>
            <input type="text" onChange={handleOnchange}/>
            <p>Input text: {index}</p>
        </div>
  );
}

export default inputField;