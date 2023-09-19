import { useEffect, useId, useState } from 'react';
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

useEffect(() => {
  const fetchWeather = async () => {
    const response = await fetch("https://example-apis.vercel.app/api/weather/sahara");
    const weatherRainforest = await response.json();
    console.log(weatherRainforest);
    setWeather(weatherRainforest)
  }
  fetchWeather()
}, []);



const handleAddActivity = (activity) => {
  console.log(activity);
  setActivities([...activities, activity])
}

useEffect(() => {
 // const filteredActivities = activities.filter((activity) => activity.isForGoodWeather === weather)
 setListTitle(weather.isGoodWeather === true? "Yay good weather, go out and:" : "Bah close the curtains and:")
}, [weather])


  return (
    <>   
      <h1>{weather.condition}{weather.temperature}</h1>
      <Form onAddActivity={handleAddActivity}/>
      <List activities={weather.isGoodWeather? goodWeatherActivities: badWeatherActivities } title={listTitle} />
    </>
  )
}

export default App
