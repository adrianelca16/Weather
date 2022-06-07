import React, { useEffect, useState } from 'react'
import Button from './Button';

const Card = ({weather}) => {

    const kelvin = weather?.main.temp
    let celsio = 0
    const [degrees, setDegrees] = useState(0)
    const [isActive, setIsActive] = useState(true)
    useEffect(() => {
        if(kelvin !== 0){
            celsio = (kelvin - 273.15)
            setDegrees(celsio.toFixed(2))
        }
    }, [weather]);

    const changeDegrees = () =>{
        setIsActive(!isActive)
        if(isActive === true){
            setDegrees((degrees*1.8)+32)
        }else{
            setDegrees((degrees-32)/1.8)
        }
    }
   
  return (
      <article className='card'>
          <h1 className='card-title'>Weather App</h1>
          <p className='card-subtitle'>{weather?.name} {weather?.sys.country}</p>
          <div className='card-content'>
              <div className='card-content-temp'>
                  <p className='title-temp-img'>☁</p>
                  <p className='title-temp'>{degrees} {isActive?'℃':'°F'}</p>
              </div>
              <div className='card-content-other'>
                  <p className='card-content-other-title'>"{weather?.weather[0].description}"</p>
                  <p>🌫 Wind speed <b className='result'>{weather?.wind.speed}m/s</b></p>
                  <p>☁ Clouds <b className='result'>{weather?.clouds.all}%</b></p>
                  <p>🌡 Humidity <b className='result'>{weather?.main.humidity}%HR</b></p>
              </div>
          </div>
          <Button action={changeDegrees}
          isActive={isActive}/>
      </article>

  )
}

export default Card