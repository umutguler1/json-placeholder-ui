import { AiOutlineHome, AiOutlineMail, AiOutlineUser } from "react-icons/ai";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex bg-custom-blue drop-shadow-xl h-16 w-full items-center justify-between text-custom-white">
      <nav className="text-2xl ml-16">
        <Link to={"/"} className="flex hover:text-custom-yellow transition-all">
          <AiOutlineHome className="w-7 h-7" />
          HOME
        </Link>
      </nav>
      <nav className="flex justify-around w-52 mr-16">
        <Link
          to={"/posts"}
          className="flex rounded-2xl p-4 hover:bg-custom-yellow hover:text-custom-blue text-xl transition-all"
        >
          <AiOutlineMail className="w-7 h-7" />
          Posts
        </Link>
        <Link
          to={"/users"}
          className="flex rounded-2xl p-4 hover:bg-custom-yellow hover:text-custom-blue text-xl transition-all"
        >
          <AiOutlineUser className="w-7 h-7" />
          Users
        </Link>
      </nav>
    </div>
  );
};

export default Header;
