import { useState } from 'react';
import './Faq.css';

export function Faq({ question, answer }) {
    const [ toggle, setToggle] = useState(false);

    const handleButtonToggle = () => {
        return setToggle(!toggle);
    }

    return (
        <div className='faq-container'>
            <div className='faq-item'>
                <button onClick={handleButtonToggle}>{'>'}</button>
                <h3>{question}</h3>
            </div>
            <div className='faq-item'>
                { toggle && <p>{answer}</p>}
            </div>
        </div>
    )
}