import React, { useState } from "react";
import Logo from "../../assets/homePage/sparrow_favicon.png";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import ArrowLeftRoundedIcon from "@material-ui/icons/ArrowLeftRounded";

const Channel = () => {
  const [UserInputMessage, setUserInputMessage] = useState([]);
  const UserInputHandler = (e) => {
    e.preventDefault();
    const { userInput } = e.target.elements;
    console.log("userInput", userInput.value);
    const Message = { text: userInput.value };
    console.log("Message", Message);
    setUserInputMessage([...UserInputMessage, Message]);
    e.target.reset();
  };

  return (
    <div className="ChatBoxMainChannel">
      <div className="ChatBoxMainChannelReply">
        <div className="ChatBoxMainChannelReplyMain">
          <div className="ChatBoxMainChannelReplyRight">
            <div className="small-m">
              Is there any offline versions available for Maxeon Player?
              <span>
                <ArrowLeftRoundedIcon />
              </span>
            </div>
          </div>
          <div className="ChatBoxMainChannelReplyLeft">
            <div className="d-flex">
              <div>
                <div className="ChatBoxMainChannelReplyLeftProfile"></div>
              </div>
              <div>
                <div className="small-m">
                  Currently we don't have but we will launch soon.
                  <span>
                    <ArrowLeftRoundedIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {UserInputMessage.length > 0 &&
            UserInputMessage.map((data) => {
              return (
                <div className="ChatBoxMainChannelReplyRight">
                  <div className="small-m">
                    {data.text}
                    <span>
                      <ArrowLeftRoundedIcon />
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="ChatBoxMainChannelLogo">
        <img src={Logo} alt="" />
        <span className="small-m">we run on surveysparrow</span>
      </div>
      <hr className="ChatHr" />
      <div className="ChatBoxMainChannelMessage">
        <div className="ChatBoxMainChannelMessageInput">
          <form onSubmit={(e) => UserInputHandler(e)}>
            <input
              type="text"
              placeholder="Write a reply..."
              id="userInput"
              required
            />
            <button type="submit">
              <SendRoundedIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Channel;
