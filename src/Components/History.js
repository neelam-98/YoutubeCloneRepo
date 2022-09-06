import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';


function History() {
  
  const listingVideo = useSelector((state) => state.H_reducer.historyList)
  console.log('listing video state',listingVideo);


  return (
    <>
      <p>History Page</p>
      {
        listingVideo && listingVideo.length > 0 && 
        listingVideo.map((listingItem)=>{ 
          // console.log("mapping",listingItem.historyList.id);
          const url =listingItem.historyList.player.embedHtml;
          // const channelTitle = listingItem.list[0].snippet.channelTitle;
          // const viewCount  = listingItem.list[0].statistics.viewCount;
          // const title = listingItem.list[0].snippet.title;

        
          return(
            <>
            <ReactPlayer url={url}/>
           <p>{listingItem.historyList.id}</p>
            </>
          )
        })
      }
    </>
  )
}

export default History;
