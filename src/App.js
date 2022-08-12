import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Headline from './components/Headline/Headlne';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rechart from './components/Rechart/Rechart';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Rechart></Rechart>
      <Headline></Headline>
    </div>
  );
}

export default App;
