import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "Gaming",
    "Podcast",
    "Vlogs",
    "Trailers",
    "Mixes",
    "Bodybuilding",
    "Motivation",
    "Mixes",
    "News",
    "Sports",
  ];
  return (
    <div className="flex justify-center">
      {list.map((listItem,index) =>(<Button key={index} name={listItem}/>))}
    </div>
  );
};

export default ButtonList;
