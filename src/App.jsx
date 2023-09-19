import { useId, useState } from 'react';
import './App.css'
import Form from './components/Form/Form'
import {uid} from 'uid'
import List from './components/List/List';
import { useLocalStorage } from "@uidotdev/usehooks";

function App() {
const [activities, setActivities] = useLocalStorage("activities", []);
const handleAddActivity = (activity) => {
  setActivities([...activities, { id: uid(), ...activity}])
}



//activities.filter((activity) => activity.forGoodWeather.checked)
  return (
    <>   
      <Form onAddActivity={handleAddActivity}/>
      <List activities={activities} title={listTitle} />
    </>
  )
}

export default App
