import React from 'react'
import { useQuery } from 'react-query'
import Person from './Person'
import { IsPerson } from '../Interfaces/IsPerson'
const fetchPeople = async () => {
    const res = await fetch('https://swapi.dev/api/people/')

    return res.json();
}

const People = () => {
    const { data, status } = useQuery('people', fetchPeople)
   
    return (
        <div>
            <h2>People</h2>
            {status === 'loading' && (<div>Loading data...</div>)}
            {status === 'error' && (<div>error fetching data</div>)
            }
            {status === 'success' && data.results.map((person: IsPerson,index:number) => <Person key={index} personData={person}/>)}
        </div>
    )
}

export default People
