import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Peter Efland",
      image:
        "http://www.clashmusic.com/sites/default/files/styles/article_feature/public/legacy/files/John%20Lennon%20profile%20famous.jpg",
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
