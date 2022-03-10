import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import "./NavAndSidebar.css";
import { navRoutes, navRoutesRight } from "./NavLinks";
import logo from "../../assets/images/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../../store/types";
import Container from "../container/index";

const MobileNav = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { user } = useSelector((state) => state.auth);

  console.log("USER:>", user);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("myToken");
    dispatch({ type: LOGOUT });
  };

  return (
    <header className="navbarAndSidebar">
      {/* NAVBAR PART */}
      <Container className="navbarContainer">
        <div className="navbarContainerWrapper">
          {/* LEFT NAVBAR */}
          <div className="navbarContainerLeft">
            <div
              style={{ marginRight: "8px" }}
              className="navbarContainerHamburger"
            >
              <Hamburger
                toggle={setOpenSidebar}
                toggled={openSidebar}
                color="#6C63FF"
              />
            </div>
            <div className="navbarContainerLogo">
              <span className="">
                <Link to="/">
                  <img
                    src={logo}
                    alt="logo"
                    style={{
                      height: "50px",
                      // borderRadius: "16px",
                    }}
                  />
                </Link>
              </span>
            </div>
          </div>
          {/* RIGHT NAVBAR */}
          <div className="navbarContainerRightItems">
            {user.admin && (
              <NavLink
                className="link adminBtn"
                activeClassName="activeClassNameOfSidebar"
                exact
                to="/admin-dashboard"
              >
                Admin
              </NavLink>
            )}
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
            {user && <div className="nav-username">Hi, {user?.name}</div>}
            {user ? (
              <button className="logoutBtn" onClick={logout}>
                Logout
              </button>
            ) : (
              <>
                <NavLink
                  className="link signBtn"
                  activeClassName="activeClassNameOfSidebar"
                  exact
                  to="/login"
                >
                  Sign in
                </NavLink>
                {/* <NavLink
                  className="link signBtn"
                  activeClassName="activeClassNameOfSidebar"
                  exact
                  to="/register"
                >
                  Sign up
                </NavLink> */}
              </>
            )}
          </div>
        </div>
      </Container>
      {/* SIDEBAR PART */}
      <div
        className={`
                ${
                  openSidebar ? "translateForSidebar" : "translateForSidebarNeg"
                }
                setSidebarForToggle transform transition-all duration-300`}
      >
        {/* <button
          className="SidebarToggleBtn"
          onClick={() => setOpenSidebar(false)}
        ></button> */}
        <Hamburger
          toggle={setOpenSidebar}
          toggled={openSidebar}
          color="#6C63FF"
        />
        <div style={{ marginTop: "3rem" }} />
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{
              height: "80px",
              // borderRadius: "16px",
              marginBottom: "2rem",
            }}
            onClick={() => setOpenSidebar(false)}
          />
        </Link>
        <ul className="SidebarItems">
          {navRoutes.map((item) => (
            <li key={item.name} className="SidebarItem">
              <NavLink
                className="link"
                activeClassName="activeClassNameOfSidebar"
                exact
                to={item.route}
                onClick={() => setOpenSidebar(false)}
              >
                <div style={{ margin: "8px 0" }}>{item.name}</div>
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="SidebarItems">
          {user.admin && (
            <NavLink
              className="link adminBtn"
              activeClassName="activeClassNameOfSidebar"
              exact
              to="/admin-dashboard"
              onClick={() => setOpenSidebar(false)}
            >
              Admin
            </NavLink>
          )}
          {navRoutesRight.map((item) => (
            <li key={item.name} className="SidebarItem">
              <NavLink
                className="link"
                activeClassName="activeClassNameOfSidebar"
                exact
                to={item.route}
                onClick={() => setOpenSidebar(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          {user ? (
            <button
              style={{
                background: "#fff",
                border: "1px solid tomato",
                color: "tomato",
                padding: "5px",
                fontWeight: "bold",
                marginTop: "2rem",
                marginBottom: "5rem",
                borderRadius: "5px",
              }}
              className=""
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink
                className="link"
                activeClassName="activeClassNameOfSidebar"
                exact
                to="/login"
                onClick={() => setOpenSidebar(false)}
              >
                Sign in
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default MobileNav;
