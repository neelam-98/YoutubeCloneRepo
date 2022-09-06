import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import { DislikeOutlined, DownloadOutlined, FieldTimeOutlined, LikeOutlined, ShareAltOutlined } from "@ant-design/icons";

function SearchBar() {

    const {inputSearch} = useParams();
    console.log("search data",inputSearch)
    const [data,setData] = useState([]);

    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&type=title&q=${inputSearch}$safeSearch=none&key=AIzaSyDHV7y5qmz38WLa3qc8r1uu0t_5welKiGg`)
          .then(response => {
            console.log(response.data.items);
            setData(response.data.items);
          })
          .catch(error => {
            console.log(error);
          })
        }, [])

  return (
      <> 
      <p>Search page</p>
      {/* { data && data.length>0 &&         
      data.map((element) => {
        console.log(element);
         const  url=element.player.embedHtml;
        const snippet= element.snippet;
        const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
        return(
          <>
          <Header/>
          <div className="SearchBar">
              <div className="reactplayer">
                <ReactPlayer url={url} controls width={800} height={500}/>
                <div className="title">
                  <h2>{snippet.title}</h2>
                </div>
                <div className="title_share">
                  <p>{element.statistics.viewCount} views • {timestamp}</p>
                  <LikeOutlined className="like"/>Like
                  <DislikeOutlined className="dislike"/>Dislike
                  <ShareAltOutlined className="share"/>Share
                  <FieldTimeOutlined className="watchlater" onClick={handleClick}/>Watch Later
                  <DownloadOutlined className="download"/>Download
                </div>
              </div>
              <RecommendedVideos/>
          </div>
          </>
         )
        })
    } */}
    
    </>
  );
}

export default SearchBar;

