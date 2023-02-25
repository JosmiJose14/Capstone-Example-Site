import React ,{ useState }  from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
export default function Navbar(){
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <div id="divHeader">
        <h1>Hair with Flair</h1>
        <nav className="navigation">
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
            <CustomLink to="/Home">Home</CustomLink>
            <CustomLink to="/Service">Services</CustomLink>
            <CustomLink to="/Appointments">Appointments</CustomLink>
            </ul>
          </div>
        </div>
      </nav>
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
    
