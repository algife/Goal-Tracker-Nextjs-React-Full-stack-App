import moment from "moment";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Goal from "../models/goal";
import { DatesService } from "../services";
import ToggleSwitch from "./toggle-switch";

// ------------------------------------------

interface Props {
  goal: Goal;
  handleDelete: (goalId: number) => void;
  handleReminderToggle: (goal: Goal) => void;
}
// ------------------------------------------

export default function GoalCard({
  goal,
  handleDelete,
  handleReminderToggle,
}: Props) {
  const daysLeft: number | undefined = goal.deadline
    ? DatesService.getDeadlineDaysLeft(goal.deadline)
    : undefined;

  const handleToggleSwitchClick = (e: any) => {
    e.preventDefault();
    handleReminderToggle(goal);
  };

  // ----

  const deadlineLayout = (
    <div className="deadline-display d-inline-block">
      <small className="deadline_date">
        {moment(goal.deadline).local().format("dd DD MMMM YYYY")}
      </small>
      &nbsp;&nbsp;
      {daysLeft != null && daysLeft > -1 && daysLeft < 7 && (
        <span>
          <mark className="warning-text">
            ⚠️&nbsp;
            {daysLeft > 0
              ? `${daysLeft} day${daysLeft === 1 ? "" : "s"} left`
              : `Today`}{" "}
          </mark>
          &nbsp;
        </span>
      )}
    </div>
  );

  const reminderLayout = (
    <ToggleSwitch
      id={`reminder-switch--${goal.id}`}
      className="goal__reminder"
      label={
        <span>
          Set Reminder
          {/* &nbsp;<FaClock /> */}
        </span>
      }
      value={goal.reminder ? 1 : 0}
      onChange={handleToggleSwitchClick}
    />
  );

  const contentLayout = (
    <div
      className={`goal ${goal.reminder ? "reminder" : ""}`}
      // onDoubleClick={(e: any) => handleToggleReminderGoal(goal)}
    >
      <div className="goal__heading">
        <h3 className="title">
          {goal.id} - {goal.title}
        </h3>
        <div className="close-icon">
          <FaTimes onClick={() => goal.id != null && handleDelete(goal.id)} />
        </div>
      </div>
      <div className="goal__content">
        <div className="goal__deadline">
          <span>
            {/* <FaCalendarDay /> */}
            📅&nbsp;
            {!!goal.deadline ? deadlineLayout : "No due date"}
          </span>
        </div>

        {reminderLayout}

        {goal.description?.length > 0 && (
          <details className="goal__description">{goal.description}</details>
        )}
      </div>
    </div>
  );

  // ----

  return contentLayout;
}
