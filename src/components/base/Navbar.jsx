import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./style.css";
import {
  discover,
  FikirKutuphanesiTitle,
  manifestoNav,
  manifestoTitle,
  maxBlogTitle,
} from "../../constants";

function NavMenu() {
  return (
    <>
      <div className="navMenu">
        <Nav.Link href="/">{manifestoNav}</Nav.Link>
        <Nav.Link href="kesfet">{discover}</Nav.Link>
        <img
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/fe961ef6167644598d2c609f38dc02ed?v=7761b041"
          className="logo"
          alt="Max ile Ileri Donusum Logo"
        />
        <Nav.Link href="fikir-kutuphanesi">{FikirKutuphanesiTitle}</Nav.Link>
        <Nav.Link href="max-blog">{maxBlogTitle}</Nav.Link>
      </div>
    </>
  );
}

export default NavMenu;
