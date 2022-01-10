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

import React, { useEffect, useState } from 'react';
import './app.css'
import VideoList from './components/video_list/video-list';
import ApiInstance from './js/api'

function App() {
  const [videos, setVideos] = useState([])

  // mount가 되었을때만
  useEffect(() => {
    ApiInstance.get('/search?part=snippet&maxResults=25&q=bts&key=AIzaSyCdv89By7OwgA4Y5E1ITyCKOCZ41vWu428')
    .then(function (response) {
      // console.log(response.data );
      setVideos(response.data.items)
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [])

  return <VideoList videos={videos}/>
}

export default App