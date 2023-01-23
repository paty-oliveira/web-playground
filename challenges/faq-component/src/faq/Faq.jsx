import { useState } from 'react';
import './Faq.css';

export function Faq({ question, answer }) {
    const [ toggle, setToggle] = useState(false);

    const handleButtonToggle = () => {
        return setToggle(!toggle);
    }

    return (
        <div className='faq-container'>
            <div className='faq-button'>
                <button onClick={handleButtonToggle}>{'>'}</button>
            </div>
            <div className='faq-body'>
                <div className='faq-item'>
                    <h3>{question}</h3>
                </div>
                <div className='faq-item'>
                    { toggle && <p>{answer}</p>}
                </div>
            </div>

        </div>
    )
}