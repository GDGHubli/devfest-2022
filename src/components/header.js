import React from "react";
import "./header.css";
import devfest from "../images/devfest.jpg"
import gdgLogo from "../images/gdgHubli.png"
import womenTech from "../images/womenTechmakers.png"
const Header = () => {
    {
        return (
            <>
                <div className="header">
                    <img className="devfest" src={devfest} alt="google" />
                    <img className="gdgLogo" src={gdgLogo} alt="google" />
                    <img className="womenTech" src={womenTech} alt="google" />
                </div>
            </>
        )
    }

}
export default Header;