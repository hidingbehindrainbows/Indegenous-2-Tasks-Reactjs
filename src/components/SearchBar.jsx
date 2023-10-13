import { useState } from "react";
import axios from "axios"

import "./SearchBar.css";


export const SearchBar = () => {
  const classUsedRN = document.getElementsByClassName('card');
  let format = "bibtex";
  let convert;
  window.addEventListener(`DOMContentLoaded`, function(){
      convert.addEventListener(`click`, function(){
        format = "IEEE"
        console.log('clicked');
      });
  });


  console.log(format);
  // console.log(classUsedRN);
  const [input, setInput] = useState("");

  const fetchData = (value) => {

    let data = JSON.stringify({

        "keyword": `${value}`,
      
        "limit": "10"
      
    });

    let config = {

        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.gyanibooks.com/search_publication/',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };

    axios.request(config).then((response) => {
      
      let result = (response.data.data);

      for(let i = 0; i < 10; i++)
      {
        classUsedRN[i].setAttribute("style", "visibility : visible");
        document.getElementById(`multipleResults${i}`).innerHTML = 
        `<ul>\
        <div className="title"><br>\
          <h3><center>${ handleConvert(result[i], 1) }<center/></h3><br/><hr>\
        </div>\
        <div className="abstract">\
          <p>${ handleConvert(result[i], 2) || 'This Academic Report does not have an Abstraction'}</p><br/>\
        </div><hr>\
        <div className="footer">\<br/>
        <li><p>URL = ${ handleConvert(result[i], 3) || "This Academic Report does not have a URL." }</p></li>\
        <li><p>Citation Count = ${ handleConvert(result[i].citationCount, null) || "This Academic Report has not been cited." }</p></li><br>\
        </div>\
      </ul>`
      }
    }).catch((error) => {

      console.log(error);

    });
  }  

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };


  const handleConvert = (parsedBibtex, type) => {
    try {
      if(format === "IEEE"){
        // Format the BibTeX data into IEEE format
        const ieeeFormat = formatChanger(parsedBibtex);
        return ieeeFormat;
      }
      else{
        let ret;
        if(type === 1){
          ret =  parsedBibtex.title;
        }
        else if(type === 2){
          ret = parsedBibtex.abstract;
        }
        else if(type===3){
          ret = parsedBibtex.url;
        }
        else {
          ret = parsedBibtex.citationCount;
        }
        return ret;
      } 
    } 
    catch (error) {
      console.error('Error parsing BibTeX:', error);
      // setIeeeOutput('Invalid BibTeX input.');
      return "Invalid!!"
    }
  };



  const formatChanger = (parsedBibtex, type) => {
    let ieeeFormattedCitation;
    if(type === 1){
      ieeeFormattedCitation = `${parsedBibtex.paperId}`;
    }
    if(type === 2){
      ieeeFormattedCitation = `${parsedBibtex.title}`;
    }
    if(type === 3){
      ieeeFormattedCitation = `${parsedBibtex.authors.name}`;
    }
    return ieeeFormattedCitation;
  };

  return (
    <div className="input-wrapper">
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
