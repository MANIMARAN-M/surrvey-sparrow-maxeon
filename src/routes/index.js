import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "../components/navBar";
import ChatBox from "../components/chatBox";
import HeroSection from "../pages/homePage";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <ChatBox />
      <Switch>
        <Route exact path="/" component={HeroSection} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
