'use strict'

import React from 'react'

import VideoListItem from './VideoListItem'

const VideoList = (props) => {
  let videoItems = props.videos.map(function (video) {
    return <VideoListItem
              key={video.etag}
              video={video}
              onVideoSelect={props.onVideoSelect}
           />
  })

  return (
    <ul className="col-md-4 list-group">
      { videoItems }    
    </ul>
  )
}

export default VideoList
