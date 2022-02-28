import React from 'react';
import CompanyCard from './CompanyCard';
import Navbar from "./Navbar";

const infStyle = {
    backgroundImage : "linear-gradient(to right bottom, #6b7ed1, #6f86d6, #738eda, #7896de, #7e9ee2, #7a9ce6, #779beb, #7399ef, #688df4, #6081f8, #5d73fa, #5f64fb)",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center"
}

function INF(props) {
  return (
    <>
    <Navbar />
    <div style={infStyle}>
        <h1>{props.name}</h1>
        <CompanyCard name="Google" />
        <CompanyCard name="Amazon" />
        <CompanyCard name="Apple" />
        <CompanyCard name="Samsung" />
        <CompanyCard name="Microsoft" />
        <CompanyCard name="Netflix" />
        <CompanyCard name="Facebook" />
    </div>
    </>
  )
}

export default INF;