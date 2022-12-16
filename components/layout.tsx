import Head from "next/head";
import { Dispatch, SetStateAction } from "react";
import { Goal } from "../models";
import AddGoalForm from "./add-goal-form";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

// ---------------------

interface Props {
  title: string;
  description?: string;
  keywords?: string;
  children?: React.ReactElement | React.ReactElement[];
  isAddGoalFormDisplayed?: boolean;
  setIsAddGoalFormDisplayed?: Dispatch<SetStateAction<boolean>>;
  handleAddGoal?: (goal: Goal) => Promise<void>;
}

// ---------------------

export default function Layout({
  title,
  description,
  keywords,
  children = [],
  isAddGoalFormDisplayed = false,
  setIsAddGoalFormDisplayed,
  handleAddGoal,
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

        <Header
          title={title}
          isAddGoalFormDisplayed={isAddGoalFormDisplayed}
          setIsAddGoalFormDisplayed={setIsAddGoalFormDisplayed}
        />

        <main className="main">
          {isAddGoalFormDisplayed && !!handleAddGoal && (
            <AddGoalForm handleSaveGoal={handleAddGoal} />
          )}
          {children}
        </main>
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
