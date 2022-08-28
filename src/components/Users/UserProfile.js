import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import UsersContext from "../../store/users-context";
import axios from "axios";
import UserPosts from "./UserPosts";

const UserProfile = () => {
  const usersCtx = useContext(UsersContext);
  const [isLoading, setIsLoading] = useState("false");

  const params = useParams();
  const { userId } = params;

  const [showPosts, setShowPosts] = useState(false);

  useEffect(() => {
    fetchUsers();
    async function fetchUsers() {
      setIsLoading(true);

      const response = await axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/users",
      });
      usersCtx.setUsers(response.data);
      setIsLoading(false);
    }
  }, []);

  const users = usersCtx.users;

  if (users.length === 0) {
    return;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  const user = users.find((user) => user.id === parseInt(userId));
  const { id, name, username, email, phone, website } = user;

  return (
    <div className="grid">
      <div className="flex drop-shadow-lg justify-self-center mt-4">
        <div className="grid gap-y-2 py-12 px-8 w-fit bg-custom-white rounded-l-lg ">
          <h2 className="text-6xl font-bold flex">
            {name}
            {showPosts && <p>'s Posts</p>}
          </h2>
          {!showPosts && (
            <div className="bg-custom-white w-fit px-2 py-4 text-xl">
              <p>Username: {username}</p>
              <p>E-Mail: {email}</p>
              <p>Phone: {phone}</p>
              <p>Website: {website}</p>
            </div>
          )}
        </div>
        {!showPosts && (
          <button
            className="px-8 py-4 bg-custom-blue text-custom-white text-2xl font-semibold rounded-r-lg hover:bg-custom-yellow hover:text-custom-blue transition-all"
            onClick={() => setShowPosts(true)}
          >
            SHOW POSTS
          </button>
        )}
      </div>
      {showPosts && (
        <button
          className="mt-8 place-self-center px-8 py-4 w-fit bg-custom-blue text-custom-white text-2xl font-semibold rounded-lg hover:bg-custom-yellow hover:text-custom-blue transition-all"
          onClick={() => setShowPosts(false)}
        >
          HIDE POSTS
        </button>
      )}
      {showPosts && <UserPosts userId={id} />}
      {showPosts && (
        <button
          className="mt-2 place-self-center px-8 py-4 w-fit bg-custom-blue text-custom-white text-2xl font-semibold rounded-lg hover:bg-custom-yellow hover:text-custom-blue transition-all"
          onClick={() => setShowPosts(false)}
        >
          HIDE POSTS
        </button>
      )}
    </div>
  );
};

export default UserProfile;
