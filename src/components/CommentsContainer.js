import React from "react";
import profile from "../assets/profile.svg";
const commentsData = [
  {
    name: "Ozair Ahmad",
    text: "lorem ipsum dolor sit amet, consectetur",
    replies: [
      {
        name: "Ozair Ahmad",
        text: "lorem ipsum dolor sit amet, consectetur",
        replies: [
          {
            name: "Ozair Ahmad",
            text: "lorem ipsum dolor sit amet, consectetur",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ozair Ahmad",
    text: "lorem ipsum dolor sit amet, consectetur",
    replies: [
      {
        name: "Ozair Ahmad",
        text: "lorem ipsum dolor sit amet, consectetur",
        replies: [],
      },
    ],
  },
  {
    name: "Ozair Ahmad",
    text: "lorem ipsum dolor sit amet, consectetur",
    replies: [
      {
        name: "Ozair Ahmad",
        text: "lorem ipsum dolor sit amet, consectetur",
        replies: [
          {
            name: "Ozair Ahmad",
            text: "lorem ipsum dolor sit amet, consectetur",
            replies: [
              {
                name: "Ozair Ahmad",
                text: "lorem ipsum dolor sit amet, consectetur",
                replies: [
                  {
                    name: "Ozair Ahmad",
                    text: "lorem ipsum dolor sit amet, consectetur",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ozair Ahmad",
    text: "lorem ipsum dolor sit amet, consectetur",
    replies: [],
  },
  {
    name: "Ozair Ahmad",
    text: "lorem ipsum dolor sit amet, consectetur",
    replies: [],
  },
  {
    name: "Ozair Ahmad",
    text: "lorem ipsum dolor sit amet, consectetur",
    replies: [],
  },
  {
    name: "Ozair Ahmad",
    text: "lorem ipsum dolor sit amet, consectetur",
    replies: [
      {
        name: "Ozair Ahmad",
        text: "lorem ipsum dolor sit amet, consectetur",
        replies: [],
      },
    ],
  },
  {
    name: "Ozair Ahmad",
    text: "lorem ipsum dolor sit amet, consectetur",
    replies: [
      {
        name: "Ozair Ahmad",
        text: "lorem ipsum dolor sit amet, consectetur",
        replies: [
          {
            name: "Ozair Ahmad",
            text: "lorem ipsum dolor sit amet, consectetur",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ozair Ahmad",
    text: "lorem ipsum dolor sit amet, consectetur",
    replies: [],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 rounded-lg my-2">
      <img className="w-8" alt="user" src={profile} />
      <div className="px-3">
        <p className="font-bold text-xl">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments = {comment.replies} />
      </div>
    </div>
  )); //dont use indexes as keys
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <div className="font-bold text-2xl">Comments:</div>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
//homework -> show the search results when you click on anyone of the search suggestions.