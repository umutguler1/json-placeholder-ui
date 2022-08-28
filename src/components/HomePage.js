import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";

const homePageItemsClasses =
  "grid text-center place-items-center p-16 rounded-lg hover:bg-custom-yellow transition-all";

const HomePage = () => {
  return (
    <div>
      <h1 className="my-4 text-6xl font-bold text-center">
        ~~JSON-API USER INTERFACE~~
      </h1>
      <div className="grid grid-cols-2 place-items-center mt-16">
        <Link to={"/posts"} className={homePageItemsClasses}>
          <AiOutlineMail className="w-[100px] h-[100px]" />
          <button className="text-7xl">Posts</button>
        </Link>
        <Link to={"/users"} className={homePageItemsClasses}>
          <AiOutlineUser className="w-[100px] h-[100px]" />
          <button className="text-7xl">Users</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
