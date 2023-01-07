import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/google.png";

// logo Search-bar user

const sideLogo = (
  <span className="title" key="myheading">
    <img src={logo} alt="Logo" />
  </span>
);

const user = (
  <div>
    <span>
      <span className="user-name">Welcome Anand</span>
      <i className="fa-solid fa-circle-user user"></i>
    </span>
  </div>
);
const SearchBarComponent = () => {
  return (
    <form>
      <div>
      <input className="input-Search" type="text" name="name" placeholder="Search"/>
        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
      </div>
    </form>
  );
};

const HeaderComponent = function () {
  return (
    <div className="header-container">
      {sideLogo}
      <SearchBarComponent />
      {user}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Welcome />);
root.render(<HeaderComponent />);
