import React from 'react';
import {FaRegCreditCard, FaRegIdCard, FaRegUser} from "react-icons/fa";
import {Link} from "react-router-dom";
import {BsCartCheckFill, BsMessenger} from "react-icons/bs";
import { MdOutlineCircleNotifications, MdStorefront} from "react-icons/md";
import {RiBillLine, RiLockPasswordLine} from "react-icons/ri";
import {IoHeart} from "react-icons/io5";
import {TbShoppingBagEdit} from "react-icons/tb";
import {useSelector} from "react-redux";

const Sidebar = () => {
    const account = useSelector(state => state.auth.userLogin)
    return (
        <div className='col-3 position-fixed ps-5'>
            <div className='border rounded-5 bg-light' style={{height: 700}}>
                <ul className='text-24 mt-3 ms-0 text-black'>
                    <ol>
                        <FaRegUser className='text-color me-3 mb-2'/>
                        <Link to={`information`} className='text-decoration-none'>{account.firstname} {account.lastname}</Link>
                    </ol>
                    <ol>
                        <BsMessenger className='text-color me-3 mb-1'/>
                        <Link to={`message`} className='text-decoration-none '>Tin nhắn</Link>
                    </ol>
                    <ol>
                        <MdOutlineCircleNotifications className='text-color me-3 mb-1'/>
                        <Link to={`notification/`} className='text-decoration-none'>Thông báo</Link>
                    </ol>
                    <ol>
                        <RiLockPasswordLine className='text-color me-3 mb-1'/>
                        <Link to={"change-password"} className='text-decoration-none'>Đổi mật khẩu</Link></ol>
                    {/*<ol>*/}
                    {/*    <MdOutlineChangeCircle className='text-color me-3 mb-1'/>*/}
                    {/*    <Link to={"edit-info"} className='text-decoration-none'>Đổi thông tin cá nhân</Link></ol>*/}
                    <ol>
                        <IoHeart className='text-color me-3 mb-1'/>
                        <Link to={"favorite"} className='text-decoration-none'>Yêu thích</Link></ol>
                    <ol>
                        <BsCartCheckFill className='text-color me-3 mb-1'/>
                        <Link to={'carts'} className='text-decoration-none'>Giỏ hàng</Link></ol>
                    <ol>
                        <FaRegCreditCard className='text-color me-3 mb-1'/>
                        <Link to={"payment"} className='text-decoration-none'>Thanh toán</Link>
                    </ol>
                    <ol>
                        <FaRegIdCard className='text-color me-3 mb-1'/>
                        <Link to={"register-shop"} className='text-decoration-none'>Đăng ký gian hàng</Link>
                    </ol>
                    <ol>
                        <MdStorefront className='text-color me-3 mb-1'/>
                        <Link to={"shop-owner"} className='text-decoration-none'>Quản lý gian hàng</Link>
                    </ol>
                    <ol>
                        <RiBillLine className='text-color me-3 mb-1'/>
                        <Link to={"order"} className='text-decoration-none'>Đơn hàng</Link>
                    </ol>
                    <ol>
                        <TbShoppingBagEdit className='text-color me-3 mb-1'/>
                        <Link to={"order-detail"} className='text-decoration-none'>Chi tiết đơn hàng</Link>
                    </ol>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;