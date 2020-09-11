import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const NavBar = () => {
  return (
    <nav class="nav-wrapper grey darken-3">
      <div class="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <SignedInLinks/>
        <SignedOutLinks/>
      </div>
    </nav>
  );
};

export default NavBar;
