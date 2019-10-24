import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";

import { KeyReactor } from "./ui-comps/key-reactor";
import { $inputKeyForDebugStream } from "./glues/key-combiner";

function App() {
  return (
    <div className="App">
      <h1>Reactive Keytty POC</h1>
      <h2>Take 1</h2>
      <KeyReactor $kstream={$inputKeyForDebugStream} />
      <p>WIP control simulator</p>
      <p>WIP command visualizer</p>
    </div>
  );
}

export function mount() {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
}
