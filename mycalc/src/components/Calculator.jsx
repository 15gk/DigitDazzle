import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };
  const renderButtons = () => {
    const buttons = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '+', '=', // Interchanged '=' and '+'
    ];
  
    return buttons.map((button) => (
      <button key={button} onClick={() => handleButtonClick(button)}>
        {button}
      </button>
    ));
  };
  
  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {renderButtons()}
        <button onClick={() => handleButtonClick('C')} className="clear-button">
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
