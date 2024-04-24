import React from 'react';
import {IoCheckmarkDone} from "react-icons/io5";
import {FaExchangeAlt, FaPhoneVolume, FaShippingFast} from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <div className="container-fluid mb-5 pt-100">
                <div className="row border-top px-xl-5">
                    <div className="col-lg-3 pt-4">
                        <div className="row px-xl-5 pb-3 d-flex flex-column">
                            <div className="pb-1">
                                <div className="d-flex align-items-center border mb-4 p-3">
                                    <h1 className="px-4"><IoCheckmarkDone className='text-color'/></h1>
                                    <h5 className="m-0">Sản phẩm chất lượng</h5>
                                </div>
                            </div>
                            <div className="pb-1">
                                <div className="d-flex align-items-center border mb-4 p-3">
                                    <h1 className="px-4"><FaShippingFast className='text-color'/>
                                    </h1>
                                    <h5 className="font-weight-semi-bold m-0">Miễn phí vận chuyển</h5>
                                </div>
                            </div>
                            <div className="pb-1">
                                <div className="d-flex align-items-center border mb-4 p-3">
                                    <h1 className="px-4"><FaExchangeAlt className='text-color'/>
                                    </h1>
                                    <h5 className="font-weight-semi-bold m-0">Hoàn trả trong 14 ngày</h5>
                                </div>
                            </div>
                            <div className="pb-1">
                                <div className="d-flex align-items-center border mb-4 p-3">
                                    <h1 className="px-4"><FaPhoneVolume className='text-color'/>
                                    </h1>
                                    <h5 className="font-weight-semi-bold m-0">Hỗ trợ 24/7</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9 mt-4">

                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="1000">
                                    <img
                                        src="https://img.freepik.com/premium-vector/end-season-summer-sale-banner-with-photo_16148-1226.jpg"
                                        className="d-block w-100 img-banner" alt="..."/>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img
                                        src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/258417769/original/92f82ed031171c1a0322acd3a37772bc37c735be/amazing-banner-design-for-ads.jpg"
                                        className="d-block w-100 img-banner" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://www.hongha.com.vn/Upload/images/banner-01.png"
                                        className="d-block w-100 img-banner" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
        ;
};

export default Navbar;
