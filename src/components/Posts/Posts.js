import { useState, useEffect, useContext } from "react";
import axios from "axios";

import PostItem from "./PostItem";
import PageNumbers from "../PageNumbers";

import UsersContext from "../../store/users-context";
import PostsContext from "../../store/posts-context";

const Posts = () => {
  const usersCtx = useContext(UsersContext);
  const postsCtx = useContext(PostsContext);

  const [searchKeyword, setSearchKeyword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const postsPerPage = 10;

  const indexOfLastPost = currentPageNumber * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const paginate = (pageNumber) => setCurrentPageNumber(pageNumber);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const response = await axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/posts",
      });

      postsCtx.setPosts(response.data);
      setIsLoading(false);
    };

    const fetchUsers = async () => {
      setIsLoading(true);

      const response = await axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/users",
      });
      usersCtx.setUsers(response.data);
      setIsLoading(false);
    };
    fetchUsers();
    fetchPosts();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const posts = postsCtx.posts;

  if (posts.length === 0) {
    return;
  }

  const searchKeywordHandler = (event) => {
    setSearchKeyword(event.target.value);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.includes(searchKeyword) ||
      post.body.replaceAll("\n", " ").includes(searchKeyword) // replacing new lines with spaces
  );

  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="grid gap-y-4">
      <div className="">
        <PageNumbers
          paginate={paginate}
          itemsPerPage={postsPerPage}
          totalItems={filteredPosts.length}
        />
      </div>
      <form className="grid">
        <label className="text-lg font-semibold">
          Search by keyword:
          <input
            type="text"
            onChange={searchKeywordHandler}
            value={searchKeyword}
            className="rounded-lg mx-2 p-2"
          ></input>
        </label>
      </form>
      <ul className="grid place-content-center gap-y-4">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <PostItem
              key={post.id}
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))
        ) : (
          <p className="text-3xl font-semibold mt-8">No Posts are Found :(</p>
        )}
      </ul>
    </div>
  );
};

export default Posts;
