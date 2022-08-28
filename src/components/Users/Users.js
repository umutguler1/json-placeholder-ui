import { useState, useEffect, useContext } from "react";
import axios from "axios";

import User from "./User";
import PageNumbers from "../PageNumbers";

import UsersContext from "../../store/users-context";

const Users = () => {
  const usersCtx = useContext(UsersContext);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const usersPerPage = 5;

  const indexOfLastUser = currentPageNumber * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = usersCtx.users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPageNumber(pageNumber);

  useEffect(() => {
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
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid gap-y-2">
      <PageNumbers
        paginate={paginate}
        itemsPerPage={usersPerPage}
        totalItems={usersCtx.users.length}
      />
      <ul className="grid place-content-center gap-y-4">
        {currentUsers.map((user) => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
          />
        ))}
      </ul>
    </div>
  );
};
export default Users;
