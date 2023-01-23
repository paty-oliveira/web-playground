import { useState } from 'react';

export function Faq({ question, answer }) {
    const [ toggle, setToggle] = useState(false);

    const handleButtonToggle = () => {
        return setToggle(!toggle);
    }

    return (
        <div className='faq-container'>
            <button onClick={handleButtonToggle}>{'>'}</button>
            <h3>{question}</h3>
            { toggle && <p>{answer}</p>}
        </div>
    )
}