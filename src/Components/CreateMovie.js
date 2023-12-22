import { useState } from "react";
import axios from "axios";

function Create() {
{/*The React useState Hook allows us to track state in a function component.*/}
    const [title, setTitle] = useState('');
    const [poster, SetPoster] = useState('');
    const [director, setDirector] = useState('');

    {/*This function will receive the form data if form validation is successful.*/}
    const handleSumbit = (e) =>{
        e.preventDefault();

        console.log("Title: "+title+
        "Poster: "+poster+
        "Director:"+director);

        const movie = {
            title:title,
            poster:poster,
            director:director
        };
         {/* Making a POST request to a server (http://localhost:4000/api/movies) with the movie data.*/}
        axios.post('http://localhost:4000/api/movies' ,movie)
        .then()
        .catch();

    }

    return (
        <div>
            <h2>This is my Create component</h2>

    
            <form onSubmit={handleSumbit}>
                
                {/*I modified the Create component so that it now includes a form that will upload data to a server*/}
                <div className="form-group">
                    <label>Add Movie Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Add Movie Poster: </label>
                    <input type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e) => { SetPoster(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Add Movie Director: </label>
                    <input type="text"
                        className="form-control"
                        value={director}
                        onChange={(e) => { setDirector(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Create movie"></input>
                </div>
            </form>
        </div>
    )
}

export default Create;