import React from "react";
import { usePosts } from "./usePosts";

export const Posts = () => {
  const posts = usePosts();
  return (
    <article>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{JSON.stringify(post)}</li>
        ))}
      </ul>
    </article>
  );
};
