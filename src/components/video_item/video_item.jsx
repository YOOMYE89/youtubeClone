// import React, {PureComponent} from 'react';

// class VideoItem extends PureComponent {
//     render() {
//         const {title, description} = this.props.item.snippet
//         return (<> 
//             <li>
//                 <span>{`제목 : ${title}`}</span>
//                 <br/>
//                 <span>{`설명 : ${description}`}</span>
//                 <br/>
//             </li>
//         </>);
//     }
// }

// export default VideoItem;

import React, { memo } from 'react';
import styles from './video_item.module.css'

const VideoItem = memo(({video ,video: {snippet}, onVideoClick, display}) => {
    
    const displayType = display === 'list' ? styles.list : styles.grid

    return (
    <li 
        className={`${styles.container} ${displayType}`} 
        onClick={() => onVideoClick(video)}>
            <div className={styles.video}>
                <img
                    className={styles.thumbnail}
                    src={snippet.thumbnails.medium.url}
                    alt="video thumbnail"/>
                <div className={styles.metadata}>
                    <p className={styles.title}>{snippet.title}</p>
                    <p className={styles.channel}>{snippet.channelTitle}</p>
                </div>

            </div>
    </li>
)})

export default VideoItem