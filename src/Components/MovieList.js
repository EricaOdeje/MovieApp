import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MovieList(props) {
    return (
        <div>
            {/*Since I already installed bootstrap, I imported the card component.*/}
            <Card>
                {/*I used props.mymovie.title to pass data from one component to another.*/}
                <Card.Body>{props.mymovie.title}</Card.Body>
            </Card>
            <img src={props.mymovie.poster}></img>
            <p>{props.mymovie.director}</p>
        	
            {/*  This link will edit will change movie */}
            <Link to={"/edit/" + props.mymovie._id} className='btn btn-primary'>Edit</Link>
            {/*  This link will edit will change movie */}
            <Button onClick={(e) => {
                e.preventDefault();
                axios.delete('http://localhost:4000/api/movies/' +props.mymovie._id)

                //Put comment here
                .then(() =>{
                    props.reload();
                })
                .catch();

            }}className='btn btn-danger'>Delete</Button>
        </div>
    );

}

export default MovieList;