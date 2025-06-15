//TODO: set up a form to collect guest's data
// - Create the form UI
// - Add an event to submit the form data - OnSubmit
// - Store and manage the submitted data - state
// - Need to track the input changes - onChange
import "./DryForm.css";
import { useState } from "react";

export default function Form() {
  //this is the short complex way - code is DRY
  //storing the input values in one state
  const [formData, setFormData] = useState({
    guestname: "",
    date: "",
    purpose: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    //sending the values to the server (not the url)
  }

  function handleFormData(event) {
    //tracking the changes in each input
    //need to add some logic so state "remembers" the previous inputs when tracking changes in different inputs - spread syntax
    //merging objects
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <div className="form">
      <h1>Guest Book</h1>
      {/* when we pass the handler to the event, the argument for the event parameter is the actual onSubmit */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Please tell us about your stay...</legend>
          {/* the htmlFor attribute is the same as the for attribute, just a little clarification for react */}
          <label htmlFor="guestname">Your name: </label>
          {/* each input needs a name! */}
          <input
            type="text"
            name="guestname"
            required
            placeholder="Write your name"
            value={formData.guestname}
            // the onChange event will track the changes in the input value, and the mutation function in the handler will update the value of state at the same time
            onChange={handleFormData}
          />
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            name="date"
            required
            placeholder="Date of your stay"
            value={formData.date}
            onChange={handleFormData}
          />
          <label htmlFor="purpose">Purpose: </label>
          <input
            type="text"
            name="purpose"
            required
            placeholder="Main purpose of your stay"
            minLength={4}
            maxLength={25}
            value={formData.purpose}
            onChange={handleFormData}
          />
        </fieldset>
        <button type="submit">Submit</button>
        {/* <input type="button" /> */}
      </form>
      <p>{formData.guestname}</p>
      <p>{formData.date}</p>
      <p>{formData.purpose}</p>
    </div>
  );
}
