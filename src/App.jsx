import { useEffect, useState } from 'react';
import './App.css'
import Form from './components/Form/Form'
import List from './components/List/List';
import useLocalStorageState from 'use-local-storage-state';

function App() {
const [activities, setActivities] = useLocalStorageState("activities", {defaultValue: [] });
console.log("activities",activities);
const [weather, setWeather] = useState({})
const [listTitle, setListTitle] = useState("");
const goodWeatherActivities = activities.filter((activity) =>activity.isForGoodWeather) 
const badWeatherActivities = activities.filter((activity) =>activity.isForGoodWeather === false)

const fetchWeather = async () => {
  const response = await fetch("https://example-apis.vercel.app/api/weather/sahara");
  const weatherRainforest = await response.json();
  setWeather(weatherRainforest)
}

useEffect(() => {
  fetchWeather()

  const timer = setInterval(() => {
    fetchWeather()
  }, 5000);

  return () => {
    clearInterval(timer);
  };
}, []);



const handleAddActivity = (activity) => {
  setActivities([...activities, activity])
}

const handleDeleteActivity = (id) => {
  console.log("id", id)
  setActivities(activities.filter((activity) => activity.id !== id))
}

useEffect(() => {
 // const filteredActivities = activities.filter((activity) => activity.isForGoodWeather === weather)
 setListTitle(weather.isGoodWeather === true? "Yay good weather, go out and:" : "Bah close the curtains and:")
}, [weather])


  return (
    <>   
      <h1>{weather.condition}{weather.temperature}</h1>
      <List activities={weather.isGoodWeather? goodWeatherActivities: badWeatherActivities } title={listTitle} onDeleteActivity={handleDeleteActivity}  />
      <Form onAddActivity={handleAddActivity}/>
    </>
  )
}

export default App
