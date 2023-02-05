import React, { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { Route, Routes, Link } from "react-router-dom";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { ThemeContext, ThemeContextProps, Theme } from "./theme/ThemeContext";
import "./styles/index.scss";
import classes from "./App.module.scss";
import { classNames } from "./helpers/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(
    classNames("app", { selectable: true, hovered: false }, ["dark"])
  );

  return (
    <div className={classNames("app", {}, ["dark"])}>
      <button onClick={toggleTheme}>toggle theme</button>

      <Link to="/main">Main page</Link>
      <Link to="/about">About page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/main" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
      <p>sdsdsd</p>
    </div>
  );
};

export default App;
