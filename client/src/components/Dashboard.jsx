import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const [name, setName] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/loggedin", {withCredentials: true})
            .then(res => {
                console.log(res)
                setName(res.data.firstName)
            })
            .catch(err => {
                console.log(err)
                navigate("/")
            })
    }, [])

    const logout = () => {
        axios.get("http://localhost:8000/api/users/logout", {withCredentials: true})
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => console.log(err))

    }


    return (
        <div>
            
            {name ? 
            <div>
            <h1>Welcome {name}</h1>
            <button onClick={logout}>Logout</button>
            </div>
            
            
            : <h1>Please log in first</h1>}
            
        </div>
    );
}

export default Dashboard;