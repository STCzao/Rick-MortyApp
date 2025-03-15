import React from "react";
import Logo from "../../assets/App-logo.png";
import Link from "./Link/Link";
import Button from "./Button/Button";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="logo-app" className="w-50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link title={"Home"} url={"/"}/>
            <Link title={"Characters"} url={"/"}/>
            <Link title={"Episodes"} url={"/"}/>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
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
