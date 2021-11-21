
import "./moviecard.css";

export default function MovieCard({ele}) {
    return (
        <div className="MovieCard">
                <div>
                    <div>
                    <img width="300" src={ele.img} alt={ele.title} />
                    </div>
                    <div >
                    <h2>{ele.title}</h2>
                    <p>{ele.description}</p>
                    <h3>Rate : {ele.rating}</h3>
                    <h4>{ele.posterURL}</h4>
                    </div>
                </div>
            </div>
    )
}
