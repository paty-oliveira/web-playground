import './App.css';
import React from "react";
import { Faq } from './faq/Faq';

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
    question: "How long do cats live?",
    answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Frequently Asked Questions</h1>
      { faqs.map(faq =>
          <Faq
            question={faq.question}
            answer={faq.answer}
          />)
      }
    </div>
  );
}

export default App;
