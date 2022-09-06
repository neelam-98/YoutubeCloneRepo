import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import Header from "./Header";
import axios from "axios";
import  {DateTime} from "luxon";
import RecommendedVideos from "./RecommendedVideos";
import { DislikeOutlined, DownloadOutlined, FieldTimeOutlined, LikeOutlined, ShareAltOutlined } from "@ant-design/icons";
import "../Style/PlayVideo.css";
import { addVideo } from "../redux/action/action";
import {useDispatch} from "react-redux";

function PlayVideo() {

    const {id} = useParams();
    const [data,setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&part=player&id=${id}&key=AIzaSyDHV7y5qmz38WLa3qc8r1uu0t_5welKiGg`)
          .then(response => {
            console.log(response.data.items);
            setData(response.data.items);
          })
          .catch(error => {
            console.log(error);
          })
        }, [data])

      const handleClick = () =>{
        dispatch(
          addVideo(data)
        )
      };

  return (
      <> 
      { data && data.length>0 &&         
      data.map((element) => {
        console.log(element);
         const  url=element.player.embedHtml;
        const snippet= element.snippet;
        const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
        return(
          <>
          <Header/>
          <div className="playvideo">
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
    }
    
    </>
  );
}

export default PlayVideo;
