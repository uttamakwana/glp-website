import React, { useState, useEffect } from "react";
import "./themeprovider.css";

const ThemeProvider = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.style.setProperty("--sixty-pr-color", "#e1e7e0");
      document.documentElement.style.setProperty(
        "--thirty-pr-color",
        "#2b4560"
      );
      document.documentElement.style.setProperty("--ten-pr-color", "#2f6d80");
    } else if (theme === "black") {
      document.documentElement.style.setProperty("--sixty-pr-color", "#000000");
      document.documentElement.style.setProperty("--thirty-pr-color", "#fff");
      document.documentElement.style.setProperty("--ten-pr-color", "#8E05C2");
    } else if (theme === "orange") {
      document.documentElement.style.setProperty("--sixty-pr-color", "#454545");
      document.documentElement.style.setProperty(
        "--thirty-pr-color",
        "#FFA559"
      );
      document.documentElement.style.setProperty("--ten-pr-color", "#FF6000");
    } else if (theme === "purple") {
      document.documentElement.style.setProperty("--sixty-pr-color", "#810CA8");
      document.documentElement.style.setProperty(
        "--thirty-pr-color",
        "#FFFFD0"
      );
      document.documentElement.style.setProperty("--ten-pr-color", "#C147E9");
    } else {
      document.documentElement.style.setProperty("--sixty-pr-color", "#11009E");
      document.documentElement.style.setProperty(
        "--thirty-pr-color",
        "#F1F6F9"
      );
      document.documentElement.style.setProperty("--ten-pr-color", "#97DEFF");
    }
  }, [theme]);

  return (
    <>
      {/* <div className="theme-container">
        <div className="theme-buttons">
          <div className="button-container">
            <button onClick={() => setTheme("light")}>Light</button>
            <button onClick={() => setTheme("black")}>Black</button>
            <button onClick={() => setTheme("orange")}>Orange</button>
            <button onClick={() => setTheme("purple")}>Purple</button>
            <button onClick={() => setTheme("blue")}>Blue</button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ThemeProvider;
