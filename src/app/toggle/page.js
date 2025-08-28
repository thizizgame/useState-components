"use client"
import React, { useState } from "react";

const toggleVis = () => {
    const [ index, setIndex ] = useState("Toggle me!");
    let k = 0;

    const handleOnchange = (event) => {
            
            if(k==1){
                setIndex("Toggle me!");
                k=0;
            }else{
                setIndex("");
                k=1;
            }
    }

  return (
        <div>
            <button onClick={handleOnchange}>Show/Hide</button>
            <p>{index}</p>
        </div>
  );
}

export default toggleVis;