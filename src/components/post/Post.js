import React, { useState } from 'react';
import './Post.scss';
import { MoreVert } from '@material-ui/icons';
import ReactEmoji from 'react-emoji';
import { users } from '../../mockData';

const Post = ({ id, postUserId, postUserTimestamp, postImg, postText, postLikes, postCommentCount }) => {
  const [likes, setLikes] = useState(postLikes);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLikes(isLiked ? likes-1 : likes+1);
    setIsLiked(!isLiked);
  }

  return (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__top">
          <div className="post__topLeft">
            <img src={users.filter(user => user.id === postUserId)[0].imgUrl} alt="post top profile img" className="post__topImg" />
            <span className="post__topLeftUsername">{users.filter(user => user.id === postUserId)[0].name}</span>
            <span className="post__topLeftTimestamp">{postUserTimestamp}</span>
          </div>
          <div className="post__topRight">
            <MoreVert />
          </div>
        </div>
        <div className="post__center">
          <span className="post__text">{ReactEmoji.emojify(postText)}</span>
          <img src={postImg} alt="post img" className="post__image" />
        </div>
        <div className="post__bottom">
          <div className="post__bottomLeft">
            <img src="/assets/like.png" alt="like button" className="post__likeButton" onClick={likeHandler} />
            <img src="/assets/heart.png" alt="like button" className="post__likeButton" onClick={likeHandler} />
            <span className="post__bottomLikeCount">{likes} people {isLiked && "including you"} react it </span>
          </div>
          <div className="post__bottomRight">
            <span className="post__bottomCommentCount">{postCommentCount} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Post;