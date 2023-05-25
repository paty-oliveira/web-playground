import './App.css';
import {dataPoints} from "./mocks/mockDataPoints";
import Plot from 'react-plotly.js';

function App() {

  return (
    <div className="App">
      <h2>Simple Histogram Showing Number Frequency</h2>
        <Plot
            data={[
                {
                    x: dataPoints,
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
