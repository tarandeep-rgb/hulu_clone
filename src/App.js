import { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Result from './Result';
import requests from './requests'

function App() {
  const [selectedOption,setSelectedOption]=useState(requests.fetchTrending);

  return (
    <div className="App">
  
      <Header/>
      <Nav setSelectedOption={setSelectedOption}/>
      <Result selectedOption={selectedOption} />
    </div>
  );
}

export default App;
