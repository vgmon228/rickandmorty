export default function Card({ data }) {
    if(!data.char) return <p>Belum ada character di lokasi ini</p>
    return (
        <div className="d-flex gap-2 mt-3 justify-content-center flex-wrap">
            {
                data.char.length > 0 && data.char.map((char, index) => {
                    return (
                        <div className="card mx-auto" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={data.image[index]} alt="Card image cap" />
                            <h5 className="card-title">{char}</h5>
                            <div className="card-body">
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}