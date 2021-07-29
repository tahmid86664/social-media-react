import React from 'react';
import Post from '../post/Post';
import './Posts.scss';
import { posts } from '../../mockData';

const Posts = () => {
  return (
    <div className="posts">
      {
        posts.map(post => 
          <Post 
            key={post.id}
            id={post.id}
            postUserId={post.postUserId}
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