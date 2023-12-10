import React from "react";
import profile from "../assets/profile.svg";

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center p-2">
      <img alt="user" className="h-8" src={profile} />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
