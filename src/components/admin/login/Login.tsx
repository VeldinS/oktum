import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {AuthContext} from "../../../authentication/authContext";

import './login.css'
import 'bootstrap/dist/css/bootstrap.css';


const Login: React.FC = () => {

    const auth = useContext(AuthContext), navigate = useNavigate(), [formData, setFormData] = useState({
        username: '',
        password: ''
    }), handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }, handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const adminCredentials = {...formData};
        try {
            const res = await fetch(  'http://localhost:5000/Login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(adminCredentials)
            })
            if (res.status === 200) {
                auth.login();
                navigate('/Admin');
            } else {
                alert('POGREŠNO KORISNIČKO IME ILI LOZINKA');
            }
        } catch (err) {
            console.log('invalid credentials')
        }
    };

    return (
             <div>
                    <div className={"login-page-main"} style={{ minHeight: '100vh'}}>
                        <div className="login-box1">
                            <p>Login</p>
                            <form onSubmit={handleSubmit}>
                                <div className="user-box1">
                                    <input  name={"username"} value={formData.username} onChange={handleChange} type="text"/>
                                        <label>Korisničko Ime</label>
                                </div>
                                <div className="user-box1">
                                    <input  type="password" name={"password"} value={formData.password} onChange={handleChange}/>
                                        <label>Lozinka</label>
                                </div>
                                <button type="submit">
                                <a>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    LOGIN
                                </a>
                                </button>
                                <a onClick={() => navigate('/')} style={{float: "right"}} href="#">
                                    POČETNA
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
    );
};

export default Login;