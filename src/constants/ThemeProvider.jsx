import React, { useState, useEffect } from "react";

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
      document.documentElement.style.setProperty(
        "--thirty-pr-color",
        "#3E065F"
      );
      document.documentElement.style.setProperty("--ten-pr-color", "#8E05C2");
    } else if (theme === "orange") {
      document.documentElement.style.setProperty("--sixty-pr-color", "#454545");
      document.documentElement.style.setProperty(
        "--thirty-pr-color",
        "#FFA559"
      );
      document.documentElement.style.setProperty("--ten-pr-color", "#FF6000");
    } else if (theme === "purple") {
      document.documentElement.style.setProperty("--sixty-pr-color", "#645CBB");
      document.documentElement.style.setProperty(
        "--thirty-pr-color",
        "#BFACE2"
      );
      document.documentElement.style.setProperty("--ten-pr-color", "#EBC7E6");
    } else {
      document.documentElement.style.setProperty("--sixty-pr-color", "#C9EEFF");
      document.documentElement.style.setProperty(
        "--thirty-pr-color",
        "#62CDFF"
      );
      document.documentElement.style.setProperty("--ten-pr-color", "#97DEFF");
    }
  }, [theme]);

  return (
    <>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("black")}>Black</button>
      <button onClick={() => setTheme("orange")}>Orange</button>
      <button onClick={() => setTheme("purple")}>Purple</button>
      <button onClick={() => setTheme("blue")}>Blue</button>
    </>
  );
};

export default ThemeProvider;
