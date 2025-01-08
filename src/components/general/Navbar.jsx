import React from "react";
import Logo from "../../assets/App-logo.png";
import Link from "./Link/Link";
import Button from "./Button/Button";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={Logo} alt="logo-app" className="w-50" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <Link title={"Home"}/>
            <Link title={"Characters"}/>
            <Link title={"Episodes"}/>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button label={'Search'}/>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
