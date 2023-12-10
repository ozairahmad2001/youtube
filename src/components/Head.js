import React, { useEffect, useState } from "react";
import profile from "../assets/profile.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/config";
import searchIcon from "../assets/icons8-search.svg";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between  p-3 mb-2 shadow-md">
      <div className="flex">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 cursor-pointer"
          alt="hamburger-menu"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
        />
        <a href="/">
          <img
            className="h-6 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          />
        </a>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex">
          <input
            className="w-[37rem] border border-gray-400 rounded-l-full p-1"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border w-11 border-gray-400 rounded-r-full p-1 ">
            <img className="w-6" alt="search-icon" src={searchIcon} />
          </button>
        </div>

        {showSuggestions && (
          <div className="fixed bg-white px-5 w-[36.5rem] shadow-lg rounded-lg border-gray-100">
            <ul>
              {searchSuggestions.map((suggestion) => (
                <li key={suggestion}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img className="h-6" alt="profile-icon" src={profile} />
      </div>
    </div>
  );
};

export default Head;
