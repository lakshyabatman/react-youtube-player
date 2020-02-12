import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetails';
import AddVideo from './components/AddVideo'
import Footer from './components/Footer'
const API_KEY = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s';
class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
        videos: [],
        selectedVideo: null
    };
    this.videoSearch('Data Structures and Algorithms in JavaScript');
}
videoSearch(searchTerm) {
  YTSearch({key: API_KEY, term: searchTerm}, (data) => {
      this.setState({ 
          selectedVideo: data[0]
      });
  });
}
AddVideoinQueue(searchTerm) {
  YTSearch({key: API_KEY, term: searchTerm}, (data) => {
    var videos = [...this.state.videos]
    videos.push(data[0])
    this.setState({ 
        videos
    });
});
}
  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <div className="col-md-4">
         <AddVideo onSearchTermChange={searchTerm => this.AddVideoinQueue(searchTerm)} />
          <VideoList 
            onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
            videos={this.state.videos} />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
