import { Children, createContext, useState } from "react";

const UserContext = createContext({
  loggedInUser: "hello",
  updateData: () => {},
});

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState("hello");
  const updateData = (ndata) => {
    setLoggedInUser(ndata);
  };
};

export default UserContext;
