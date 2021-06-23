import { useState } from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";
import { IsPlanet } from "../Interfaces/IsPlanet";
import ProgressBar from "./ProgressBar/ProgressBar";
const fetchPlanets = (page: number) =>
  fetch("https://swapi.dev/api/planets/?page=" + page).then((res) =>
    res.json()
  );

const Planets = () => {
  const [page, setPage] = useState(1);
  const { isLoading, error, data,  isPreviousData } =
    useQuery(["planets", page], () => fetchPlanets(page), {
      keepPreviousData: true,
    });
  const handlePrev = () => {
   
      setPage((prevState) => Math.max(prevState - 1,1));

  };
  const handleNext = () => {
    if (!isPreviousData&&data.next) {
      setPage((prevState) => prevState + 1);
    }
  };

  return (
    <div>
      <h2>Planets</h2>

      {isLoading && <ProgressBar />}
      {error && <div>error in fetching data</div>}
      {data && (
        <div>
          <button onClick={handlePrev} disabled={page === 1}>
            Prev Page
                  </button>
                  <span>{page}</span>
          <button onClick={handleNext} disabled={!data.next}>
            Next Page
          </button>
          {data &&
            data.results.map((planet: IsPlanet) => (
              <Planet
                key={planet.name}
                name={planet.name}
                terrain={planet.terrain}
                population={planet.population}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
