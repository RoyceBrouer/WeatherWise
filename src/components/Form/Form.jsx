import { uid } from "uid";
import "./Form.css";

export default function Form({ onAddActivity }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const activity = {
      id: uid(),
      name: data.name,
      isForGoodWeather: data.forGoodWeather === "on" ? true : false,
    };
    onAddActivity(activity);
    event.target.reset();
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <h2>Add New Activity</h2>
      <fieldset className="Form__fieldset">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" required></input>
      </fieldset>
      <fieldset className="Form__fieldset Form__fieldset-checkbox">
        <label htmlFor="forGoodWeather">Good Weather Activity:</label>
        <input type="checkbox" name="forGoodWeather"></input>
      </fieldset>
      <button className="Form__button">Submit</button>
    </form>
  );
}
