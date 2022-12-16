// ------------------------------------------

interface Props {}

// ------------------------------------------

export default function AddGoalForm({}: Props) {
  const handleFormSubmit = () => {
    console.log("form submitted");
  };
  // ----

  return (
    <form
      id="add-goal-form"
      className="add-goal-form"
      onSubmit={handleFormSubmit}
    >
      Add Goal Form goes here
      {/* SUBMIT button */}
      <input
        type="submit"
        value="Save Goal"
        className="btn d-inline-block w-100 submit-btn"
      />
    </form>
  );
}
