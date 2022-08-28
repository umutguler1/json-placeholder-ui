import { useContext, useState, useEffect } from "react";
import PostsContext from "../../store/posts-context";
import axios from "axios";

const UserPosts = ({ userId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const postsCtx = useContext(PostsContext);

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      setIsLoading(true);

      const response = await axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/posts",
      });
      postsCtx.setPosts(response.data);
      setIsLoading(false);
    }
  }, []);

  const posts = postsCtx.posts;

  if (posts.length === 0) {
    return;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const filteredPosts = posts.filter((post) => post.userId === userId);

  const userPosts = filteredPosts.map((post) => (
    <ul key={post.id} className="grid mt-4">
      <li
        key={post.id}
        className="grid gap-y-4 p-8 w-[500px] bg-custom-yellow rounded-lg place-self-center my-4"
      >
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="">{post.body}</p>
      </li>
    </ul>
  ));

  return <div>{userPosts}</div>;
};

export default UserPosts;
