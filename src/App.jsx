import React from "react";


import "./App.css";
import { SearchBar } from "./components/SearchBar";


function App() {

  return (
    <div className="App">
      <div className="innerFlexContainer">
        <div className="search-bar-container">
          <SearchBar />
        </div>
        <div className="dropdown">
          <button className="dropbtn">Formats</button>
          <div className="dropdown-content">
            <a href="#" id="convert">IEEE</a>
            <a href="#">APA 7</a>
            <a href="#">MLA 9</a>
            <a href="#">Harvard</a>
          </div>
        </div>
      </div>
      <div className="SearchResult">
        <div className="card"><div className="container" id="multipleResults0"></div></div><br/>
        <div className="card"><div className="container" id="multipleResults1"></div></div><br/>
        <div className="card"><div className="container" id="multipleResults2"></div></div><br/>
        <div className="card"><div className="container" id="multipleResults3"></div></div><br/>
        <div className="card"><div className="container" id="multipleResults4"></div></div><br/>
        <div className="card"><div className="container" id="multipleResults5"></div></div><br/>
        <div className="card"><div className="container" id="multipleResults6"></div></div><br/>
        <div className="card"><div className="container" id="multipleResults7"></div></div><br/>
        <div className="card"><div className="container" id="multipleResults8"></div></div><br/>
        <div className="card"><div className="container" id="multipleResults9"></div></div><br/>
      </div>
    </div>
  );


}



export default App;
