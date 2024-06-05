import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from "../components/Nav";

export default function Add() {
    const [location, setLocation] = useState("");
    let nav = useNavigate();

    async function add(event) {
        event.preventDefault();
        try {
            let { data } = await axios({
                url: 'http://localhost:3000/location',
                method: 'PUT',
                data: { char: localStorage.getItem('name'), image: localStorage.getItem('image'), location: location }
            });
            toast.success("Berhasil ditambahkan");
            setTimeout(() => {
                nav('/location');
            }, 2000);
        } catch (error) {
            toast.error("Gagal menambah lokasi silahkan coba lagi");
            setTimeout(() => {
                nav('/');
            }, 2000);
        }
    }

    return (
        <div>
            <Nav/>  
            <ToastContainer />
            <form onSubmit={(e) => add(e)}>
                <p>Location</p>
                <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                <button type="Submit">Add</button>
            </form>
        </div>
    );
}
