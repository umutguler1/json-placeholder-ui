import React from "react";

const PostsContext = React.createContext({
  posts: [],
  setPosts: (posts) => {},
});

export default PostsContext;
