import React, { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import { Link, Outlet, useLocation ,useNavigate} from "react-router-dom";
import "../styles/home.css";
import { useDispatch } from "react-redux";
import { updateCurrentPage, } from "../redux/action/variableAction";
import { updateProfileData } from "../redux/action/dataAction";

const Home = () => {

   const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    dispatch(updateCurrentPage(1));
  },[location.pathname])

  useEffect(() => {
    dispatch(updateProfileData(""));
    navigate("/character");
  },[]);

  return (
    <>
      <div className="home-canvas">
        <SearchBar  />

        <div className="home-category-sec">
          <Link to="/character" className="links">
            <h3
              style={{
                color: location.pathname === "/character" ? "blue" : "black",
                borderBottom:location.pathname === "/character" ? "2px solid orange" : "none",
                fontSize:location.pathname === "/character" ? "1.4rem" : "1.1rem"
              }}
            >
              Character
            </h3>
          </Link>
          <Link to="/location" className="links">
            <h3
              style={{
                color: location.pathname === "/location" ? "blue" : "black",
                borderBottom:location.pathname === "/location" ? "2px solid orange" : "none",
                fontSize:location.pathname === "/location" ? "1.4rem" : "1.1rem"
              }}
            >
              Location
            </h3>
          </Link>
          <Link to="/episode" className="links">
            <h3
              style={{
                color: location.pathname === "/episode" ? "blue" : "black",
                borderBottom:location.pathname === "/episode" ? "2px solid orange" : "none",
                fontSize:location.pathname === "/episode" ? "1.4rem" : "1.1rem"
              }}
            >
              Episodes
            </h3>
          </Link>
        </div>
       
        <Outlet />
        
            
        

        <Pagination />
      </div>
    </>
  );
};

export default Home;
