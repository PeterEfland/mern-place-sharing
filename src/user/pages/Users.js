import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Peter Efland",
      image: "https://fakeimg.pl/300/",
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
