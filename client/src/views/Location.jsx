import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../components/CardLoc"
import Nav from "../components/Nav"
export default function Location() {
    let [data, setData] = useState([])
    let fetchData = async () => {
        try {
            let { data } = await axios({
                url: 'http://localhost:3000/location',
                method: 'GET'
            })
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    if(!data) return <p>Belum ada character</p>
    return (
        <div>
            <Nav/>
            {data.length > 0 && data.map((data) => {   
                    return(
                        <div>
                            <h2>{data.location}</h2>
                            <Card data={data} key={data._id}/>                           
                        </div>
                    ) 
            })}
        </div>
    )
}