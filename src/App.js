import React, { useState } from "react";
import "./App.css";
import Worker from "workerize-loader!./worker" // eslint-disable-line import/no-webpack-loader-syntax

const workerMessage = (async () => {
    const worker = new Worker();
    return await worker.getMessage();
})();

function App() {
    const [message, setMessage] = useState("...");
    workerMessage.then(x => setMessage(x));
    return <div className="App">Worker says "{message}"</div>;
}

export default App;
