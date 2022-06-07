import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Card from './components/Card'

function App() {

  const [latLon, setLatLon] = useState({}) 
  const [weather, setWeather] = useState()

  useEffect(() => {

    const success = pos => {
      const lat = pos.coords.latitude
      const lon = pos.coords.longitude
      setLatLon({lat,lon})
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  
  useEffect(() => {
    if(latLon.lat !== undefined){
      const API_KEY = '5f3e1b83eae8d018e85db8f694c566a1'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${API_KEY}`
      axios.get(URL)
      .then(res => setWeather(res.data))
      .catch(err => console.log(err)) 
    }

  }, [latLon])

  return (
    <div className="App">
      <Card weather={weather}/>
    </div>
  )
}

export default App
