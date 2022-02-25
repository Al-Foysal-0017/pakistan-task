import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import "./NavAndSidebar.css";
import { navRoutes, navRoutesRight } from "./NavLinks";
import logo from "../../assets/images/logo.jpg";
import { useSelector, useDispatch } from "react-redux";

const MobileNav = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { user } = useSelector((state) => state.auth);
  // console.log("USER:>", user);
  // const dispatch = useDispatch();

  return (
    <header className="navbarAndSidebar">
      {/* NAVBAR PART */}
      <nav className="navbarContainer">
        <div className="navbarContainerWrapper">
          {/* LEFT NAVBAR */}
          <div className="navbarContainerLeft">
            <div className="navbarContainerHamburger">
              <Hamburger
                toggle={setOpenSidebar}
                toggled={openSidebar}
                color="#000"
              />
            </div>
            <div className="navbarContainerLogo">
              <span className="">
                <Link to="/">
                  <img
                    src={logo}
                    alt="logo"
                    style={{
                      height: "60px",
                      borderRadius: "16px",
                      border: "1px solid #000",
                    }}
                  />
                </Link>
              </span>
            </div>
          </div>
          {/* RIGHT NAVBAR */}
          <div className="navbarContainerRightItems">
            {navRoutesRight.map((item) => (
              <div key={item.name} className="navbarContainerRightItem">
                <NavLink
                  className="link"
                  activeClassName="activeClassNameOfSidebar"
                  exact
                  to={item.route}
                >
                  {item.name}
                </NavLink>
              </div>
            ))}

            {user && user?.name}
          </div>
        </div>
      </nav>
      {/* SIDEBAR PART */}
      <div
        className={`
                ${
                  openSidebar ? "translateForSidebar" : "translateForSidebarNeg"
                }
                setSidebarForToggle transform transition-all duration-300`}
      >
        <button
          className="SidebarToggleBtn"
          onClick={() => setOpenSidebar(false)}
        >
          X
        </button>
        <ul className="SidebarItems">
          {navRoutes.map((item) => (
            <li key={item.name} className="SidebarItem">
              <NavLink
                className="link"
                activeClassName="activeClassNameOfSidebar"
                exact
                to={item.route}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <h2 className="">Our categories</h2>
        <ul className="SidebarItems">
          {navRoutesRight.map((item) => (
            <li key={item.name} className="SidebarItem">
              <NavLink
                className="link"
                activeClassName="activeClassNameOfSidebar"
                exact
                to={item.route}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default MobileNav;
