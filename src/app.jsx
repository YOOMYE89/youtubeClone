// import './app.css';
// import React, {Component} from 'react';
// import VideoList from './components/videoList'
// import ApiInstance from './js/api'

// class App extends Component {

//     state = {
//         items: []
//     }

//     // dom이 마운트 될때
//     componentDidMount() {
//         ApiInstance
//             .get(
//                 '/search?part=snippet&maxResults=25&q=bts&key=AIzaSyCdv89By7OwgA4Y5E1ITyCKOCZ41' +
//                 'vWu428'
//             )
//             .then(response => {
//                 console.log(response)
//                 this.setState({items: response.data.items})
//             })
//             // 응답(실패)
//             .catch(error => {
//                 console.log(error);
//             });
//     }

//     render() {
//         return <VideoList items={this.state.items}/>
//     }
// }

// export default App;

import React, { useCallback, useEffect, useState } from 'react';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css'
import VideoDetail from './components/video_detail/video_detail';

function App({youtube}) {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const selectVideo = (video) => {
    setSelectedVideo(video)
  }

  const searchVideo = useCallback((query) => {
    youtube
      .search(query)
      .then(videos => {
        setVideos(videos)
        setSelectedVideo(null)
      })
  }, [youtube])

  // mount가 되었을때만
  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos))
  }, [youtube])

  return (
    <div className={styles.app}>
      <SearchHeader searchVideo={searchVideo} />
      <section className={styles.content}>
        { 
        selectedVideo && 
          <div className={styles.detail}>
           <VideoDetail video={selectedVideo} /> 
          </div>
        }
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo? 'list':'grid'}/>
        </div>
        
      </section>
    </div>
  )
}

export default App