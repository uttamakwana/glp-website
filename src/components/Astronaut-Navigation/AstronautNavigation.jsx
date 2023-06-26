import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./astronautnavigation.css";
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
// navgiation logo
import { PiSquaresFourFill } from "react-icons/pi";
// import QuickAcessNavigation from "../../assets/quick-access-navigation.json";
// import Lottie from "react-lottie";

const AstronautNavigation = () => {
  const constraintRef = useRef(null);

  const [toggleNavigation, setToggleNavigation] = useState(false);

  //   const defaultOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animatinData: QuickAcessNavigation,
  //     renderSettings: {
  //       preserveAspectRatio: "xMidyMid slice",
  //     },
  //   };

  return (
    <>
      {/* main draggable container */}
      <motion.div className="draggable-container" ref={constraintRef}>
        {/* draggable div / astronaut navigation */}
        <motion.div
          className="astronaut-navigation flex-center"
          drag
          dragConstraints={constraintRef}
          onClick={() => {
            setToggleNavigation(true);
          }}
        >
          <PiSquaresFourFill id="astronaut-navigation-icon" />
          {/* <Lottie options={defaultOptions} id="astronaut-navigation-icon" /> */}
        </motion.div>
      </motion.div>
      {/* astronaut navigation list container */}
      <main
        className={`astronaut-navigation-container flex-center ${
          toggleNavigation ? "active" : ""
        }`}
      >
        <ul className="astronaut-navigation__list">
          <motion.li
            className="astronaut-navigation__list__item flex-center"
            whileInView={{ delay: 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <TbListDetails />
            <a
              href="#college-details"
              className="astronaut-navigation__list__item__link"
            >
              College Details
            </a>
          </motion.li>
          <motion.li
            className="astronaut-navigation__list__item flex-center"
            whileInView={{ delay: 0.4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <BsClipboardCheck />

            <a
              href="#college-details"
              className="astronaut-navigation__list__item__link"
            >
              Notice Board
            </a>
          </motion.li>
          <motion.li
            className="astronaut-navigation__list__item flex-center"
            whileInView={{ delay: 0.6 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <GoMortarBoard />

            <a
              href="#college-details"
              className="astronaut-navigation__list__item__link"
            >
              Oppurtunities
            </a>
          </motion.li>
          <motion.li
            className="astronaut-navigation__list__item flex-center"
            whileInView={{ delay: 0.8 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <TbTools />

            <a
              href="#college-details"
              className="astronaut-navigation__list__item__link"
            >
              Sample Project
            </a>
          </motion.li>
          <motion.li
            className="astronaut-navigation__list__item flex-center"
            whileInView={{ delay: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <PiLinkSimpleBold />

            <a
              href="#college-details"
              className="astronaut-navigation__list__item__link"
            >
              IMP Links
            </a>
          </motion.li>
          <motion.li
            className="astronaut-navigation__list__item flex-center"
            whileInView={{ delay: 1.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <MdDirectionsRun />

            <a
              href="#college-details"
              className="astronaut-navigation__list__item__link"
            >
              Activities
            </a>
          </motion.li>
          <motion.li
            className="astronaut-navigation__list__item flex-center"
            whileInView={{ delay: 0 }}
            // transition={{ delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <AiOutlineCloseCircle
              onClick={() => {
                setToggleNavigation(false);
              }}
            />
          </motion.li>
        </ul>
      </main>
    </>
  );
};

export default AstronautNavigation;
