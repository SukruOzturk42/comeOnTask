import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("player")
    ? JSON.parse(localStorage.getItem("player"))
    : {};

  const logout = () => {
    const username = localStorage.getItem("username");
    fetch("http://localhost:3001/logout", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.removeItem("player");
        localStorage.removeItem("username");

        navigate("/login");
      });
  };

  return (
    <div className="header">
      {user.name && (
        <>
          <img
            src={user.avatar ? require("../" + user.avatar) : ""}
            alt="Tesla"
          />
          <div>{user?.name}</div>
          <div>{user?.event}</div>
          <button onClick={() => logout()}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Header;
