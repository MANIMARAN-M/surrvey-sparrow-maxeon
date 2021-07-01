import React, { useState, useEffect } from "react";
import SparrowBird from "../../assets/homePage/Sparrow_Bird.png";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import Channel from "./channel";

const ChatBox = () => {
  const [ChatActive, setChatActive] = useState(false);
  const [isNewConversation, setIsNewConversation] = useState(false);
  const ChatActiveHandler = () => {
    setChatActive(!ChatActive);
  };
  const isNewConversationHandler = () => {
    setIsNewConversation(!isNewConversation);
  };
  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <section className="ChatBoxSection">
      <div
        className="ChatBoxIcon"
        onClick={ChatActiveHandler}
        id={ChatActive ? "active" : ""}
      >
        <img src={SparrowBird} alt="" />
        <div className="ChatBoxCloseIcon">
          <CloseRoundedIcon />
        </div>
      </div>
      <div className="ChatBoxMain" id={ChatActive ? "active" : ""}>
        <div className="ChatBoxMainTop">
          <div className="ChatBoxMainIntro">
            <div className="p-m">Hi There</div>
            <div className="small-m">
              {isNewConversation
                ? "The team typically replies in a few minuts."
                : "Hello Ask Us Anything, Share Your Feedback."}
            </div>
          </div>
          {isNewConversation ? (
            <Channel />
          ) : (
            <div className="ChatBoxMainConversation">
              <div className="h1-m">Start a Conversation</div>
              <div className="small-m">
                The team typically replies in a few minuts.
              </div>
              <div
                className="ChatBoxMainConversationBtn"
                onClick={isNewConversationHandler}
              >
                <div className="small-m">New Conversation</div>
                <SendRoundedIcon />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ChatBox;
