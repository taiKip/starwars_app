import React from 'react'
import { useQuery } from 'react-query'
import Planet from './Planet'
import { IsPlanet } from '../Interfaces/IsPlanet'
const fetchPlanets = async ({}) => {
    const res = await fetch('https://swapi.dev/api/planets/')
    
    return res.json()


}

const Planets = () => {
    const { data, status } = useQuery(['planets', 'hello ninjas'], fetchPlanets, {
        staleTime: 2000,
    })

    return (
        <div>
            <h2>Planets</h2>
            {status === 'loading' && (<div>Loading data...</div>)}
            {status === 'error' && (<div>error fetching data</div>)
            }
            {status === 'success' && (
                <div>
                    {data &&data.results.map((planet: IsPlanet) => <Planet
                        key={planet.name}
                        name={planet.name}
                        terrain={planet.terrain}
                        population={planet.population} />)}
                </div>
            )}
        </div>
    )
}

export default Planets
