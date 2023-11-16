import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-5 d-flex flex-column">
                        <input type="text" className='form-control py-2 mt-5'/>
                        <input type="password" className='form-control py-2 mt-3'/>
                        <button className='btn btn-primary btn-lg mt-3'>Login</button>
                        <span className="align-content-center mt-3">Forgot Password</span>
                        <hr/>
                        <div className='mb-3'>
                            <Link to={"/register"}> <button className='btn btn-success'>Create account</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;