import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  logo,
  navbar,
} from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <nav className={navbar}>
        <div className={logo}>
          <Link to="/">MA.</Link>
        </div>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>

          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>

          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      
    </div>
  );
};

export default Layout;
