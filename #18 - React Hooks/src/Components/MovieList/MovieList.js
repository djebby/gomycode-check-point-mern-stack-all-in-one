import "./movielist.css";
import MovieCard from "../MovieCard/MovieCard";

function MovieList({list}){
    return(
        <div className="MovieList">{
        list.map( (ele,index)=>(
            <MovieCard key={index} ele={ele} />
        ))
        }
        </div>
    );
}

export default MovieList;