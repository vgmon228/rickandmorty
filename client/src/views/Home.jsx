import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../components/Card"
import Nav from "../components/Nav"

export default function Home() {
    let [data, setData] = useState([])
    let [page, setPage] = useState(1)
    let fetchData = async () => {
        try {
            let { data } = await axios({
                url: 'https://rickandmortyapi.com/api/character/?page=' + page,
                method: 'GET'
            })
            setData(data.results)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [page])
    return (
        <div>
            <Nav />
            <div className="d-flex gap-2 mt-3 justify-content-center flex-wrap">
                {data.length > 0 && data.map((data) => {
                    { console.log(data) }
                    return <Card data={data} />
                })}
            </div>
            <div className="d-flex gap-2 mt-3 justify-content-center flex-wrap">
                {page != 1 &&
                    <button onClick={() => setPage((page) => page - 1)}>prev</button>
                }
                {page != 43 &&
                    <button onClick={() => setPage((page) => page + 1)}>next</button>
                }
            </div>
        </div>
    )
}