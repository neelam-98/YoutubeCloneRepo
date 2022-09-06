import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';


function History() {
  
  const listingVideo = useSelector((state) => state.H_reducer.historyList)
  console.log('listing video state',listingVideo);


  return (
    <>
    {/* <p>history</p> */}
      {
        listingVideo && listingVideo.length > 0 && 
        listingVideo.map((listingItem)=>{ 
        
          return(
            <>
           <p>{listingItem.id}</p>
            </>
          )
        })
      }
    </>
  )
}

export default History;
