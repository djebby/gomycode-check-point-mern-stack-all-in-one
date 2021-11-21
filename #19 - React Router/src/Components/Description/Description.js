import "./description.css";
import {useParams} from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";

export default function Description({list}) {

    console.log(list.length);
    let params = useParams();
    return (
        <div className="desc">
            {  ( isNaN(params.id) || list.length <= parseInt(params.id)) ?  <p>No Movie With this id </p> :
            
            <>
            <MovieCard ele={list[params.id]} /> 
            <iframe width="560" height="315" src={list[params.id].trailer}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </>
            }
        </div>
    )
}
