import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import appConfig from "../app.config";
import { GoBackLink } from "../components";
import Layout from "../components/layout";

// ----------------------

export default function About() {
  const title: string = "About";

  return (
    <Layout title={title}>
      <section className="about page-content">
        <p>App Version: 0.1.0</p>
        <br />

        <h1>This is a demo project made with</h1>
        <ul>
          <li>Next.js (v13)</li>
          <li>React.js</li>
          <li>TypeScript</li>
          <li>Sass</li>
          <li>Other libraries</li>
        </ul>
        <br />
        <p>
          <span>Author: {appConfig.authorFullName}</span>
          &nbsp;
          <Link className="link" href={appConfig.authorLinkedIn}>
            <FaLinkedin />
          </Link>
        </p>
        <GoBackLink />
      </section>
    </Layout>
  );
}
