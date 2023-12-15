import React from 'react';
import "./text.css"
import {FaFacebookMessenger, FaShoppingCart} from "react-icons/fa";
import {IoHeart, IoMenu, IoNotifications} from "react-icons/io5";
import {RiLockPasswordLine} from "react-icons/ri";
import {MdOutlineAccountCircle, MdOutlineChangeCircle} from "react-icons/md";
import {AiOutlineInfoCircle} from "react-icons/ai";
import {IoIosHeart, IoMdLogIn} from "react-icons/io";
import {Link} from "react-router-dom";
import {BsCartCheckFill} from "react-icons/bs";

const TopBar = () => {
    const handleLogout = () => {
        localStorage.removeItem("account");
    }
    return (
        // <div className="container-fluid">
        //     <div className="row align-items-center py-3 pt-3">
        //         <div className="col-lg-3 d-none d-lg-block">
        //             <Link to={"/"} className="text-decoration-none">
        //                 <h1 className="m-0 display-5 fw-bold text-dark"><span
        //                     className="text-color border px-3 mr-1">E</span>Shopper</h1>
        //             </Link>
        //         </div>
        //         <div className="col-lg-6 col-6 text-left">
        //             <div className="input-group">
        //                 <input type="text" className="form-control border rounded-5" placeholder="Search for products"/>
        //             </div>
        //         </div>
        //         <div className="col-lg-3 col-6 text-right align-items-center">
        //             <div className="btn border rounded-5 text-color text-30 me-1">
        //                 <IoHeart className='text-color text-30'/>
        //                 <span className="">0</span>
        //             </div>
        //             <div className="btn border  m-1">
        //                 <FaShoppingCart className='text-color text-30'/>
        //                 <span className="">0</span>
        //             </div>
        //
        //             <div className="btn border rounded-5">
        //                     <span className="dropdown-toggle text-nav text-color" role="button"
        //                           id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        //                        <MdOutlineAccountCircle className='text-30'/>
        //                        <IoMenu className='text-30'/>
        //                     </span>
        //
        //                 <ul className="dropdown-menu mt-3" aria-labelledby="dropdownMenuLink">
        //                     <li>
        //                         <a className="dropdown-item d-flex align-items-center" href="#">
        //                             <RiLockPasswordLine className='text-color'/>
        //                             <span className='ps-2'>Đổi mật khẩu</span>
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a className="dropdown-item d-flex align-items-center"
        //                            href="#"><AiOutlineInfoCircle className='text-color'/>
        //                             <span className='ps-2'>Thông tin cá nhân</span>
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a className="dropdown-item d-flex align-items-center"
        //                            href="#"><MdOutlineChangeCircle className='text-color'/>
        //                             <span className='ps-2'>Đổi thông tin</span>
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <Link to={"/login"} className="dropdown-item d-flex align-items-center" onClick={handleLogout}><IoMdLogIn className='text-color'/>
        //                             <span className='ps-2'>Đăng xuất</span>
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link to={"/login"} className="dropdown-item d-flex align-items-center" href="#"><IoMdLogIn className='text-color'/>
        //                             <span className='ps-2'>Đăng nhập</span>
        //                         </Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //
        //
        //             {/*<a href="" className="btn border">*/}
        //             {/*    <FaRegUserCircle className='text-color text-30'/>*/}
        //             {/*</a>*/}
        //         </div>
        //     </div>
        // </div>


        <div className="container-fluid fixed-top bg-light">
            <div className="row align-items-center py-3 pt-3">
                <div className="col-lg-3 d-none d-lg-block">
                    <Link to={"/"} className="text-decoration-none">
                        <h1 className="m-0 display-5 fw-bold text-dark"><span
                            className="text-color border px-3 mr-1">E</span>Shopper</h1>
                    </Link>
                </div>
                <div className="col-lg-6 col-6 text-left">
                    <div className="input-group">
                        <input type="text" className="form-control border rounded-5" placeholder="Search for products"/>
                    </div>
                </div>
                <div className="col-lg-3 col-6 text-right d-flex justify-content-end pe-5">
                    <div className='d-flex justify-content-ecenter me-3 mt-2'>
                        <div className=" position-relative me-3">
                            <BsCartCheckFill className='text-color text-28'/> <span
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
                        </div>
                        <div className=" position-relative me-3">
                            <IoIosHeart className='text-color text-30'/> <span
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
                        </div>
                        <div className=" position-relative me-3">
                            <FaFacebookMessenger className='text-color text-28'/> <span
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
                        </div>
                        <div className=" position-relative me-3">
                            <IoNotifications className='text-color text-30'/> <span
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
                        </div>
                    </div>
                    <div className="btn border rounded-5">
                            <span className="dropdown-toggle text-nav text-color" role="button"
                                  id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                               <MdOutlineAccountCircle className='text-32'/>
                               <IoMenu className='text-32'/>
                            </span>

                        <ul className="dropdown-menu mt-3" aria-labelledby="dropdownMenuLink">
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <RiLockPasswordLine className='text-color'/>
                                    <span className='ps-2'>Đổi mật khẩu</span>
                                </a>
                            </li>
                            <li>
                                <Link to={"/profile/information"} className="dropdown-item d-flex align-items-center"
                                   href="#"><AiOutlineInfoCircle className='text-color'/>
                                    <span className='ps-2'>Thông tin cá nhân</span>
                                </Link>
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center"
                                   href="#"><MdOutlineChangeCircle className='text-color'/>
                                    <span className='ps-2'>Đổi thông tin</span>
                                </a>
                            </li>
                            <li>
                                <Link to={"/login"} className="dropdown-item d-flex align-items-center"
                                      onClick={handleLogout}><IoMdLogIn className='text-color'/>
                                    <span className='ps-2'>Đăng xuất</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/login"} className="dropdown-item d-flex align-items-center"
                                      href="#"><IoMdLogIn className='text-color'/>
                                    <span className='ps-2'>Đăng nhập</span>
                                </Link>
                            </li>
                        </ul>
                    </div>


                    {/*<a href="" className="btn border">*/}
                    {/*    <FaRegUserCircle className='text-color text-30'/>*/}
                    {/*</a>*/}
                </div>
            </div>
        </div>

    )
        ;
};

export default TopBar;