import './App.css';
import Plot from 'react-plotly.js';
import {getRandomNumbers} from "./api";
import {useEffect, useState} from "react";

function App() {
    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        getRandomNumbers()
            .then(data => setNumbers(data))
            .catch(error => console.log(error.message))
    }, [])

    return (
    <div className="App">
        <Plot
            data={[
                {
                    x: numbers,
                    type: 'histogram',
                    opacity: 0.6,
                    marker: {
                        color: 'green',
                    },
                },
            ]}
            layout = { {bargap: 0.06, title: 'Number Frequency'} }
        />

    </div>
    );
}

export default App;
