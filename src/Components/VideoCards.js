import React from 'react';
import "../Style/VideoCards.css";
const VideoCards = ({ image, title,  views , timestamp}) => {
    return (
        <div className='videocard'>
          
          <img className='videocard__image' src={image} alt='' />
        
          {/* <div className="videocard__info"> */}
            {/* <Avatar 
              className='videocard__avatar' 
              alt={channel} 
              src={channelImage} 
            /> */}
            <div className="videocard__text">
              <h4>{title}</h4>
              {/* <p>{channel}</p> */}
              <p>{views} views • {timestamp}</p>
            {/* </div>  */}
          </div>
        </div>
    )
}

export default VideoCards;
