import React, { useState } from "react";
import "./header.css";
import { BsSearch } from "react-icons/bs";
import { LuMessageCircle } from "react-icons/lu";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const Header = () => {
  // toggleSearch will toggle the search bar in header
  const [toggleSearch, setToggleSearch] = useState(false);
  // toggleMenu will toggle the menu bar for mobile display
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    // Header componenet starts here
    <header className="header">
      {/* header logo container */}
      <nav className="header__logo-container">
        {/* main logo for header */}
        <figure>
          <figcaption className="heading-text">Logo</figcaption>
        </figure>
      </nav>
      {/* header navigation container */}
      <nav className="header__navgiation-container">
        {/* header navigation list */}
        <ul
          className={`header__navigation-container__navigation ${
            toggleMenu ? "active-menu" : ""
          } `}
        >
          {/* header navigation list item */}
          <li
            id="search-bar"
            className="header__navigation-container__navigation_item"
          >
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
          {/* header navigation list item */}

          <li className="header__navigation-container__navigation_item">
            <LuMessageCircle />
            {toggleMenu ? "Messages" : ""}
          </li>
          {/* header navigation list item */}

          <li className="header__navigation-container__navigation_item">
            <MdOutlineNotificationsActive />
            {toggleMenu ? "Notifications" : ""}
          </li>
          {/* header navigation list item */}

          <li className="header__navigation-container__navigation_item">
            <CgProfile />
            {toggleMenu ? "Profile" : ""}
          </li>

          {/* close icon for mobile display */}
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

        {/* header toggle menu bar icon for mobile/tablet display */}
        <motion.div
          className="toggle-bar-container"
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0, scale: 0, x: 200 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
        >
          <TfiMenu
            id="toggle-menu"
            onClick={() => {
              setToggleSearch(true);
              setToggleMenu(!toggleMenu);
            }}
          />
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
