import React from 'react';

import Navbar from './components/navbar/navbar';
import MyContent from './components/content/content'
import MyFooter from './components/footer/footer'

import './App.css';


let footerInfo = {
  email: "marc@gmail.com",
  address: "around Clot"
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h2>HELLO FROM REACT</h2>
        <MyContent />
        <MyFooter email={'marc@gmail.com'} address={footerInfo.address} />
      </header>
    </div>
  );
}

export default App;
