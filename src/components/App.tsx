import React from 'react';

import Sidebar from "./Sidebar";
import Content from "./Content";

import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
