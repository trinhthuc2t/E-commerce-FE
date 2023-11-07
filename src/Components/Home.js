import React, {useState} from 'react';
import "./Font-css.css"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';

import './swiper-css.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Home = () => {
    const [page, setPage] = useState(1)
    return (
        <div style={{paddingTop: 100}}>


            <div className='bg-white container-xxl my-5 py-3'>
                {/*Category Start*/}
                <div className="container">
                    <div className="row g-2 py-0">

                        <Swiper
                            slidesPerView={6}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="my-3">
                                    <p className="btn btn-outline-success border-white text-center rounded-4 my-0"
                                       href="">
                                        <div className="p-2">
                                            <div className="icon mb-3 rounded-circle bg-white ">
                                                <img className="img-fluid p-4" src="img/icon-apartment.png" alt="Icon"/>
                                            </div>
                                            <h6>Apartment</h6>
                                            <span className='text-color-css'>123 Properties</span>
                                        </div>
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" my-3">
                                    <p className="btn btn-outline-success border-white text-center rounded-4 my-0"
                                       href="">
                                        <div className="p-2">
                                            <div className="icon mb-3 rounded-circle bg-white ">
                                                <img className="img-fluid p-4" src="img/icon-villa.png" alt="Icon"/>
                                            </div>
                                            <h6>Villa</h6>
                                            <span>123 Properties</span>
                                        </div>
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" my-3">
                                    <p className="btn btn-outline-success border-white text-center rounded-4 my-0"
                                       href="">
                                        <div className="p-2">
                                            <div className="icon mb-3 rounded-circle bg-white ">
                                                <img className="img-fluid p-4" src="img/icon-house.png" alt="Icon"/>
                                            </div>
                                            <h6>Home</h6>
                                            <span>123 Properties</span>
                                        </div>
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" my-3">
                                    <p className="btn btn-outline-success border-white text-center rounded-4 my-0"
                                       href="">
                                        <div className="p-2">
                                            <div className="icon mb-3 rounded-circle bg-white ">
                                                <img className="img-fluid p-4" src="img/icon-housing.png" alt="Icon"/>
                                            </div>
                                            <h6>Office</h6>
                                            <span>123 Properties</span>
                                        </div>
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" my-3">
                                    <p className="btn btn-outline-success border-white text-center rounded-4 my-0"
                                       href="">
                                        <div className="p-2">
                                            <div className="icon mb-3 rounded-circle bg-white ">
                                                <img className="img-fluid p-4" src="img/icon-building.png" alt="Icon"/>
                                            </div>
                                            <h6>Building</h6>
                                            <span>123 Properties</span>
                                        </div>
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" my-3">
                                    <p className="btn btn-outline-success border-white text-center rounded-4 my-0"
                                       href="">
                                        <div className="p-2">
                                            <div className="icon mb-3 rounded-circle bg-white ">
                                                <img className="img-fluid p-4" src="img/icon-neighborhood.png"
                                                     alt="Icon"/>
                                            </div>
                                            <h6>Townhouse</h6>
                                            <span>123 Properties</span>
                                        </div>
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" my-3">
                                    <p className="btn btn-outline-success border-white text-center rounded-4 my-0"
                                       href="">
                                        <div className="p-2">
                                            <div className="icon mb-3 rounded-circle bg-white ">
                                                <img className="img-fluid p-4" src="img/icon-condominium.png"
                                                     alt="Icon"/>
                                            </div>
                                            <h6>Shop</h6>
                                            <span>123 Properties</span>
                                        </div>
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="my-3">
                                    <p className="btn btn-outline-success border-white text-center rounded-4 my-0"
                                       href="">
                                        <div className="p-2">
                                            <div className="icon mb-3 rounded-circle bg-white ">
                                                <img className="img-fluid p-4" src="img/icon-luxury.png" alt="Icon"/>
                                            </div>
                                            <h6>Garage</h6>
                                            <span>123 Properties</span>
                                        </div>
                                    </p>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                        {/*<div className="col-lg-2 col-sm-6 my-3">*/}
                        {/*    <p className="btn btn-outline-success border-white text-center rounded-4 my-0" href="">*/}
                        {/*        <div className="p-2">*/}
                        {/*            <div className="icon mb-3 rounded-circle bg-white ">*/}
                        {/*                <img className="img-fluid p-4" src="img/icon-apartment.png" alt="Icon"/>*/}
                        {/*            </div>*/}
                        {/*            <h6>Apartment</h6>*/}
                        {/*            <span className='text-color-css'>123 Properties</span>*/}
                        {/*        </div>*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-2 col-sm-6 my-3">*/}
                        {/*    <p className="btn btn-outline-success border-white text-center rounded-4 my-0" href="">*/}
                        {/*        <div className="p-2">*/}
                        {/*            <div className="icon mb-3 rounded-circle bg-white ">*/}
                        {/*                <img className="img-fluid p-4" src="img/icon-villa.png" alt="Icon"/>*/}
                        {/*            </div>*/}
                        {/*            <h6>Villa</h6>*/}
                        {/*            <span>123 Properties</span>*/}
                        {/*        </div>*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-2 col-sm-6 my-3">*/}
                        {/*    <p className="btn btn-outline-success border-white text-center rounded-4 my-0" href="">*/}
                        {/*        <div className="p-2">*/}
                        {/*            <div className="icon mb-3 rounded-circle bg-white ">*/}
                        {/*                <img className="img-fluid p-4" src="img/icon-house.png" alt="Icon"/>*/}
                        {/*            </div>*/}
                        {/*            <h6>Home</h6>*/}
                        {/*            <span>123 Properties</span>*/}
                        {/*        </div>*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-2 col-sm-6 my-3">*/}
                        {/*    <p className="btn btn-outline-success border-white text-center rounded-4 my-0" href="">*/}
                        {/*        <div className="p-2">*/}
                        {/*            <div className="icon mb-3 rounded-circle bg-white ">*/}
                        {/*                <img className="img-fluid p-4" src="img/icon-housing.png" alt="Icon"/>*/}
                        {/*            </div>*/}
                        {/*            <h6>Office</h6>*/}
                        {/*            <span>123 Properties</span>*/}
                        {/*        </div>*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-2 col-sm-6 my-3">*/}
                        {/*    <p className="btn btn-outline-success border-white text-center rounded-4 my-0" href="">*/}
                        {/*        <div className="p-2">*/}
                        {/*            <div className="icon mb-3 rounded-circle bg-white ">*/}
                        {/*                <img className="img-fluid p-4" src="img/icon-building.png" alt="Icon"/>*/}
                        {/*            </div>*/}
                        {/*            <h6>Building</h6>*/}
                        {/*            <span>123 Properties</span>*/}
                        {/*        </div>*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-2 col-sm-6 my-3">*/}
                        {/*    <p className="btn btn-outline-success border-white text-center rounded-4 my-0" href="">*/}
                        {/*        <div className="p-2">*/}
                        {/*            <div className="icon mb-3 rounded-circle bg-white ">*/}
                        {/*                <img className="img-fluid p-4" src="img/icon-neighborhood.png" alt="Icon"/>*/}
                        {/*            </div>*/}
                        {/*            <h6>Townhouse</h6>*/}
                        {/*            <span>123 Properties</span>*/}
                        {/*        </div>*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-2 col-sm-6 my-3">*/}
                        {/*    <p className="btn btn-outline-success border-white text-center rounded-4 my-0" href="">*/}
                        {/*        <div className="p-2">*/}
                        {/*            <div className="icon mb-3 rounded-circle bg-white ">*/}
                        {/*                <img className="img-fluid p-4" src="img/icon-condominium.png" alt="Icon"/>*/}
                        {/*            </div>*/}
                        {/*            <h6>Shop</h6>*/}
                        {/*            <span>123 Properties</span>*/}
                        {/*        </div>*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-2 col-sm-6 my-3">*/}
                        {/*    <p className="btn btn-outline-success border-white text-center rounded-4 my-0" href="">*/}
                        {/*        <div className="p-2">*/}
                        {/*            <div className="icon mb-3 rounded-circle bg-white ">*/}
                        {/*                <img className="img-fluid p-4" src="img/icon-luxury.png" alt="Icon"/>*/}
                        {/*            </div>*/}
                        {/*            <h6>Garage</h6>*/}
                        {/*            <span>123 Properties</span>*/}
                        {/*        </div>*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>


            {/*Category End*/}

            {/*Search Start*/}
            <div className="container-fluid mb-5 background-color-css" data-wow-delay="0.1s"
                 style={{padding: "35px"}}>
                <div className="container">
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-4">
                                    <input type="text" className="form-control border-0 py-3"
                                           placeholder="Search Keyword"/>
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select border-0 py-3">
                                        <option selected>Property Type</option>
                                        <option value="1">Property Type 1</option>
                                        <option value="2">Property Type 2</option>
                                        <option value="3">Property Type 3</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select border-0 py-3">
                                        <option selected>Location</option>
                                        <option value="1">Location 1</option>
                                        <option value="2">Location 2</option>
                                        <option value="3">Location 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-dark border-0 w-100 py-3">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*Search End*/}

            {/*Property List Start*/}
            <div className="container-xxl bg-white py-4">
                <div className="container">
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6">
                                    <div className="property-item rounded mx-0">
                                        <div className="position-relative">
                                            <a href=""><img className="img-fluid" src="img/property-1.jpg" alt=""/></a>
                                            <div
                                                className="background-color-css rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For
                                                Sell
                                            </div>
                                            <div
                                                className="rounded-top text-color-css position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment
                                            </div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-color-css mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-color-css me-2"></i>123
                                                Street, New
                                                York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i
                                                className="fa fa-ruler-combined text-color-css me-2"></i>1000
                                                Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i
                                                className="fa fa-bed text-color-css me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i
                                                className="fa fa-bath text-color-css me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href=""><img className="img-fluid" src="img/property-2.jpg" alt=""/></a>
                                            <div
                                                className="background-color-css rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For
                                                Rent
                                            </div>
                                            <div
                                                className="bg-white rounded-top text-color-css position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa
                                            </div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-color-css mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-color-css me-2"></i>123
                                                Street, New
                                                York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i
                                                className="fa fa-ruler-combined text-color-css me-2"></i>1000
                                                Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i
                                                className="fa fa-bed text-color-css me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i
                                                className="fa fa-bath text-color-css me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href=""><img className="img-fluid" src="img/property-3.jpg" alt=""/></a>
                                            <div
                                                className="background-color-css rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For
                                                Sell
                                            </div>
                                            <div
                                                className="bg-white rounded-top text-color-css position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office
                                            </div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-color-css mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-color-css me-2"></i>123
                                                Street, New
                                                York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i
                                                className="fa fa-ruler-combined text-color-css me-2"></i>1000
                                                Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i
                                                className="fa fa-bed text-color-css me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i
                                                className="fa fa-bath text-color-css me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href=""><img className="img-fluid" src="img/property-4.jpg" alt=""/></a>
                                            <div
                                                className="background-color-css rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For
                                                Rent
                                            </div>
                                            <div
                                                className="bg-white rounded-top text-color-css position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building
                                            </div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-color-css mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-color-css me-2"></i>123
                                                Street, New
                                                York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i
                                                className="fa fa-ruler-combined text-color-css me-2"></i>1000
                                                Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i
                                                className="fa fa-bed text-color-css me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i
                                                className="fa fa-bath text-color-css me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href=""><img className="img-fluid" src="img/property-5.jpg" alt=""/></a>
                                            <div
                                                className="background-color-css rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For
                                                Sell
                                            </div>
                                            <div
                                                className="bg-white rounded-top text-color-css position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home
                                            </div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-color-css mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-color-css me-2"></i>123
                                                Street, New
                                                York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i
                                                className="fa fa-ruler-combined text-color-css me-2"></i>1000
                                                Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i
                                                className="fa fa-bed text-color-css me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i
                                                className="fa fa-bath text-color-css me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href=""><img className="img-fluid" src="img/property-6.jpg" alt=""/></a>
                                            <div
                                                className="background-color-css rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For
                                                Rent
                                            </div>
                                            <div
                                                className="bg-white rounded-top text-color-css position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop
                                            </div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-color-css mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-color-css me-2"></i>123
                                                Street, New
                                                York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i
                                                className="fa fa-ruler-combined text-color-css me-2"></i>1000
                                                Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i
                                                className="fa fa-bed text-color-css me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i
                                                className="fa fa-bath text-color-css me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <br/>
                {/*{!_.isEmpty(accounts) ?*/}
                {/*<div className="col-12 mt-5 d-flex justify-content-center">*/}
                {/*    <Pagination size="lg">{5}</Pagination>*/}

                {/*    <Pagination count={10} size="large" variant="outlined" shape="rounded"*/}
                {/*                color="primary"/>*/}
                {/*    <Pagination>*/}
                {/*        <Pagination.First/>*/}
                {/*        <Pagination.Prev/>*/}
                {/*        <Pagination.Item>{1}</Pagination.Item>*/}
                {/*        <Pagination.Ellipsis/>*/}

                {/*        <Pagination.Item>{10}</Pagination.Item>*/}
                {/*        <Pagination.Item>{11}</Pagination.Item>*/}
                {/*        <Pagination.Item active>{12}</Pagination.Item>*/}
                {/*        <Pagination.Item>{13}</Pagination.Item>*/}
                {/*        <Pagination.Item disabled>{14}</Pagination.Item>*/}

                {/*        <Pagination.Ellipsis/>*/}
                {/*        <Pagination.Item>{20}</Pagination.Item>*/}
                {/*        <Pagination.Next/>*/}
                {/*        <Pagination.Last/>*/}
                {/*    </Pagination>*/}
                {/*</div>*/}
                {/*    :*/}
                {/*    null*/}
                {/*}*/}
            </div>
            {/*Property List End*/}


            {/*Team Start*/}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/team-1.jpg" alt=""/>
                                    <div
                                        className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                        <a className="btn btn-square mx-1" href=""><i
                                            className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square mx-1" href=""><i
                                            className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square mx-1" href=""><i
                                            className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4 mt-3">
                                    <h5 className="fw-bold mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/team-2.jpg" alt=""/>
                                    <div
                                        className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                        <a className="btn btn-square mx-1" href=""><i
                                            className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square mx-1" href=""><i
                                            className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square mx-1" href=""><i
                                            className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4 mt-3">
                                    <h5 className="fw-bold mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/team-3.jpg" alt=""/>
                                    <div
                                        className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                        <a className="btn btn-square mx-1" href=""><i
                                            className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square mx-1" href=""><i
                                            className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square mx-1" href=""><i
                                            className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4 mt-3">
                                    <h5 className="fw-bold mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/team-4.jpg" alt=""/>
                                    <div
                                        className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                        <a className="btn btn-square mx-1" href=""><i
                                            className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square mx-1" href=""><i
                                            className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square mx-1" href=""><i
                                            className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4 mt-3">
                                    <h5 className="fw-bold mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Team End*/}
        </div>
    );
};

export default Home;