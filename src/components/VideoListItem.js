'use strict'

import React from 'react'

// with ES6
// const VideoListItem = ({video, onVideoSelect}) => {

const VideoListItem = (props) => {
  const video = props.video
  const onVideoSelect = props.onVideoSelect
  const imageUrl = video.snippet.thumbnails.default.url
  
  return (
    <li className="list-group-item" onClick={onVideoSelect.bind(null, video)}>
      <div className="video-list media">
        <div className="media-left">
          <img src={imageUrl} className="media-object"/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>

      </div>
    </li>
  )
}

export default VideoListItem
