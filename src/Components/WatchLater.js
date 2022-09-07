import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { LikeOutlined, DislikeOutlined, ShareAltOutlined } from '@ant-design/icons';
import { DateTime } from 'luxon';
import "../Style/PlayVideo.css";
import Header from './Header';

function WatchLater() {
  // const state = useSelector((state) => state.w_reducer);
  // console.log('state',state.list);
  // const videoList =state.list ;

  //or this way
  const listingVideo = useSelector((state) => state.w_reducer.list)
  console.log('listing video state',listingVideo);

  return (
      <>
      <Header/>
        <div className='full_block'>
          <br/><br/>
          {
            listingVideo && listingVideo.length > 0 && 
            listingVideo.map((listingItem)=>{ 
              const url = listingItem.list[0].player.embedHtml;
              const channelTitle = listingItem.list[0].snippet.channelTitle;
              const viewCount  = listingItem.list[0].statistics.viewCount;
              const title = listingItem.list[0].snippet.title;
              const likes = listingItem.list[0].statistics.likeCount;
              const snippet = listingItem.list[0].snippet
              const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();

              return(
                <>
                  <div className='block'>
                    <div className='video_block'>
                      <ReactPlayer url={url} controls width={600} height={300}/>
                    </div>
                    <div className='content_block'>
                      <h2>{channelTitle}</h2>
                      <h3>{title}</h3>
                        <p>{viewCount} views • {timestamp}</p>
                        <div className="icons_block">
                          <LikeOutlined className="icon"/>{likes} 
                          <DislikeOutlined className="icon"/>Dislike
                          <ShareAltOutlined className="icon" />Share
                        </div>
                    </div>
                  </div>
                  <br/><br/>
                </>
              )
            })
          }
        </div>
      </>
    )
  }

export default WatchLater;
