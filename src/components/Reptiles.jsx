import Navbar from "./navbar"
import { useEffect, useState } from "react";
import axios from 'axios'

export default function Reptiles(){
    const [species, setSpecies] = useState([])
    const [breeds, setBreeds] = useState([])

    useEffect(() => {
        const fetchSpecies = async () => {
            try {
              const response = await axios.get("http://localhost:5000/reptilespecies");
              setSpecies(response.data)
            } catch (error) {
              console.error(error);
            }
        }
        const fetchBreeds = async () => {
            try {
              const response = await axios.get("http://localhost:5000/reptilebreeds");
              setBreeds(response.data)
            } catch (error) {
              console.error(error);
            }
        }
        fetchSpecies();
        fetchBreeds();
    },[])
    return(
        <div>
            <Navbar />
            <div>
            <h1 className="text-center text-3xl">Reptile Species</h1>
                <div className="flex justify-between border border-black mx-10 my-5">
                {species.map(s => (
                    <div className="flex flex-col gap-4">
                    <p>Scientific Name : {s.scientificname}</p>
                    <p>Common Name: {s.commonname}</p>
                    <p>Family: {s.family}</p>
                    <p>Diet: {s.diet}</p>
                    <p>Habitat: {s.habitat}</p>
                    <p>Average Life Span: {s.avglifespan}</p>
                    <p>Conservation Status: {s.conservationstatus}</p>
                </div>
                ))}
                </div>
                <h1 className="text-center text-3xl">Reptile Breeds</h1>
                <div className="flex justify-between border border-black mx-10 my-5">
                {breeds.map(b => (
                    <div className="flex flex-col gap-4">
                        <p>Breed: {b.breedname}</p>
                        <p>Population: {b.population}</p>
                        <p>Place of origin: {b.origin}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}