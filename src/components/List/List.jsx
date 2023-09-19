import React, { Fragment } from 'react'


export default function List({activities, title, onDeleteActivity}) {
    
  return (
    <>
    {activities.length>0 && <h2>{title}</h2>}
    <ul>
       {activities.map((activity) => (
        <Fragment key={activity.id}>
       <li>{activity.name}</li>
       <button type="button" onClick={()=>onDeleteActivity(activity.id)}>Delete</button>
       </Fragment>
       ))}
       
    </ul>
    </>
  )
}
