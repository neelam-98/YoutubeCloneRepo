import React, { useEffect, useState } from "react";
import axios from 'axios';
import  {DateTime} from "luxon";
import VideoCards from "./VideoCards";
import "../Style/RecommendedVideos.css";
import "../Style/VideoCards.css";
import {Link}  from "react-router-dom";



function RecommendedVideos() {
    const [data,setData] = useState([]);

    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=PK&key=AIzaSyDHV7y5qmz38WLa3qc8r1uu0t_5welKiGg`)
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
    <div className='recommendedvideos'>
     <div className="recommendedvideos__videos">
   { data && data.length>0 &&         
      data.map((element) => {
        console.log(element);
        const snippet= element.snippet;
        const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();

            return(
                <>
                <div className='videocard'>
                  <Link to={`/${element.id}`}>
                    <img className='videocard__image' src={snippet.thumbnails.medium.url} alt='' />
                 </Link>
                    <div className="videocard__text">
                      <h4>{snippet.title}</h4>
                      <p>{element.statistics.viewCount} views • {timestamp}</p>
                    </div>
                 </div>  

                {/* <VideoCards key={element.id}
                    title={snippet.title}
                    image={snippet.thumbnails.medium.url}
                    views={element.statistics.viewCount}
                    timestamp={timestamp}
                    // channel={element.channel}
                    // channelImage={element.channelImage}
                    
                /> */}

                </>
                 )
                })
            }
        </div>
        </div>
    </>
  );
}

export default RecommendedVideos;
