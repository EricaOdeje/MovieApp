import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./movie";

{/* I added axios to our project by npm install axios, axios is a Promise based HTTP client.*/ }

function ReadMovies() {

    const [data, setData] = useState([]);
    {/*useEffect is a React Hook that lets you synchronize a component with an external system.*/ }
    useEffect(() => {
        {/* To make a http get call that will return the json data from and assign it to the component state. Use the react hook useState:.*/ }
        axios.get('http://localhost:4000/api/movies')
            .then(
                (response) => {
                    setData(response.data);
                }
            )

            .catch(
                (error) => {
                    console.log(error);
                }
            );
    }, []);

    
{/* I added a function to reload data by making another HTTP GET request.*/ }
    const ReloadData = (e) =>{
        axios.get('http://localhost:4000/api/movies')
        .then(
            (response) => {
                setData(response.data);
            }
        )

        .catch(
            (error) => {
                console.log(error);
            }
        );
    }

    return (
        <div>

            <h2>Hello from my Read component</h2>
            <Movie mymovie={data} Reload={ReloadData}></Movie>
        </div>

    );
}

export default ReadMovies;