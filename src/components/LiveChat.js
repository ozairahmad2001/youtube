import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, makeRandomMessages } from "../utils/helper";
import { computeHeadingLevel } from "@testing-library/react";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");
  useEffect(() => {
    const i = setInterval(() => {
      //api polling

      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeRandomMessages(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("ON form submit", liveMessage);
          dispatch(
            addMessage({
              name: "Ozair Ahmad",
              message: liveMessage,
            })
          );
          setLiveMessage("")
        }}>
        <input
          className="px-2 w-10/12"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}></input>
        <button className="px-4 mx-4 w-12% rounded-lg bg-green-200">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
