import { NextRouter, useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Button from "./button";

// --------------------

interface Props {
  title: string;
  isAddGoalFormDisplayed?: boolean;
  setIsAddGoalFormDisplayed?: Dispatch<SetStateAction<boolean>>;
}

// ---------------------

export default function Header({
  title,
  isAddGoalFormDisplayed = false,
  setIsAddGoalFormDisplayed,
}: Props) {
  const router: NextRouter = useRouter();
  const showAddGoalButton: boolean = !!(
    router.pathname === "/goals" && setIsAddGoalFormDisplayed
  );

  const handleAddGoalFormClick = (e: any) => {
    if (!!setIsAddGoalFormDisplayed)
      setIsAddGoalFormDisplayed(!isAddGoalFormDisplayed);
  };

  return (
    <header className="header">
      {showAddGoalButton && (
        <Button
          className="add_goal_button"
          onClick={handleAddGoalFormClick}
          bgColor={!isAddGoalFormDisplayed ? "#00c853" : "#004d40"}
          text={!isAddGoalFormDisplayed ? `Add Goal` : `Hide Form`}
          suffixIcon={
            !isAddGoalFormDisplayed ? <FaChevronDown /> : <FaChevronUp />
          }
        />
      )}

      <h1 className="header_title">{title}</h1>

      {/*     
              inline css script comment 
      // !    FOR DEMO PURPOSES ONLY
      */}
      {/* <style jsx>
        {`
          .header_title {
            color: ${headerMode === 1 ? "navy" : "red"};
          }
        `}
      </style> */}
    </header>
  );
}
