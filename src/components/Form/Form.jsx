import React from 'react'

export default function Form({onAddActivity}) {
  return (
    <form>
        <h2>Add New Activity</h2>
        <fieldset>
        <label htmlFor='name'>Name:</label>
        <input type="text" name="name" required></input>
        </fieldset>
        <fieldset>
        <label htmlFor="checkbox">Good Weather Activity:</label>
        <input type="checkbox" name="checkbox" required></input>
        </fieldset>
        <button>Submit</button>
    </form>
  )
}
