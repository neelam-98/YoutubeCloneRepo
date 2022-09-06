import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';


function WatchLater() {
  // const state = useSelector((state) => state.w_reducer);
  // console.log('state',state.list);
  // const videoList =state.list ;

  //or this way
  const listingVideo = useSelector((state) => state.w_reducer.list)
  console.log('listing video state',listingVideo);


  return (
    <>
      {
        listingVideo && listingVideo.length > 0 && 
        listingVideo.map((listingItem)=>{ 
          const url = listingItem.list[0].player.embedHtml;
          const channelTitle = listingItem.list[0].snippet.channelTitle;
          const viewCount  = listingItem.list[0].statistics.viewCount;
          const title = listingItem.list[0].snippet.title;

          return(
            <><ReactPlayer url={url}/>
            <h2>{channelTitle}</h2>
            <h3>{title}</h3>
            <p>{viewCount} views • </p>
            </>
          )
        })
      }
    </>
  )
}

export default WatchLater;
