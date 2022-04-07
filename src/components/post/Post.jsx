import "./post.css";
import {MoreVert } from '@mui/icons-material';
import {Users} from "../../dummyData.js"
import React, { useState } from 'react';





export default function Post({post}) {

    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like -1 : like + 1)
        setIsLiked(!isLiked)
    }

  return (
  <div className="post">
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">

                <img 
                className="postProfileImg"
                 src={ Users.find( user => user.id === post.userId).profilePicture}
                 alt="profile_picture"/>
                
                <span className="postUsername">{ Users.filter( user => user.id === post.userId)[0].username}</span>
                
            </div>
            <div className="postTopRight">
                <span className="postDate">{post.data}</span>
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img 
                 src={post.photo}
                 alt="post" 
                 className="postImg"/>
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
            <img src="/assets/like.png" alt="Like-post" onClick={likeHandler} className="likeIcon"/>
            <img src="/assets/heart.png" alt="heart" onClick={likeHandler} className="likeIcon"/>
            <span className="postLikeCounter">{like} likes</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentCounterText">{post.comment} comments</span>
            </div>
        </div>
    </div>
  </div>
  );
}
