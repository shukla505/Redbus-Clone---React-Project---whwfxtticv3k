import "./mainPage.css";
import React, { useRef, useState } from "react";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { Outlet } from "react-router-dom";

const MainPage = (props) => {
  const [searchQuery, setSearchQuery] = useState({
    source: "",
    destination: "",
  });
  const src = useRef(null);
  const dest = useRef(null);
  const handleChange = (e) => {
    setSearchQuery({
      ...searchQuery,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (src.current.value !== "" && dest.current.value !== "") {
      props.changeHandler({ src: src.current.value, dest: dest.current.value });
    }
  };
  const switchHandler = () => {
      setSearchQuery({
        source: dest.current.value,
        destination: src.current.value,
      }); 
  };
  return (
    
    <div className="mainpage">
      <div className="user-Form-Section">
        <form className="search">
          <div className="input-div src">
          <label htmlFor="source">From</label><br />
            <input
              type="text"
              name="source"
              value={searchQuery.source}
              onChange={handleChange}
              ref={src} 
              />
          </div>
          <div className="button-div">
            <button onClick={switchHandler} className="switch">
              <HiOutlineSwitchHorizontal />
            </button>
          </div>
          <div className="input-div dest">
            <label htmlFor="destination">To</label><br />
            <input
              type="text"
              name="destination"
              value={searchQuery.destination}
              onChange={handleChange}
              ref={dest}
            />
          </div>
          <div className="input-div date">
            <label htmlFor="date">Date</label><br />
            <input type="date" onChange={(e) => e.target.value} required/>
          </div>
          <div className="button-div">
          <button type="button" className="search-btn" onClick={handleSubmit}>
            Search
          </button>
          </div>
        </form>
      </div>
      <Outlet />
      </div>
    
  );
};

export { MainPage };
