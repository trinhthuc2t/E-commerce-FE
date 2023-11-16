import React from 'react';
import "./text.css"
import {FaRegUserCircle, FaShoppingCart} from "react-icons/fa";
import {IoHeart} from "react-icons/io5";
import {RiLockPasswordLine} from "react-icons/ri";
import {MdOutlineAccountCircle, MdOutlineChangeCircle} from "react-icons/md";
import {AiOutlineInfoCircle} from "react-icons/ai";
import {IoMdLogIn} from "react-icons/io";
import {Link} from "react-router-dom";

const TopBar = () => {
    return (
        <div className="container-fluid">
            <div className="row align-items-center py-3 pt-3">
                <div className="col-lg-3 d-none d-lg-block">
                    <Link to={"/"} className="text-decoration-none">
                        <h1 className="m-0 display-5 fw-bold text-dark"><span
                            className="text-h border px-3 mr-1">E</span>Shopper</h1>
                    </Link>
                </div>
                <div className="col-lg-6 col-6 text-left">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products"/>
                    </div>
                </div>
                <div className="col-lg-3 col-6 text-right align-items-center">
                    <div className="btn border text-h text-icon me-1">
                        <IoHeart className='text-h text-icon'/>
                        <span className="">0</span>
                    </div>
                    <div className="btn border m-1">
                        <FaShoppingCart className='text-h text-icon'/>
                        <span className="">0</span>
                    </div>

                    <div className="btn border">
                            <span className="dropdown-toggle text-nav" role="button"
                                  id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                               <MdOutlineAccountCircle className='text-h text-icon'/>
                            </span>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <RiLockPasswordLine className='text-h'/>
                                    <span className='ps-2'>Đổi mật khẩu</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center"
                                   href="#"><AiOutlineInfoCircle className='text-h'/>
                                    <span className='ps-2'>Thông tin cá nhân</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center"
                                   href="#"><MdOutlineChangeCircle className='text-h'/>
                                    <span className='ps-2'>Đổi thông tin</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="#"><IoMdLogIn className='text-h'/>
                                    <span className='ps-2'>Đăng xuất</span>
                                </a>
                            </li>
                            <li>
                                <Link to={"/login"} className="dropdown-item d-flex align-items-center" href="#"><IoMdLogIn className='text-h'/>
                                    <span className='ps-2'>Đăng nhập</span>
                                </Link>
                            </li>
                        </ul>
                    </div>


                    {/*<a href="" className="btn border">*/}
                    {/*    <FaRegUserCircle className='text-h text-icon'/>*/}
                    {/*</a>*/}
                </div>
            </div>
        </div>
    )
        ;
};

export default TopBar;