// import React, {PureComponent} from 'react';
// import Video from './video'

// class VideoList extends PureComponent {

//     // state = {     items = this.props.items }

//     render() {
//         const itemArray = this.props.items || []
//         console.log(itemArray)
//         return (<>  
//             <ul> 
//             {
//                 itemArray.map(item => (<Video key={item.id.videoId} item={item}/>))
//             } 
//             </ul>
//         </>);
//     }
// }

// export default VideoList;

import React from 'react';
import VideoItem from '../video_item/video-item';

const VideoList = (props) => (
    <ul>
        {
            props
                .videos
                .map((video, index) => <VideoItem key={video.id.videoId || '1' + index} video={video}/>)
        }
    </ul>
);

export default VideoList;