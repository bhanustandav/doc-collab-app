import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar} from './components/navbar/index'
import { Sidebar} from './components/sidebar/index'
import ContentWrapper from './components/contentWrapper/index'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div id="wrapper">
        <Sidebar/>
        <ContentWrapper/>
      </div>
    </div>
  );
}

export default App;
