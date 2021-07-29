import React from 'react';
import './Post.scss';
import { MoreVert } from '@material-ui/icons';
import ReactEmoji from 'react-emoji';

const Post = ({ postUserImg, postUserName, postUserTimestamp, postImg, postText, postLikes, postCommentCount }) => {
  return (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__top">
          <div className="post__topLeft">
            <img src={postUserImg} alt="post top profile img" className="post__topImg" />
            <span className="post__topLeftUsername">{postUserName}</span>
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
            <img src="/assets/like.png" alt="like button" className="post__likeButton" />
            <img src="/assets/heart.png" alt="like button" className="post__likeButton" />
            <span className="post__bottomLikeCount">{postLikes} people like it</span>
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