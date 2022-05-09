import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <span className="logo">
        <a href="/">Discover</a>
      </span>
      <span className="navigation">
        <a href="/popular">Popular</a>
        <a href="/">Trend</a>
        <a href="/newest">Newest</a>
        <a href="/toprated">Top Rated</a>
        <a href="/search">Search</a>
        <a href="/filter">Filter</a>
      </span>
    </div>
  );
};

export default Header;
