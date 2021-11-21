import "./movielist.css";
import MovieCard from "../MovieCard/MovieCard";
import {Link} from "react-router-dom";

function MovieList({list}){
    return(
        <div className="MovieList">{
        list.map( (ele,index)=>(
            <Link key={index} to={"/"+index} > 
            <MovieCard key={index} ele={ele} />
            </Link>
        ))
        }
        </div>
    );
}

export default MovieList;