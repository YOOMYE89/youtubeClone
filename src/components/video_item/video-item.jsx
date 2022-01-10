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

import React from 'react';

const VideoItem = (props) => (<h1>{props.video.snippet.title}</h1>);

export default VideoItem