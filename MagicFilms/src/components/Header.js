import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header bg-white bg-opacity-5 text-white shadow-lg hidden md:block">
        <div className="container mx-auto flex items-center h-24">
          <NavLink to="/" className="flex items-center justify-center">
            <img
              className="h-16"
              src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1574580/02a88fe40be3642793b1b574f378ef24e0372b8e.gif"
              alt=""
            />
            <span a href="/" className="ml-4 uppercase font-black">
              Magic
              <br />
              Films
            </span>
          </NavLink>
          <nav className="contents font-semibold text-base lg:text-lg">
            <ul className="mx-auto flex items-center">
              <li className="p-5 xl:p-8 active">
                <NavLink to="/main">
                  {" "}
                  <span>Home</span>{" "}
                </NavLink>
              </li>
              <li className="p-5 xl:p-8">
                <a href="">
                  <span>New</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a href="">
                  <span>Populer</span>
                </a>
              </li>
              <li to="/Cards" className="p-5 xl:p-8">
                <NavLink to="/cards">
                  {" "}
                  <span>Films</span>{" "}
                </NavLink>
              </li>
              <li to="/Netflix" className="p-5 xl:p-8">
                <NavLink to="/netflix">
                  {" "}
                  <span>Netflix</span>{" "}
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="header-login">
            <div className="header-login__ikon ">
              <input
                class="header-login__txt"
                type="text"
                name=""
                placeholder="Film...Netflix...search..."
                id="searchInput"
              ></input>
              <a class="header-login__btn" href="#">
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
            </div>
            <div className="header-login__about">
              <div id="modal" className="modal">
                <NavLink to="/login">
                  <span className="header-login__link">Login</span>
                </NavLink>
                <span className="registration-btn">|</span>
                <NavLink to="/signup">
                  <span className="header-signup__link">Sign Up</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
