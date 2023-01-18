import './App.css';
import { useState } from 'react';
import React from "react";

const faqs = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];

function App() {
  const [ buttonToggle, setButtonToggle ] = useState(false);

  const handleButtonToggle = (event) => {
    return setButtonToggle(buttonToggle => !buttonToggle);
  }

  return (
    <div className="App">
      <h1>Frequently Asked Questions</h1>
      <div className='faq-container'>
        {
          faqs.map((faq, index) => {
             return (
              <div className='faq-card'>
                <button onClick={handleButtonToggle} >{`>`}</button>
                <h3>{faq.question}</h3>
                { buttonToggle && (<h4>{faq.answer}</h4>) }
              </div>
              )
             })
        }
      </div>
    </div>
  );
}

export default App;
