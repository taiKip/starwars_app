import React from 'react'
import { useQuery } from 'react-query'
import Person from './Person'
import { IsPerson } from '../Interfaces/IsPerson'
import ProgressBar from './ProgressBar/ProgressBar'
import { useState } from 'react'
const fetchPeople = () => fetch(`https://swapi.dev/api/people/`).then((res) => res.json());

const People = () => {
    
    const { data, error, isLoading } = useQuery('people', () => fetchPeople())
   
    return (
        <div>
            <h2>People</h2>
           
            {isLoading&&'loading' && (<ProgressBar/>)}
            {error && (<div>error fetching data</div>)
            }
            {data && data.results.map((person: IsPerson,index:number) => <Person key={index} personData={person}/>)}
        </div>
    )
}

export default People
