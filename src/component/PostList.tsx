// src/components/PostList.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, editPost, fetchPosts } from './../_redux/slice/postsSlice';

const PostList: React.FC = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state: any) => state.posts);

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts?.map((post: any) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={()=> dispatch(editPost(post))}>Edit</button>
            <button onClick={()=>dispatch(deletePost(post))}>Remove</button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
