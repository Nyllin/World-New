import React from "react";
import "../styles/Home.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { NavLink } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Home = () => {
  return (
    <div id="home" className="home-container d-lg-flex">
      <div className="home-one py-5">
        <div className="home-one-content m-auto py-md-5 py-sm-5 px-sm-2">
          <h3>WORLD NEWS </h3>
          <div className="line mt-3"> </div>
          <h4 className="mt-3"> Amazing places in America to visit. </h4>
          <p>
            For some reason - this country, this city, this neighborhood, this
            particular street - is the place you are living a majority of your
            life in .
          </p>
          <NavLink className="btn btn-primary home-btn mt-3">
            LEARN MORE
          </NavLink>
        </div>
      </div>
      <div className="home-two py-5">
        <div className="home-two-content m-auto py-5 py-md-5 py-sm-5">
          <div className="home-two-header d-flex justify-content-between">
            <h4> MORE NEWS </h4>
            <div className="home-two-icon ">
              <span className="btn">
                <KeyboardArrowLeftIcon />
              </span>
              <span className="btn">
                <KeyboardArrowRightIcon />
              </span>
            </div>
          </div>
          <div className="line-two my-4"></div>
          <div className="home-two-article mb-4">
            <h5>TRAVEL</h5>
            <h6>Article title</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting...
            </p>
            <span className="fst-italic">
              <AccessTimeIcon /> 2 min ago
            </span>
          </div>
          <div className="home-two-article">
            <h5>TECHNOLOGY</h5>
            <h6>Article title</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting...
            </p>
            <span className="fst-italic">
              <AccessTimeIcon /> 2 min ago
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
