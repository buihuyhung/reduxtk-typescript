import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux-tk";
import { State, Post } from "../type";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const { posts: postsST, status } = useSelector((state: State) => state.posts);

  useEffect(() => {
    if (status === "success") setPosts(postsST);
  }, [status]);

  return status === "loading" ? (
    <h1>Loading</h1>
  ) : (
    <div>
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
