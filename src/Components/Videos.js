import React, { useEffect, useState } from "react";
import axios from "axios";


const api_key = "AIzaSyDHV7y5qmz38WLa3qc8r1uu0t_5welKiGg";
const video_http = "https://www.googleapis.com/youtube/v3/videos";

function Videos() {
  const [data,setData] = useState([]);

  const api_key = "AIzaSyDHV7y5qmz38WLa3qc8r1uu0t_5welKiGg";
  const video_http = "https://www.googleapis.com/youtube/v3/videos";
  useEffect(() => {
    axios.get(video_http + new URLSearchParams({
              key: api_key,
              part: "snippet",
              chart: "most popular"
            
            }))
    .then((response) =>{
        console.log(response.data);
        setData(response.data);
    })

 },[])

  // }
  // fetch (video_http + new URLSearchParams({
  //   key: api_key,
  //   part: "snippet",
  //   chart: "most popular"
  
  // }))
  // .then(res => res.json())
  // .then(data =>{
  //   console.log(data);
  // })
  // console.log("hello")
  
  return (
    <>
    <p>video</p>
    </>
  );
}

export default Videos;
