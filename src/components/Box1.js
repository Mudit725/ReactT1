import React, { useState } from 'react';
import "./Styles.css";
function Box1() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (e) => {
    setText(e.target.value);
    setWordCount(e.target.value.split(' ').length);
  };

  return (
    <div>
        <div>
            <h1 align ="center">Responsive Paragraph Word Counter</h1>
        </div>
      <textarea
        onChange={handleChange}
        value={text}
        placeholder="Enter your text here"
      />
      <p>Word count: {wordCount}</p>
    </div>
  );
};
export default Box1;

