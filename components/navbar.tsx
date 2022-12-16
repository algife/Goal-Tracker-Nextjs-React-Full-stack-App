import Link from "next/link";
import appConfig from "../app.config";
import NavLink from "../models/nav-link";
import styles from "../styles/Nav.module.scss";

// --------------------

export default function Navbar() {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.nav_header}>
          <div className={styles.nav_title}>Goal Tracker</div>
        </div>

        <div className={styles.nav_links}>
          {appConfig.navLinks.map((link: NavLink, idx: number) => {
            if (link.isExternal)
              return (
                <a
                  key={`navlink_${idx}`}
                  className="nav_link"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.text}
                </a>
              );
            else
              return (
                <Link key={`navlink_${idx}`} href={link.href}>
                  {link.text}
                </Link>
              );
          })}
        </div>
      </div>
    </>
  );
}
