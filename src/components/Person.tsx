import React from 'react'
import { IsPerson } from '../Interfaces/IsPerson'
import classes from './Person.module.css'
const Person = ({personData}:{personData:IsPerson}) => {
   
    return (
        <div className={classes.card}>
            <h3>{personData.name}</h3>
            <p>Gender - {personData.gender}</p>
            <p>Birth year - {personData.birth_year}</p>
        </div>
    )
}

export default Person
