import React, {useEffect, useState} from 'react';
import './App.css';

//import components
import Axios from "axios";
import {API_KEY} from "./components/config/config";
import { Table } from "./components/elements/Table";
import Spinner from './components/elements/Spinner'

const App = () => {

    const [data, setData] = useState([])
    const [city, setCity] = useState('Kyiv')
    const [country, setCountry] = useState('Ukraine')
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(false)

    useEffect( () => {
        try {
            Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
                .then(res => setData([res.data]))
        } catch (e) {
            setLoading(false)
            setError(true)
            console.log(e, error)
        }
    }, [city,country])

    const handleChange = (name, country) => {
        setCity(name)
        setCountry(country)
    }

    console.log(city, country)
  return (
      <div className='App'>
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <button type="button" className="btn btn-outline-primary" onClick={() => handleChange('Kyiv', 'Ukraine')}>Kyiv</button>
                      <button type="button" className="btn btn-outline-success" onClick={() => handleChange('London', 'GB')}>London</button>
                      <button type="button" className="btn btn-outline-warning" onClick={() => handleChange('New York', 'US')}>New York</button>
                      <button type="button" className="btn btn-outline-warning" onClick={() => handleChange('Moscow', 'US')}>Moscow</button>
                  </div>
              </div>
              <div className="row">
                  <div className="col-12">
                      {loading ? <Spinner /> : data.map(item => (
                          <Table
                              key={item.id}
                              city={city}
                              temp={item.main.temp}
                              pressure={item.main.pressure}
                              humidity={item.main.humidity}
                              speed={item.wind.speed}
                              deg={item.wind.deg}
                          />
                      ))}
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App
