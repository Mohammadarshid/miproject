/* eslint-disable no-undef */
import React from "react";
import Layout from "../Components/Layout/Layout";
import { Link } from "react-router-dom";
// import { Banner } from "../images/banner.jpeg";
import Banner from "../Components/images/banner.jpeg";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headercontainer">
          <h1> football website</h1>
          <p> best bootball in india</p>
          <Link to="/menu">
            <button>order now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
