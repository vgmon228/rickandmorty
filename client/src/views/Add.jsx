export default function Add(){
    const location = () =>{
        let locationArray = JSON.parse(
            localStorage.getItem('location') || '[]'
        )
        let charLocation ={
            
        }
    }
    return(
        <div>
            <form action="">
                <p>Location</p>
                <input type="text" />
                <button>Add</button>
            </form>
        </div>
    )
}