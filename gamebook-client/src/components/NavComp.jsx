import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import { NavLink as Navlnk } from "react-router-dom";
import { useSelector } from "react-redux";

const NavComp = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const user = useSelector(state => state.user);

  const path = `/profile/${user.username}`;

  const logout = () => {
    sessionStorage.removeItem("Authorization");
    sessionStorage.clear();
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Navlnk} exact to="/dashboard">
          Gamebook
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Navlnk} exact to={path}>
                Profile
              </NavLink>
            </NavItem>
          </Nav>
          <Button tag={Navlnk} exact to="/" color="danger" onClick={logout}>
            Log Out
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavComp;
