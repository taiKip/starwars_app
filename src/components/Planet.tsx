import React from 'react'
import classes from './Planet.module.css'

const Planet = ({name,population,terrain}:{name:string,population:string,terrain:string}) => {
    return (
        <div className={classes.card}>
            <h3>{name}</h3>
            <p>Population-{population}</p>
            <p>Terrain - {terrain}</p>
        </div>
    )
}

export default Planet
