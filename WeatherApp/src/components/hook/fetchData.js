import React, { useState } from 'react'
//import components
import { API_KEY, API_URL } from "../config/config";
import Axios from "axios";

export const FetchData = () => {
    const [data, setData] = useState([])
    const [city, setCity] = useState('London')
    const [country, setCountry] = useState('Ukraine')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

        try {
            Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
                .then(res => setData([res.data]))
            console.log('Data from Axios: ', data)
        } catch (e) {
            console.log(e)
        }

    return (
        <div>
            {data.map(item => item.data)}
        </div>
    )
}
