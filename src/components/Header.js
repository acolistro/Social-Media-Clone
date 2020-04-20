import React from "react";

function Header(){
  return (
    <React.Fragment>
    <hr />
    <button>Home</button>
    <button>Notifications</button>
    <button>Messages</button>
    <input type="text"></input>
    <button>Tweet</button>
    </React.Fragment>
  );
}

export default Header;