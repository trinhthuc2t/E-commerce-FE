import React, {useEffect, useState} from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import './text.css';
import {Virtual, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import { getAllProductsByCategoryId, getProductByAll} from "../Service/productService";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';
import {getAllCategory} from "../Service/categoryService";
import _ from "lodash";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import { FaEye } from "react-icons/fa";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [nameSearch, setNameSearch] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [colorId, setColorId] = useState(0);
    const [sizeId, setSizeId] = useState(0);
    const [page, setPage] = useState("");
    const [sort, setSort] = useState("");
    const [direction, setDirection] = useState("");
    const [selectedOptionPrice, setSelectedOptionPrice] = useState('all');

    useEffect(() => {
        getProductByAll(nameSearch, minPrice, maxPrice, colorId, sizeId, page, sort, direction).then(res => {
            setProducts(res.data.content)
        }).catch(err => console.log(err))
    }, [nameSearch, minPrice, maxPrice, colorId, sizeId, page, sort, direction])


    const handleNameSearch = (e) => {
        setNameSearch(e.target.value)
    }
    const handlePriceSearch = (e) => {
        const selectedValue = e.target.value;
        switch (selectedValue) {
            case 'all':
                setMinPrice(0);
                setMaxPrice(0);
                break;
            case '0-20':
                setMinPrice(0);
                setMaxPrice(20);
                break;
            case '20-50':
                setMinPrice(20);
                setMaxPrice(50);
                break;
            case '50-100':
                setMinPrice(50);
                setMaxPrice(100);
                break;
            case '100-120':
                setMinPrice(100);
                setMaxPrice(120);
                break;
            case '120':
                setMinPrice(120);
                setMaxPrice(0);
                break;
            default:
                break;
        }
        setSelectedOptionPrice(selectedValue);

    };

    const handleColorNameSearch = (e) => {
        setColorId(e.target.value)
    }
    const handleSort = (e) => {
        setSort(e.target.value)
    }
    const handleDirection = (e) => {
        setDirection(e.target.value)
    }
    const handleSizeNameSearch = (e) => {
        setSizeId(e.target.value)
    }
    const getAllProductsByCategory = (id) => {
        getAllProductsByCategoryId(id).then(res => {
            setProducts(res.data.content)
            console.log(res.data.content)
        }).catch((err => {
            console.log(err)
        }))
    }


    useEffect(() => {
        getAllCategory().then(res => {
            setCategories(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    useEffect(() => {
        const defaultOption = document.getElementById('size-all');
        defaultOption.checked = true;
        setSizeId(0);
    }, []);
    useEffect(() => {
        const defaultOption = document.getElementById('color-all');
        defaultOption.checked = true;
        setColorId(0);
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
                        // centeredSlides={true}
                        spaceBetween={10}
                        pagination={{
                            type: 'bullets',
                        }}
                        loop={true}
                        autoplay={{delay: 1000}}
                        navigation={true}
                        virtual
                    >
                        {!_.isEmpty(categories) && categories.map((c, index) => (
                            <SwiperSlide key={c} virtualIndex={index}>
                                <div className="pb-1" onClick={() => {
                                    getAllProductsByCategory(c.id)
                                }}>
                                    <div className="btn border mb-4">
                                        <div className=" position-relative overflow-hidden mb-3">
                                            <img className="img-fluid" src={c.image}
                                                 style={{height: 200, width: "300px"}}
                                                 alt="categories"/>
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
                                    <input type="radio" name="price" id="price-all" value="all"
                                           checked={selectedOptionPrice === 'all'}
                                           onChange={handlePriceSearch}/>
                                    <label className="custom-control-label ms-3" htmlFor="price-all">All Price</label>
                                </div>
                                <span className="border rounded px-1">1000</span>
                            </div>
                            <div
                                className=" d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="radio" name="price" id="price-2" value="0-20"
                                           onChange={handlePriceSearch}/>
                                    <label className="custom-control-label ms-3" htmlFor="price-2">$0 - $20</label>
                                </div>
                                <span className="border rounded px-1">150</span>
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="radio" name="price" id="price-3" value="20-50"
                                           onChange={handlePriceSearch}/>
                                    <label className="custom-control-label ms-3" htmlFor="price-3">$20 - $50</label>
                                </div>
                                <span className="border rounded px-1">150</span>
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="radio" name="price" id="price-4" value="50-100"
                                           onChange={handlePriceSearch}/>
                                    <label className="custom-control-label ms-3" htmlFor="price-4">$50 - $100</label>
                                </div>
                                <span className="border rounded px-1">150</span>
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="radio" name="price" id="price-5" value="100-120"
                                           onChange={handlePriceSearch}/>
                                    <label className="custom-control-label ms-3" htmlFor="price-5">$100 - $120</label>
                                </div>
                                <span className="border rounded px-1">150</span>
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="radio" name="price" id="price-6" value="120"
                                           onChange={handlePriceSearch}/>
                                    <label className="custom-control-label ms-3" htmlFor="price-6">Trên $120</label>
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
                                    <input type="radio" name="color" className="custom-control-input"
                                           id="color-all" value="0" onChange={handleColorNameSearch}/>
                                    <label className="custom-control-label ms-3" htmlFor="color-all">All Color</label>
                                </div>
                                <span className="border rounded px-1">1000</span>
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="radio" name="color" className="custom-control-input" id="color-1"
                                           value="1" onChange={handleColorNameSearch}/>
                                    <label className="custom-control-label ms-3" htmlFor="color-1">Black</label>
                                </div>
                                <span className="border rounded px-1">1000</span>
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="radio" name="color" className="custom-control-input" id="color-2"
                                           value="2" onChange={handleColorNameSearch}/>
                                    <label className="custom-control-label ms-3" htmlFor="color-2">White</label>
                                </div>
                                <span className="border rounded px-1">1000</span>
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="radio" name="color" className="custom-control-input" id="color-3"
                                           value="3" onChange={handleColorNameSearch}/>
                                    <label className="custom-control-label ms-3" htmlFor="color-3">Red</label>
                                </div>
                                <span className="border rounded px-1">1000</span>
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="radio" name="color" className="custom-control-input" id="color-4"
                                           value="4" onChange={handleColorNameSearch}/>
                                    <label className="custom-control-label ms-3" htmlFor="color-4">Blue</label>
                                </div>
                                <span className="border rounded px-1">1000</span>
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="radio" name="5" className="custom-control-input" id="color-5"
                                           value="Green" onChange={handleColorNameSearch}/>
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
                                    <input type="radio" name="size" className="custom-control-input"
                                           id="size-all" value="0" onChange={handleSizeNameSearch}/>
                                    <label className="custom-control-label ms-3" htmlFor="size-all">All Size</label>
                                </div>
                                <span className=" border rounded px-1">1000</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="radio" name="size" className="custom-control-input" id="size-1"
                                           value="5" onChange={handleSizeNameSearch}/>
                                    <label className="custom-control-label ms-3" htmlFor="size-1">XS</label>
                                </div>
                                <span className=" border rounded px-1">1000</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="radio" name="size" className="custom-control-input" id="size-2"
                                           value="4" onChange={handleSizeNameSearch}/>
                                    <label className="custom-control-label ms-3" htmlFor="size-2">S</label>
                                </div>
                                <span className=" border rounded px-1">1000</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="radio" name="size" className="custom-control-input" id="size-3"
                                           value="3" onChange={handleSizeNameSearch}/>
                                    <label className="custom-control-label ms-3" htmlFor="size-3">L</label>
                                </div>
                                <span className=" border rounded px-1">1000</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="radio" name="size" className="custom-control-input" id="size-4"
                                           value="2" onChange={handleSizeNameSearch}/>
                                    <label className="custom-control-label ms-3" htmlFor="size-4">XL</label>
                                </div>
                                <span className=" border rounded px-1">1000</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <input type="radio" name="size" className="custom-control-input" id="size-5"
                                           value="1" onChange={handleSizeNameSearch}/>
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
                            <div className="pb-1">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="col-8">
                                        <input type="text" className="form-control" placeholder="Search by name"
                                               onChange={handleNameSearch}/>
                                    </div>
                                    <div className='col-4 ms-0'>
                                        <button className='btn border rounded-3 px-2 mx-2' >
                                            Tất cả sản phẩm
                                        </button>
                                        <button className="btn border dropdown-toggle px-2 mx-2" type="button"
                                                id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Sắp xếp
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <button className="dropdown-item" value='sortTime'
                                                        onClick={handleSort}>Sản phẩm mới
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item" value='sortPrice'
                                                        onClick={handleSort}>Giá sản phẩm
                                                </button>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Mua nhiều</a></li>
                                            <li><a className="dropdown-item" href="#">Đánh giá</a></li>
                                        </ul>
                                        <button className="btn border dropdown-toggle px-2 mx-2" type="button"
                                                id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Sắp xếp
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <button className="dropdown-item" onClick={handleDirection}>Tăng dần
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item" onClick={handleDirection}>Giảm dần
                                                </button>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                            {
                                !_.isEmpty(products) ? products.map((product, index) => {
                                    return (
                                        <div className="col-lg-2 col-md-6 col-sm-12 pb-1" key={index}>
                                            <div className="card product-item border mb-4">
                                                    <div
                                                        className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                                        <img className="img-fluid w-100" src={product.thumbnail}
                                                             style={{height: 200}} alt=""/>
                                                    </div>
                                                    <div className="card-body border-left border-right text-center p-0">
                                                        <h6 className="text-truncate mb-1">{product.name}</h6>
                                                        <div className="d-flex justify-content-center">
                                                            <h6>{product.price.toLocaleString('vi', {currency: 'VND'})} VNĐ</h6>
                                                            <h6 className="text-muted ml-2">
                                                                <del>$123.00</del>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="card-footer bg-light">
                                                        <Link to={`/product-detail/${product.id}`} className="text-dark d-flex align-items-center text-decoration-none">
                                                            <FaEye className='text-color text-18 me-3'/>
                                                            <h5 className='mt-1'>Chi tiết</h5>
                                                        </Link>
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