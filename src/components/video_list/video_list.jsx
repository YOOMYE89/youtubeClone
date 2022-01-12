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
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css'

const VideoList = ({videos, onVideoClick, display}) => (
    <ul className={styles.videos}>
        {
            videos
                .map((video, index) => <VideoItem 
                                            key={video.id.videoId || '1' + index} 
                                            video={video} 
                                            onVideoClick={onVideoClick} 
                                            display={display} />)
        }
    </ul>
);

export default VideoList;