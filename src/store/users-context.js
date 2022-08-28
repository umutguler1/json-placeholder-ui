import React from "react";

const UsersContext = React.createContext({
  users: [],
  setUsers: (users) => {},
});

export default UsersContext;
