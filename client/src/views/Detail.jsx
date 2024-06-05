import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from "../components/Nav";

export default function Detail() {
    let nav = useNavigate();

    const handleLocation = (e) => {
        const image = e.currentTarget.getAttribute('image');
        const name = e.currentTarget.getAttribute('name');
        localStorage.setItem('image', image);
        localStorage.setItem('name', name);
        nav('/add');
    };

    const { id } = useParams();
    let [data, setData] = useState();

    let fetchData = async () => {
        try {
            let { data } = await axios({
                url: 'https://rickandmortyapi.com/api/character/' + id,
                method: 'GET'
            });
            setData(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    if (!data) return null;

    return (
        <div>
            <Nav/>
            <div className="d-flex justify-content-center align-items-center" >
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={data.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <h7>Gender: {data.gender}</h7>
                        <br />
                        <h7>Status: {data.status}</h7>
                        <br />
                        <button className="btn btn-primary mt-2" onClick={handleLocation} image={data.image} name={data.name}>
                            Add Location
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
