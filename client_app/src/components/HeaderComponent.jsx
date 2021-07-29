import React from "react";

const Header = ({ filterUponSearch, isEmptyList }) => {
  return (
    <header>
      <div className="header-logo">
        <a href="/">
          <img src="/assets/images/logo.svg" className="logo" alt="logo" />
        </a>
      </div>{!isEmptyList && (
      <div className="header-search">
        
          <input
            type="search"
            onChange={(e) => filterUponSearch(e.target.value)}
          />
        
      </div>)}
      <div className="header-profile">
        <button className="link">
          <img
            src="/assets/images/person.svg"
            className="profile"
            alt="profile"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
