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

      <nav class="menu" tabindex="0">
        <div class="smartphone-menu-trigger"></div>
        <header class="avatar">

          <h2>Kellie A. Corrigan</h2>
        </header>
          <ul>
          <li tabindex="0" class="icon-dashboard"><span>TWEETS</span></li>
          <li tabindex="0" class="icon-dashboard"><span>FOLLOWING</span></li>
          <li tabindex="0" class="icon-dashboard"><span>FOLLOWERS</span></li>
          </ul>
          <br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </nav>
    </React.Fragment>
  );
}

export default Header;