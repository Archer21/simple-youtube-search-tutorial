'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

const API_KEY = 'AIzaSyBUQM5jEPQyCygitj_IsnjJDO83sL24YoQ'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.onVideoSelect = this.onVideoSelect.bind(this)
    this.videoSearch = this.videoSearch.bind(this)

    this.videoSearch('snow halation')
  }

  onVideoSelect (selectedVideo) {
    this.setState({
      selectedVideo
    })
  }

  videoSearch (term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render () {

    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </div>
    )  
  } 
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
