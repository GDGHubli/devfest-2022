import React from "react";
import "./home.css"
import devfest from "../images/devfest.jpg"
import gdgLogo from "../images/gdgHubli.png"
import womenTech from "../images/womenTechmakers.png"
import Companydata from "../data/companyData";

import Companies from "../components/Companies";
const Home = () => {
    {
            return (
                <>
                    <div className="header">
                        <img className="devfest" src={devfest} alt="google" />
                        <img className="gdgLogo" src={gdgLogo} alt="google" />
                        <img className="womenTech" src={womenTech} alt="google" />
                    </div>
                    <div className="wrapper">
                        <h1 className="pb-3 title">DevFest Hubli 2022 - Job board</h1>
                        <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <h2>Companies</h2>
                        <Companies />
                    </div>



                </>
            );
        }
};

export default Home;