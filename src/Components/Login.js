import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {loginSchema} from "../Validate/validate";
import loginRegisterService from "../Service/loginAndRegisterService";
import { FaRegUser} from "react-icons/fa";
import {IoMdEye, IoMdEyeOff} from "react-icons/io";
import {TbLock} from "react-icons/tb";
import {useDispatch} from "react-redux";
import {setUserLogin} from "../features/auth/authSlice";

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [checkPassword, setCheckPassword] = useState("");
    const [remember, setRemember] = useState(true);
    const dispatch = useDispatch();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const login = (value) => {
        loginRegisterService.login(value)
            .then(res => {
                if (res.data.status === "Đang hoạt động") {
                    if (remember) {
                        localStorage.setItem("account", JSON.stringify(res.data));
                    }
                    dispatch(setUserLogin(res.data))
                    // setShow(true);
                    navigate("/");
                } else {
                    // setShow(true);
                    navigate("/login");
                }
            })
            .catch(err => {
                setCheckPassword("Sai mật khẩu");
            })
    }
    return (
        <div className='container pt-100'>
            <div className='d-flex flex-column align-items-center'>
                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    validationSchema={loginSchema}
                    onSubmit={values => {
                        login(values)
                    }}>
                    {({values}) => (
                        <Form>
                            <div className='my-4'>
                                <div>
                                    <label htmlFor='username' className='form-label'>Tên đăng nhập</label>
                                    <div style={{position: 'relative'}}>
                                        <FaRegUser style={{
                                            position: 'absolute',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            left: '10px'
                                        }}/>
                                        <Field type="text" className='form-control' placeholder="Tên tài khoản"
                                               id='username'
                                               value={values.username}
                                               style={{paddingLeft: '30px'}}/>
                                    </div>
                                </div>
                                <ErrorMessage name='username' className='text-danger' component='div'/>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor='password' className='form-label'>Mật khẩu</label>
                                    <div>
                                        <div style={{position: 'relative'}}>
                                            <TbLock style={{
                                                position: 'absolute',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                left: '10px',
                                            }}/>
                                            <Field
                                                type={showPassword ? 'text' : 'password'}
                                                className='form-control'
                                                placeholder='Mật khẩu'
                                                id='password'
                                                value={values.password}
                                                style={{paddingLeft: 30}}
                                            />

                                            <button
                                                type='button'
                                                className='btn px-2 py-1'
                                                onClick={toggleShowPassword}
                                                style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    right: '10px'
                                                }}
                                            >
                                                {showPassword ? <IoMdEye/> : <IoMdEyeOff/>}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center my-3'>
                                    <div className='me-5'>
                                        <input id='check-bok' type='checkbox' className='me-2' checked={remember} onChange={()=> setRemember(!remember)}/>
                                        <label htmlFor='check-box'>Ghi nhớ đăng nhập</label>
                                    </div>
                                    <div>Quên mật khẩu</div>
                                </div>
                                <ErrorMessage name='password' className='text-danger' component='div'/>
                                <div className="text-danger">{checkPassword}</div>

                            </div>
                            <div>
                                <button className='btn btn-primary mb-3'>Đăng nhập</button>
                            </div>
                            <div>
                                <p>Bạn chưa có tài khoản? <Link to={"/Register"}>Đăng ký</Link></p>
                            </div>
                        </Form>)}
                </Formik>
            </div>
        </div>
    );
};

export default Login;