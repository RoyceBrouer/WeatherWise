import React from 'react'


export default function List({activities, title}) {
    
  return (
    <>
    <h2>{title}</h2>
    <ul>
       {activities.map((activity) => (
       <li key={activity.id}>{activity.name}</li>))}
    </ul>
    </>
  )
}
