import { useState } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";

const Register = () => {

    //const navigate = useNavigate();


    const [formInfo, setFormInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm: ""
    })

    const [errors, setErrors] = useState({

    })

    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const register = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", formInfo, {withCredentials: true})
            .then(res => {
                console.log(res)
                if(res.data.errors){
                    setErrors(res.data.errors)
                } else {
                    console.log("todo bien wacho")
                }
            }
        )
            .catch(err => console.log(err))
        console.log("Form Submitted");
        console.log(formInfo);
    }


    return (
        <div>
            <h1>Register Below</h1>
            <form onSubmit={register}>
                <div className="form-group">
                    <label>First Name: </label>
                    <input type="text" className="form-control" name="firstName" onChange={changeHandler}/>
                    {errors.firstName ? <p>{errors.firstName.message}</p> : ""}
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input type="text" className="form-control" name="lastName" onChange={changeHandler}/>
                    {errors.lastName ? <p>{errors.lastName.message}</p> : ""}
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="email" className="form-control" name="email" onChange={changeHandler}/>
                    {errors.email ? <p>{errors.email.message}</p> : ""}
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="password" className="form-control" name="password" onChange={changeHandler}/>
                    {errors.password ? <p>{errors.password.message}</p> : ""}
                </div>
                <div className="form-group">
                    <label>Confirm Password: </label>
                    <input type="password" className="form-control" name="confirmPassword" onChange={changeHandler}/>
                    {errors.confirmPassword ? <p>{errors.confirmPassword.message}</p> : ""}
                </div>
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register;