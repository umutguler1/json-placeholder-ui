import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UsersContext from "../../store/users-context";
import Comments from "./Comments";

const PostItem = ({ id, userId, title, body }) => {
  const usersCtx = useContext(UsersContext);

  const [showComments, setShowComments] = useState(false);
  const userOfThePost = usersCtx.users.find((user) => user.id === userId);

  return (
    <li className="grid gap-y-4 p-2 w-[500px] bg-custom-yellow rounded-lg">
      <div className="flex bg-custom-white w-fit rounded-br-lg -mx-2 -my-2 p-2">
        <p>From:</p>
        <Link
          to={`/users/${userId}`}
          className="font-semibold hover:text-custom-blue ml-1 underline"
        >
          {userOfThePost && userOfThePost.name}
        </Link>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className=" p-2 -mx-2">{body}</p>
      {!showComments && (
        <button
          onClick={() => setShowComments(true)}
          className="bg-custom-blue text-custom-white w-fit place-self-center px-2 py-1 rounded-lg hover:bg-custom-white hover:text-custom-blue  transition-all"
        >
          Show Comments
        </button>
      )}
      {showComments && <Comments postId={id} />}
      {showComments && (
        <button
          onClick={() => setShowComments(false)}
          className="bg-custom-blue text-custom-white w-full place-self-center px-2 py-1 rounded-lg hover:bg-custom-white hover:text-custom-blue  transition-all"
        >
          Hide Comments
        </button>
      )}
    </li>
  );
};

export default PostItem;
