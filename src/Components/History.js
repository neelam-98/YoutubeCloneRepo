import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { DateTime } from 'luxon';
import { LikeOutlined, DislikeOutlined, ShareAltOutlined } from '@ant-design/icons';
import Header from './Header';
import "../Style/App.css"

function History() {
  
  const listingVideo = useSelector((state) => state.H_reducer.historyList)
  console.log('listing video state',listingVideo);

  return (
    <>
    <Header/>
      <p>History</p>
      <div className='block'>
        {
          listingVideo && listingVideo.length > 0 && 
          listingVideo.map((listingItem)=>{ 
            // console.log("mapping",listingItem.historyList.id);
            const url =listingItem.historyList.player.embedHtml;
            const channelTitle = listingItem.historyList.snippet.channelTitle;
            const title = listingItem.historyList.snippet.title;
            const viewCount  = listingItem.historyList.statistics.viewCount;
            const snippet = listingItem.historyList.snippet
            const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
            const likes = listingItem.historyList.statistics.likeCount;
            
            return(
              <>
                <div className='video_block'>
                  <ReactPlayer url={url}  controls width={600} height={300}/>
                </div>
                <div className='content_block'>
                  <h1>{title}</h1>
                  <h2>{channelTitle}</h2>
                  <p>{viewCount} views • {timestamp}  </p>
                  <div className="icons_block">
                    <LikeOutlined className="icon"/>{likes}
                    <DislikeOutlined className="icon"/>Dislike
                    <ShareAltOutlined className="icon"/>Share
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default History;
