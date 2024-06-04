export default function Location(){
    const location = localStorage.getItem('location')
    if (!location) return <p>Hello</p>
}