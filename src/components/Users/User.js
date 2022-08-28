import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const User = ({ id, name, username, email }) => {
  const navigate = useNavigate();
  return (
    <li className="flex drop-shadow-lg">
      <div className="grid gap-y-2 p-4 w-[400px] bg-custom-white rounded-l-lg ">
        <Link to={`/users/${id}`}>
          <h3 className="text-xl font-semibold underline hover:text-custom-blue">
            {name}
          </h3>
        </Link>
        <div className="">
          <h2 className="text-md">Username: {username}</h2>
          <p>E-mail: {email}</p>
        </div>
      </div>
      <button
        onClick={() => navigate(`/users/${id}`)}
        className="p-8 bg-custom-blue text-custom-white text-xl font-semibold rounded-r-lg hover:bg-custom-yellow hover:text-custom-blue transition-all"
      >
        Go to User!
      </button>
    </li>
  );
};

export default User;
