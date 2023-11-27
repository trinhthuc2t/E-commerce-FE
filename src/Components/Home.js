import React, {useEffect, useState} from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import './text.css';
import {Virtual, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {getAllProducts} from "../service/productService";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';
import {getAllCategory} from "../service/categoryService";
import _ from "lodash";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);


const getAllProductsByCategory = (id) => {

}
    useEffect(() => {
        getAllProducts().then(res => {
            setProducts(res.data.content)
        }).catch((err) => {
            console.log(err);
        })

    }, []);
    useEffect(() => {
        getAllCategory().then(res => {
            setCategories(res.data)
            console.log(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    return (
        <div>
            <Navbar/>

            {/*Categories Start*/}
            <div className="container-fluid pt-1">
                <div className="row px-xl-5 pb-3">
                    <Swiper
                        modules={[Virtual, Navigation, Pagination]}
                        slidesPerView={5}
                        centeredSlides={true}
                        spaceBetween={10}
                        pagination={{
                            type: 'bullets',
                        }}
                        navigation={true}
                        virtual
                    >
                        {categories.map((c, index) => (
                            <SwiperSlide key={c} virtualIndex={index}>
                                <div className="pb-1" onClick={getAllProductsByCategory(c.id)}>
                                    <div className="border mb-4">
                                        <div className=" position-relative overflow-hidden mb-3">
                                            <img className="img-fluid" src={c.image}
                                                 style={{height: 200, width: "300px"}}
                                                 alt=""/>
                                        </div>
                                        <h5 className="font-weight-semi-bold m-0 mb-3">{c.name}</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
            {/*Categories End*/}


            {/*Shop Start*/}
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    {/*Shop Sidebar Start*/}
                    <div className="col-lg-2 col-md-12 mt-2">
                        {/*Price Start*/}
                        <div className="border-bottom mb-4 pb-4">
                            <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" className="" checked id="price-all"/>
                                    <label className="custom-control-label ms-3" htmlFor="price-all">All Price</label>
                                </div>
                                <span className="border rounded px-1">1000</span>
                            </div>
                            <div
                                className=" d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" id="price-2"/>
                                    <label className="custom-control-label ms-3" htmlFor="price-2">$0 - $100</label>
                                </div>
                                <span className="border rounded px-1">150</span>
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" id="price-3"/>
                                    <label className="custom-control-label ms-3" htmlFor="price-3">$0 - $100</label>
                                </div>
                                <span className="border rounded px-1">150</span>
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" id="price-4"/>
                                    <label className="custom-control-label ms-3" htmlFor="price-4">$0 - $100</label>
                                </div>
                                <span className="border rounded px-1">150</span>
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" id="price-5"/>
                                    <label className="custom-control-label ms-3" htmlFor="price-5">$0 - $100</label>
                                </div>
                                <span className="border rounded px-1">150</span>
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" id="price-6"/>
                                    <label className="custom-control-label ms-3" htmlFor="price-6">$0 - $100</label>
                                </div>
                                <span className="border rounded px-1">150</span>
                            </div>

                        </div>
                        {/*Price End*/}

                        {/*Color Start*/}
                        <div className="border-bottom mb-4 pb-4">
                            <h5 className="font-weight-semi-bold mb-4">Filter by color</h5>
                            <div
                                className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" className="custom-control-input" checked id="color-all"/>
                                    <label className="custom-control-label ms-3" htmlFor="price-all">All Color</label>
                                </div>
                                <span className="border rounded px-1">1000</span>
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" className="custom-control-input" id="color-1"/>
                                    <label className="custom-control-label ms-3" htmlFor="color-1">Black</label>
                                </div>
                                <span className="border rounded px-1">1000</span>
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" className="custom-control-input" id="color-2"/>
                                    <label className="custom-control-label ms-3" htmlFor="color-2">White</label>
                                </div>
                                <span className="border rounded px-1">1000</span>
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" className="custom-control-input" id="color-3"/>
                                    <label className="custom-control-label ms-3" htmlFor="color-3">Red</label>
                                </div>
                                <span className="border rounded px-1">1000</span>
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" className="custom-control-input" id="color-4"/>
                                    <label className="custom-control-label ms-3" htmlFor="color-4">Blue</label>
                                </div>
                                <span className="border rounded px-1">1000</span>
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" className="custom-control-input" id="color-5"/>
                                    <label className="custom-control-label ms-3" htmlFor="color-5">Green</label>
                                </div>
                                <span className="border rounded px-1">1000</span>
                            </div>

                        </div>
                        {/*Color End*/}

                        {/*Size Start*/}
                        <div className="mb-5">
                            <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" className="custom-control-input" checked id="size-all"/>
                                    <label className="custom-control-label ms-3" htmlFor="size-all">All Size</label>
                                </div>
                                <span className=" border rounded px-1">1000</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" className="custom-control-input" id="size-1"/>
                                    <label className="custom-control-label ms-3" htmlFor="size-1">XS</label>
                                </div>
                                <span className=" border rounded px-1">1000</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" className="custom-control-input" id="size-2"/>
                                    <label className="custom-control-label ms-3" htmlFor="size-2">S</label>
                                </div>
                                <span className=" border rounded px-1">1000</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" className="custom-control-input" id="size-3"/>
                                    <label className="custom-control-label ms-3" htmlFor="size-3">L</label>
                                </div>
                                <span className=" border rounded px-1">1000</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" className="custom-control-input" id="size-4"/>
                                    <label className="custom-control-label ms-3" htmlFor="size-4">XL</label>
                                </div>
                                <span className=" border rounded px-1">1000</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" className="custom-control-input" id="size-5"/>
                                    <label className="custom-control-label ms-3" htmlFor="size-5">XXL</label>
                                </div>
                                <span className=" border rounded px-1">1000</span>
                            </div>
                        </div>
                        {/*Size End*/}
                    </div>
                    {/*Shop Sidebar End*/}


                    {/*Shop Product Start*/}
                    <div className="col-lg-10 col-md-12">
                        <div className="row pb-3">
                            <div className="col-12 pb-1">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="input-group w-75">
                                        <input type="text" className="form-control" placeholder="Search by name"/>
                                    </div>
                                    <div className="dropdown">
                                        <button className="btn border px-5 dropdown-toggle" type="button"
                                                id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Sort by
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Latest</a></li>
                                            <li><a className="dropdown-item" href="#">Popularity</a></li>
                                            <li><a className="dropdown-item" href="#">Best Rating</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                            {
                                !_.isEmpty(products) ? products.map((produc, index) => {
                                    return (
                                        <div className="col-lg-2 col-md-6 col-sm-12 pb-1" key={index}>
                                            <div className="card product-item border mb-4">
                                                <div
                                                    className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                                    <img className="img-fluid w-100" src={produc.thumbnail}
                                                         style={{height: 200}} alt=""/>
                                                </div>
                                                <div
                                                    className="card-body border-left border-right text-center p-0 pt-1 pb-1">
                                                    <h6 className="text-truncate mb-1">{produc.name}</h6>
                                                    <div className="d-flex justify-content-center">
                                                        <h6>{produc.price}</h6>
                                                        <h6 className="text-muted ml-2">
                                                            <del>$123.00</del>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div
                                                    className="card-footer d-flex justify-content-between bg-light border">
                                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                                        className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                                        className="fas fa-shopping-cart text-primary mr-1"></i>Add To
                                                        Cart</a>
                                                </div>
                                            </div>
                                        </div>


                                    )
                                }) : <h1>Chưa có sản phẩm nào</h1>
                            }


                            <div className="col-12 pb-1">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center mb-3">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/*Shop Product End*/}
                </div>
            </div>
            {/*Shop End*/}


            <div>

            </div>

        </div>
    )
        ;
};

export default Home;