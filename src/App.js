import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Headline from './components/Headline/Headlne';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Headline></Headline>
    </div>
  );
}

export default App;
