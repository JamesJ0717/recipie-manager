import React from "react";
import { Navbar as Navvy, NavbarBrand, Button } from "reactstrap";

export default function Navbar({ setRecipie }) {
  return (
    <Navvy dark color="dark">
      <NavbarBrand href="/">Recipies</NavbarBrand>
      <Button className="my-2" onClick={() => setRecipie({})}>
        New Recipie
      </Button>
    </Navvy>
  );
}
