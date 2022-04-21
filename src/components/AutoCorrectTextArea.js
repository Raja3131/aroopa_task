import React from 'react'
import { useState } from 'react';

const AutoCorrectTextArea = () => {
    const [text, setText] = useState("");
    
    const AutoCorrection = (e) => {
         {
        setText(e.target.value);
        const strArr = text.split(" ");
        const obj = {
            'realy': 'really',
            'wierd': 'weird',
        };
        const objArr = Object.getOwnPropertyNames(obj);
        strArr.map((d, i) => {
          const n = objArr.indexOf(d);
          if (n !== -1) {
            strArr[i] = obj[objArr[n]];
            setText(strArr.join(" ")+" ");
          }
          return true;
        });
      }
    }

  return (
    <div className="App">
      <h1>Auto Correction</h2>
    <textarea
      value={text}
      onChange={() =>AutoCorrection}
    />
  </div>
  )
}

export default AutoCorrectTextArea
