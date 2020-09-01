import React from 'react'

export const Table = ({ temp, pressure, humidity, speed, deg, city }) => {

    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">{city}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">Температура</th>
                    <td>{temp}</td>
                </tr>
                <tr>
                    <th scope="row">Атмосферное давление</th>
                    <td>{pressure}</td>
                </tr>
                <tr>
                    <th scope="row">Влажность</th>
                    <td>{humidity}</td>
                </tr>
                <tr>
                    <th scope="row">Скорость ветра</th>
                    <td>{speed}</td>
                </tr>
                <tr>
                    <th scope="row">Направление ветра</th>
                    <td>{deg}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

