"use client"
import React, { useState } from "react";

const findLength = () => {
    const [ index, setIndex ] = useState(0);

    const handleOnchange = (event) => {
            setIndex(event.target.value.length);

    }

  return (
        <div>
            <input type="text" onChange={handleOnchange}/>
            <p>Character count: {index}</p>
        </div>
  );
}

export default findLength;