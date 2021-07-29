import React from 'react';
import Post from '../post/Post';
import './Posts.scss';
import data from './data';

const Posts = () => {
  return (
    <div className="posts">
      {
        data.map(post => 
          <Post 
            postUserImg={post.postUserImg}
            postUserName={post.postUserName}
            postUserTimestamp={post.postUserTimestamp}
            postText={post.postText}
            postImg={post.postImg}
            postLikes={post.postLikes}
            postCommentCount={post.postCommentsCount}
          />
        )
      }
    </div>
  );
}


export default Posts;