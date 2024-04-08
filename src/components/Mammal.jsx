import Navbar from "./navbar"
import { useEffect, useState } from "react";
import axios from 'axios'

export default function Mammal(){
    const [mammal, setMammal] = useState([]);
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        const fetchAnimals = async () => {
            try {
              const response = await axios.get("http://localhost:5000/mammals");
              setMammal(response.data)
            } catch (error) {
              console.error(error);
            }
        }
        const fetchBreeds = async () => {
            try {
              const response = await axios.get("http://localhost:5000/mammalbreeds");
              setBreeds(response.data)
            } catch (error) {
              console.error(error);
            }
        }
        fetchAnimals();
        fetchBreeds();
    },[])

    return(
        <div>
            <Navbar />
            <div>
                <h1 className="text-center text-3xl">Mammal Species</h1>
                <div className="flex justify-between border border-black mx-10 my-5">
                {mammal.map(m => (
                    <div className="flex flex-col gap-4">
                        <p>Scientific Name : {m.scientificname}</p>
                        <p>Common Name: {m.commonname}</p>
                        <p>Family: {m.family}</p>
                        <p>Diet: {m.diet}</p>
                        <p>Habitat: {m.habitat}</p>
                        <p>Average Life Span: {m.avglifespan}</p>
                        <p>Conservation Status: {m.conservationstatus}</p>
                    </div>
                ))}
                </div>
                <h1 className="text-center text-3xl">Mammal Breeds</h1>
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