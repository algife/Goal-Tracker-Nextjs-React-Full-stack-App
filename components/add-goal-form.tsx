import moment from "moment";
import { SyntheticEvent, useState } from "react";
import IGoal from "../models/goal";
import CustomDatePicker from "./custom-date-picker";
import ToggleSwitch from "./toggle-switch";

// ------------------------------------------

interface Props {
  handleSaveGoal: (item: IGoal) => void;
}

// ------------------------------------------

const emptyForm = {
  title: "",
  description: "",
  deadline: undefined,
  reminder: false,
};

export default function AddGoalForm({ handleSaveGoal }: Props) {
  const [title, setTitle] = useState<string>(emptyForm.title);
  const [description, setDescription] = useState<string>(emptyForm.description);
  const [deadline, setDeadline] = useState<Date | undefined>(
    emptyForm.deadline
  );
  const [reminder, setReminder] = useState<boolean>(emptyForm.reminder);

  const resetForm = (): void => {
    setTitle(emptyForm.title);
    setDescription(emptyForm.description);
    setDeadline(emptyForm.deadline);
    setReminder(emptyForm.reminder);
  };

  const isFormValid: boolean = !!title; // TODO Improve this Form validation

  const handleFormSubmit = (e: any): void => {
    e.preventDefault();
    if (!title) alert("Please add valid values in the form before saving");
    else {
      let deadlineISOString: any = deadline;
      if (deadline != null) {
        // Translate to ISO String to send as payload
        deadlineISOString = deadlineISOString.toISOString();
      }
      handleSaveGoal({
        title,
        description,
        reminder,
        deadline: deadlineISOString,
      });
    }
    resetForm();
  };

  const handleTitleChange = (e: any): void => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e: any): void => {
    setDescription(e.target.value);
  };
  const handleDeadlineChange = (
    newDate: Date | null,
    e?: SyntheticEvent<any, Event>
  ): void => {
    setDeadline(newDate ?? undefined);
  };
  const handleToggleSwitchReminderClick = (e: any) => {
    setReminder((currentStatus) => !currentStatus);
  };

  // ----

  return (
    <form
      id="add-goal-form"
      className="add-goal-form"
      onSubmit={handleFormSubmit}
    >
      <div className="form-control form-control--floating">
        <input
          name="title"
          type="text"
          autoFocus
          // placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <label id="title-label" htmlFor="title">
          Title
        </label>
      </div>
      <div className="form-control form-control--floating">
        <input
          name="description"
          type="text"
          // placeholder="put some details here..."
          value={description}
          onChange={handleDescriptionChange}
        />
        <label id="description-label" htmlFor="description">
          Description
        </label>
      </div>
      <div className="form-control form-control--floating">
        <CustomDatePicker
          value={deadline}
          minDate={moment().toDate()}
          onChange={handleDeadlineChange}
          placeholder="Select a due date (deadline)"
          label="Due Date (Deadline)"
        />
      </div>

      {/* REMINDER */}
      <ToggleSwitch
        id="reminder-switch--add-goal"
        className="form-control form-control--checkbox goal__reminder"
        label={"Set Reminder"}
        value={reminder ? 1 : 0}
        onChange={handleToggleSwitchReminderClick}
      />

      {/* SUBMIT button */}
      <input
        type="submit"
        value="Save Goal"
        className="btn d-inline-block w-100 submit-btn"
        {...(!isFormValid ? { disabled: true } : {})}
      />
      {/* <Button
          text="Save Goal"
          className="btn d-block w-100 submit-btn"
          // disabled={!isValidForm}
          onClick={handleFormSubmit}
        /> */}
    </form>
  );
}
