import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const location = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div id="divHeader">
      <nav className="navigation">
        <h1 className='headColor sidepadding'>Hair with Flair</h1>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>
          <FontAwesomeIcon icon={faHamburger} />
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <div
            className="navigation-menu">
            <ul>
              <CustomLink to="/Home" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}>Home</CustomLink>
              <CustomLink to="/Service" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}>Services</CustomLink>
              <CustomLink to="/Appointments" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}>Appointments</CustomLink>
            </ul>
          </div>
        </div>

      </nav>
      <div id="brdCrumb" className='sidepadding'>
        <Link to="/Home" className={!location.pathname.startsWith("/Home") ? "breadcrumb-not-active" : "breadcrumb-hide"}>Home</Link>
        <span className={location.pathname === "/Service" ? "breadcrumb-arrow" : "breadcrumb-arrow-hide"}>&gt;</span>
        <Link to="/Service" className={location.pathname === "/Service" ? "breadcrumb-active" : "breadcrumb-hide"}>Services</Link>
        <span className={location.pathname === "/Appointments" ? "breadcrumb-arrow" : "breadcrumb-arrow-hide"}>&gt;</span>
        <Link to="/Appointments" className={location.pathname === "/Appointments" ? "breadcrumb-active" : "breadcrumb-hide"}>Appointments</Link>
      </div>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

