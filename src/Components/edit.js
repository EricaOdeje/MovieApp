import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Edit(props) {
  
    {/*The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>.*/ }
    let { id } = useParams();


    // I updated state variables using the React useState()
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [posterUrl, setPosterUrl] = useState("");

    // useNavigate returns a function that we can use to navigate
    const navigate = useNavigate();

    // useEffect Hook is similar to componentDidMount
    useEffect(() => {

        // Axios is a promised-based web client for making HTTP requests.
        axios.get('http://localhost:4000/api/movies/' + id)
            .then((response) => {
                // Assign response data to the state variables using useState.
                setTitle(response.data.title);
                setDirector(response.data.director);
                setPosterUrl(response.data.posterUrl);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id]); 

    const handleSubmit = (event) => {
        event.preventDefault();
        const newMovie = {
          id: id,
            title: title,
            director: director,
            posterUrl: posterUrl
        };

        axios.put('http://localhost:4000/api/movie/' + id, newMovie)
            .then((res) => {
                console.log(res.data);
                navigate('/read');
            })
            .catch((error) => {
                console.error('Error updating movie:', error);
            });
    
    };


    return (
        <div>
            <h2>This is my Edit component</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Movie Title: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Director: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Poster Url: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={posterUrl}
                        onChange={(e) => setPosterUrl(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Edit Movie"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}
