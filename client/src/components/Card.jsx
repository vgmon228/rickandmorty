import { Link } from "react-router-dom";

export default function Card({data}) {
    return (
        <div className="card mx-auto" style={{ width: "18rem" }}>
            <img className="card-img-top" src={data.image} alt="Card image cap" />
            <div className="card-body">
            <Link to={`/detail/${data.id}`}><h5 className="card-title">{data.name}</h5></Link>
            </div>
        </div>

    )
}