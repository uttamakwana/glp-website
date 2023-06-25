import React, { useState } from "react";
import "./header.css";
import { BsSearch } from "react-icons/bs";
import { LuMessageCircle } from "react-icons/lu";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Header = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    // Header componenet starts here
    <header className="header">
      <nav className="header__logo-container">
        <figure>
          <figcaption className="heading-text">Logo</figcaption>
        </figure>
      </nav>
      <nav className="header__navgiation-container">
        <ul
          className={`header__navigation-container__navigation ${
            toggleMenu ? "active-menu" : ""
          } `}
        >
          <li id="search-bar">
            <input
              type="text"
              name="search"
              id="search"
              autoComplete="off"
              style={{
                display: toggleSearch ? "block" : "none",
              }}
            />
            <BsSearch
              id="search-icon"
              style={{
                height: toggleSearch ? "1.5rem" : "2rem",
                width: toggleSearch ? "1.5rem" : "2rem",
              }}
              onClick={() => {
                if (toggleMenu) {
                  setToggleMenu(false);
                }
                setToggleSearch(!toggleSearch);
              }}
            />
          </li>
          <li>
            <LuMessageCircle />
            {toggleMenu ? "Messages" : ""}
          </li>
          <li>
            <MdOutlineNotificationsActive />
            {toggleMenu ? "Notifications" : ""}
          </li>
          <li>
            <CgProfile />
            {toggleMenu ? "Profile" : ""}
          </li>

          {toggleMenu ? (
            <AiOutlineCloseCircle
              id="close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
          ) : (
            ""
          )}
        </ul>

        <div className="toggle-bar-container">
          <TfiMenu
            onClick={() => {
              setToggleSearch(true);
              setToggleMenu(!toggleMenu);
            }}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
