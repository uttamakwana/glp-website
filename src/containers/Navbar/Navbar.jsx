import React, { useState } from "react";
import "./navbar.css";
import { motion } from "framer-motion";
// close logo
import { AiOutlineCloseCircle } from "react-icons/ai";
// college details logo
import { TbListDetails } from "react-icons/tb";
// notice board logo
import { BsClipboardCheck } from "react-icons/bs";
// opportunity logo
import { GoMortarBoard } from "react-icons/go";
// project logo
import { TbTools } from "react-icons/tb";
// Link logo
import { PiLinkSimpleBold } from "react-icons/pi";
// Activities logo
import { MdDirectionsRun } from "react-icons/md";

const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState(false);

  window.onload = () => {
    setTimeout(() => {
      setActiveNavbar(true);
    }, 1000);
  };

  return (
    <>
      {/* Main navigation for big screen (expect mobile) */}
      <nav className={`desktop-navigation ${activeNavbar ? "active" : ""}`}>
        <nav className="desktop-navigation__navigation-container">
          {/* <ul className="desktop-navigation__navigation-container__list">
            <li className="desktop-navigation__navigation-container__list__item">
              <a href="#home" className="desktop-navigation__navigation-container__list__item__link">College Details</a>
            </li>
            <li className="desktop-navigation__navigation-container__list__item">
              <a href="#home" className="desktop-navigation__navigation-container__list__item__link">Notice Board</a>
            </li>
            <li className="desktop-navigation__navigation-container__list__item">
              <a href="#home" className="desktop-navigation__navigation-container__list__item__link">Opputunity</a>
            </li>
            <li className="desktop-navigation__navigation-container__list__item">
              <a href="#home" className="desktop-navigation__navigation-container__list__item__link">Sample Project</a>
            </li>
            <li className="desktop-navigation__navigation-container__list__item">
              <a href="#home" className="desktop-navigation__navigation-container__list__item__link">IMP Links</a>
            </li>
            <li className="desktop-navigation__navigation-container__list__item">
              <a href="#home" className="desktop-navigation__navigation-container__list__item__link">College Details</a>
            </li>
            <li className="desktop-navigation__navigation-container__list__item">
              <a href="#home" className="desktop-navigation__navigation-container__list__item__link">College Details</a>
            </li>
          </ul> */}
          <ul className="desktop-navigation__navigation-container__list flex-center">
            <motion.li
              className="desktop-navigation__navigation-container__list__item flex-center"
              whileInView={{ delay: 0.2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <TbListDetails />
              <a
                href="#college-details"
                className="desktop-navigation__navigation-container__list__item__link"
              >
                College Details
              </a>
            </motion.li>
            <motion.li
              className="desktop-navigation__navigation-container__list__item flex-center"
              whileInView={{ delay: 0.4 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <BsClipboardCheck />

              <a
                href="#college-details"
                className="desktop-navigation__navigation-container__list__item__link"
              >
                Notice Board
              </a>
            </motion.li>
            <motion.li
              className="desktop-navigation__navigation-container__list__item flex-center"
              whileInView={{ delay: 0.6 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <GoMortarBoard />

              <a
                href="#college-details"
                className="desktop-navigation__navigation-container__list__item__link"
              >
                Oppurtunities
              </a>
            </motion.li>
            <motion.li
              className="desktop-navigation__navigation-container__list__item flex-center"
              whileInView={{ delay: 0.8 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <TbTools />

              <a
                href="#college-details"
                className="desktop-navigation__navigation-container__list__item__link"
              >
                Sample Project
              </a>
            </motion.li>
            <motion.li
              className="desktop-navigation__navigation-container__list__item flex-center"
              whileInView={{ delay: 1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <PiLinkSimpleBold />

              <a
                href="#college-details"
                className="desktop-navigation__navigation-container__list__item__link"
              >
              Links
              </a>
            </motion.li>
            <motion.li
              className="desktop-navigation__navigation-container__list__item flex-center"
              whileInView={{ delay: 1.2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <MdDirectionsRun />

              <a
                href="#college-details"
                className="desktop-navigation__navigation-container__list__item__link"
              >
                Activities
              </a>
            </motion.li>
          </ul>
        </nav>
      </nav>
    </>
  );
};

export default Navbar;
