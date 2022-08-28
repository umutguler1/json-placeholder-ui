import UsersContext from "./users-context";

import { useState } from "react";

const UsersProvider = (props) => {
  const [users, setUsers] = useState([]);

  const setUsersHandler = (users) => {
    setUsers(users);
  };

  return (
    <UsersContext.Provider
      value={{
        users: users,
        setUsers: setUsersHandler,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
