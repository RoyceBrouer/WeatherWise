import React from 'react'

export default function Form({onAddActivity}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const activity = Object.fromEntries(formData);
       onAddActivity(activity);
       event.target.reset();
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <h2>Add New Activity</h2>
        <fieldset>
        <label htmlFor='name'>Name:</label>
        <input type="text" name="name" required></input>
        </fieldset>
        <fieldset>
        <label htmlFor="checkbox">Good Weather Activity:</label>
        <input type="checkbox" name="checkbox"></input>
        </fieldset>
        <button>Submit</button>
    </form>
  )
}
