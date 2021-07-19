import React from "react";
import ImageComponent from "./ImageComponent";

const Header = () => {
    return(
        <header>
        <div className="header-logo">
          <a href="/">
            <ImageComponent imageSrc="assets/images/logo.svg" imageClassName="logo" imageAlt="logo"/>
          </a>
        </div>
        <div className="header-search">
          <input type="search" />
        </div>
        <div className="header-profile">
          <button className="link">
            <ImageComponent imageSrc="assets/images/person.svg" imageClassName="profile" imageAlt="profile"/>
          </button>
        </div>
      </header>
    );
}

export default Header;