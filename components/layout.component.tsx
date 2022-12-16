import Head from "next/head";
import Footer from "./footer.component";
import Header from "./header.component";
import Navbar from "./navbar.component";

// ---------------------

interface Props {
  title: string;
  description?: string;
  keywords?: string;
  children?: React.ReactElement | React.ReactElement[];
  showHeader?: boolean;
}

// ---------------------

export default function Layout({
  title,
  description,
  keywords,
  children = [],
  showHeader = true,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <div className="container">
        <Navbar />
        {showHeader && <Header title={title} />}
        <main className="main">{children}</main>
        <Footer />
      </div>
    </>
  );
}

Layout.defaultProps = {
  title: "Goal Tracker - Next App",
  description:
    "Generated using create next app and migrated manually to typescript",
  keywords: "next.js, goals, tracker, typescript, react, javascript, sass",
};
