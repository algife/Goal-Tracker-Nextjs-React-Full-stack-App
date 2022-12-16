import Link from "next/link";
import appConfig from "../app.config";

// --------------------

export default function Footer() {
  return (
    <footer className="footer">
      <p>Made with ❤️ using Next.js, React, TypeScript and Sass</p>

      <p className="footer copyright">
        <span>
          Copyright &copy; 2022 -&nbsp;
          <Link className="link" href={appConfig.authorLinkedIn}>
            {appConfig.authorFullName}
          </Link>
          . All rights reserved.
        </span>
        &nbsp;
        <span>
          <Link className="link" href="/About">
            About
          </Link>
        </span>
      </p>
    </footer>
  );
}
