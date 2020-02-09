import React, { useState } from "react";
import "./App.css";

import { spawn, Worker } from "threads";
const workerMessage = (async () => {
    const worker = await spawn(new Worker("./worker.js"));
    return await worker.getMessage();
})();

function App() {
    const [message, setMessage] = useState("...");

    workerMessage.then(x => setMessage(x));
    return <div className="App">Worker says "{message}"</div>;
}

export default App;
