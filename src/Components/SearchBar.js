import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import "../Style/App.css"

function SearchBar() {

    const {inputSearch} = useParams();
    console.log("search data",inputSearch)
    const [data,setData] = useState([]);
    
    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=title&q=${inputSearch}&safeSearch=none&key=AIzaSyDHV7y5qmz38WLa3qc8r1uu0t_5welKiGg`)
          .then(response => {
            console.log("Search bar api",response.data.items);
            setData(response.data.items);
          })
          .catch(error => {
            console.log(error);
          })
        }, [])

  return (
      <> 
      <Header/>
      {
        data && data.length>0 &&         
        data.map((listingItem) => {
        console.log(listingItem);

        const image = listingItem.snippet.thumbnails.medium.url;
        const title = listingItem.snippet.channelTitle;
        
        return(
          <>
          <div className="full_block">
            <br/><br/>
              <div className="block">
                <img src={image} alt="#" width={600} height={300} className="search_img"/> 
                <h1 className="search_heading">{title}</h1>
              </div>
            <br/><br/>
          </div>
          </>
         )
        })
      }
    </>
  );
}

export default SearchBar;

