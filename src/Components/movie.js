import MovieList from "./MovieList";


    {/*I used props as an argument to get data from read.js.*/}
function movie(props){
       {/*I used props to pass data from one component to another.*/}
        {/*The map function is used to create a new aray.*/}
    return props.mymovie.map( 
            
        (movie) => {
            return <MovieList mymovie={movie} key={movie.id} reload ={() =>{props.Reload()}}></MovieList>
        }
    );
    }
    
    export default movie;
