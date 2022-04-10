import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksOneRef = useRef(null);
  const linksTwoRef = useRef(null);
  const linksThreeRef = useRef(null);
  // const hamburgerRef = useRef(null);

  const navScroll = () => {
    if (window.scrollY > 10) {
      navRef.current.classList.add("navscroll");
      logoRef.current.src = "images\\logo-rev2.svg";
      linksOneRef.current.classList.add("links-color");
      linksTwoRef.current.classList.add("links-color");
      linksThreeRef.current.classList.add("links-color");
    } else if (window.scrollY < 10) {
      navRef.current.classList.remove("navscroll");
      linksOneRef.current.classList.remove("links-color");
      linksTwoRef.current.classList.remove("links-color");
      linksThreeRef.current.classList.remove("links-color");
      logoRef.current.src = "images\\logo-rev.svg";
    }
  };

  // const removeMenu = () => {
  //   hamburgerRef.current.classList.add("nav-res-hide");
  // };

  // const menuToggler = () => {
  //   hamburgerRef.current.classList.toggle("nav-res-hide");
  // };

  // const checkWindowSize = () => {
  //   if (window.innerWidth > 920) {
  //     hamburgerRef.current.classList.add("nav-res-hide");
  //   }
  // };

  useEffect(() => {
    window.addEventListener("scroll", navScroll);
    // window.addEventListener("resize", checkWindowSize);
    // document
    //   .querySelector(".hamburger-menu")
    //   .addEventListener("click", menuToggler);
    return () => {
      window.removeEventListener("scroll", navScroll);
      // window.removeEventListener("resize", checkWindowSize);
      // document
      //   .querySelector(".hamburger-menu")
      //   .removeEventListener("click", menuToggler);
    };
  });

  return (
    <>
      <nav className="navbar-component" ref={navRef}>
        <div className="flex-nav">
          <div className="left-nav">
            <Link to="/">
              <img
                src="\images\logo-rev.svg"
                alt="Astronomer.io Logo"
                className="logo-main"
                ref={logoRef}
              />
            </Link>
            <Link to="/product" className="nav-link" ref={linksOneRef}>
              PRODUCT
            </Link>
            <NavLink to="/resources" className="nav-link" ref={linksTwoRef}>
              RESOURCES
            </NavLink>
            <NavLink to="/company" className="nav-link" ref={linksThreeRef}>
              COMPANY
            </NavLink>
          </div>
          <div className="right-nav">
            <Link to="/get-started" className="get-started-btn">
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;