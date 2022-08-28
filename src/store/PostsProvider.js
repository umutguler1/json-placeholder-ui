import PostsContext from "./posts-context";

import { useState } from "react";

const PostsProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const setPostsHandler = (posts) => {
    setPosts(posts);
  };

  return (
    <PostsContext.Provider
      value={{
        posts: posts,
        setPosts: setPostsHandler,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
