import React, {useEffect, useState} from 'react';
import {getAllImageByProductId, getProductById} from "../../Service/productService";
import {useParams} from "react-router-dom";
import _ from "lodash";
import {SlMinus, SlPlus} from "react-icons/sl";
import {BsFillCartPlusFill} from "react-icons/bs";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import Swal from "sweetalert2";
import {avgRate, getReviewByProductId} from "../../Service/reviewService";
import StarsReview from "./StarReview";
import {formatTimeAgo} from "../../Validate/formatTimeAgo";
import {FaStar} from "react-icons/fa";

const ProductsDetail = () => {
    const [product, setProduct] = useState({});
    const [productDetail, setProductDetail] = useState({});
    const [images, setImages] = useState([]);
    const [sizeId, setSizeId] = useState(0);
    const [colorId, setColorId] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [reviews, setReviews] = useState([]);
    const [avg, setAvgRate] = useState([]);
    const {productId} = useParams();
    const [cart, setCart] = useState(localStorage.getItem('cart') == null ? [] : JSON.parse(localStorage.getItem('cart')))


    const addToCart = (product) => {
        const existingCartItemIndex = cart.findIndex((item) => item.id === product.id);
        if (existingCartItemIndex !== -1) {
            const updateCart = cart.map((item, index) => index === existingCartItemIndex ? {
                ...product,
                quantity: item.quantity + quantity
            } : item);

            setCart(updateCart);
            localStorage.setItem('cart', JSON.stringify(updateCart));
        } else {
            const updateCart = [...cart, {...product, quantity: quantity}];
            setCart(updateCart);
            localStorage.setItem('cart', JSON.stringify(updateCart));
        }
        setQuantity(1)
        Swal.fire({
            icon: 'success',
            title: 'Thêm giỏ hàng thành công !',
            showConfirmButton: false,
            timer: 1500
        })
    }
    const checkProduct = (product) => {
        if (productDetail == null) {
            Swal.fire({
                icon: 'error',
                title: 'Vui lòng chọn loại sản phẩm!',
                showConfirmButton: false,
                timer: 1500
            })
        } else if (productDetail.quantity < quantity) {
            Swal.fire({
                icon: 'error',
                title: 'Số lượng hàng không đủ!',
                showConfirmButton: false,
                timer: 1500
            })
            setQuantity(productDetail.quantity)
        } else {
            addToCart(product)
        }
    }

    useEffect(() => {
        getProductById(productId, colorId, sizeId).then((res => {
            setProductDetail(res.data);
            console.log(res.data);
        })).catch((err => {
            console.log(err);
        }))
    }, [colorId, productId, sizeId])

    useEffect(() => {
        avgRate(productId).then((res => {
            setAvgRate(res.data);
            console.log(res);
        })).catch((err => {
            console.log(err);
        }))
    }, [])
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        getAllImageByProductId(productId).then((res => {
            setImages(res.data);
            setProduct(res.data[0].product);
        })).catch((err => {
            console.log(err);
        }))
    }, [])

    useEffect(() => {
        getReviewByProductId(productId).then((res => {
            setReviews(res.data.content)
            console.log(res.data.content)
        })).catch(err => console.log(err))
    }, [])
    const handleCheckSize = (e) => {
        setSizeId(e.target.value)
    }
    const handleCheckColor = (e) => {
        setColorId(e.target.value)
    }
    const handleInput = (e) => {
        setQuantity(e.target.value)
    }
    const handleIncreases = (e) => {
        setQuantity(quantity + 1)
    }
    const handleReduced = (e) => {
        setQuantity(quantity - 1)
    }

    return (
        <div className='container pt-100'>
            {/*Shop Detail Start*/}
            <div className="container py-5">

                <div className="row px-xl-5">
                    <div className="col-lg-5 pb-5">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <div className="carousel-inner border">
                                {
                                    !_.isEmpty(images) ? images.map((img, index) => {
                                        return (
                                            <div key={index}>
                                                <SwiperSlide>
                                                    <img src={img.imageUrl} alt="Image"/>
                                                </SwiperSlide>
                                            </div>
                                        )
                                    }) : <h1>is Null</h1>
                                }
                            </div>
                        </Swiper>
                        <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                            <i className="fa fa-2x fa-angle-left text-dark"></i>
                        </a>
                        <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                            <i className="fa fa-2x fa-angle-right text-dark"></i>
                        </a>
                    </div>

                    <div className="col-lg-7 pb-5 text-left mt-4">
                        {product && product.name ? (
                            <>
                                <h3>{product.name}</h3>
                                <div className="d-flex mb-3">
                                    <div className="text-primary mr-2">
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star-half-alt"></small>
                                        <small className="far fa-star"></small>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <b className="pt-1 text-primary text-18 me-2 mt-1">{avg.toFixed(1)}</b>
                                        <small className="pt-1 text-primary text-18"><StarsReview rating={avg}/></small>
                                    </div>
                                </div>
                                <h3 className="mb-4">{product.price.toLocaleString('vi', {currency: 'VND'})} VNĐ</h3>
                                <p className="mb-4">{product.description}</p>
                                <div className="d-flex mb-3">
                                    <p className="mb-0 me-3">Sizes:</p>
                                    <form className='d-flex'>
                                        <div className="me-3">
                                            <input type="radio" className="me-1 form-check-inline" id="size-1"
                                                   name="size" value={1} onChange={handleCheckSize}/>
                                            <label className="form-label" htmlFor="size-1">XS</label>
                                        </div>
                                        <div className="me-3">
                                            <input type="radio" className="me-1 form-check-inline" id="size-2"
                                                   name="size" value={2} onChange={handleCheckSize}/>
                                            <label className="form-label" htmlFor="size-2">S</label>
                                        </div>
                                        <div className="me-3">
                                            <input type="radio" className="me-1 form-check-inline" id="size-3"
                                                   name="size" value={3} onChange={handleCheckSize}/>
                                            <label className="form-label me-1" htmlFor="size-3">M</label>
                                        </div>
                                        <div className="me-3">
                                            <input type="radio" className="me-1 form-check-inline" id="size-4"
                                                   name="size" value={4} onChange={handleCheckSize}/>
                                            <label className="me-1 form-label" htmlFor="size-4">L</label>
                                        </div>
                                        <div className="">
                                            <input type="radio" className="me-1 form-check-inline" id="size-5"
                                                   name="size" value={5} onChange={handleCheckSize}/>
                                            <label className="form-label" htmlFor="size-5">XL</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="d-flex">
                                    <p className="mb-0 me-3">Colors:</p>
                                    <form className='d-flex'>
                                        <div className="me-3">
                                            <input type="radio" className="form-check-inline me-1" id="color-1"
                                                   name="color" value={1} onChange={handleCheckColor}/>
                                            <label className="form-label" htmlFor="color-1">Black</label>
                                        </div>
                                        <div className="me-3">
                                            <input type="radio" className="form-check-inline me-1" id="color-2"
                                                   name="color" value={2} onChange={handleCheckColor}/>
                                            <label className="form-label" htmlFor="color-2">White</label>
                                        </div>
                                        <div className="me-3">
                                            <input type="radio" className="form-check-inline me-1" id="color-3"
                                                   name="color" value={3} onChange={handleCheckColor}/>
                                            <label className="form-label" htmlFor="color-3">Red</label>
                                        </div>
                                        <div className="me-3">
                                            <input type="radio" className="form-check-inline me-1" id="color-4"
                                                   name="color" value={4} onChange={handleCheckColor}/>
                                            <label className="form-label" htmlFor="color-4">Blue</label>
                                        </div>
                                        <div className="me-3">
                                            <input type="radio" className="form-check-inline me-1" id="color-5"
                                                   name="color" value={5} onChange={handleCheckColor}/>
                                            <label className="form-label" htmlFor="color-5">Green</label>
                                        </div>
                                    </form>
                                </div>
                                <div className='text-danger mb-3'>
                                    {sizeId !== 0 && colorId !== 0 ?
                                        <div>
                                            {!_.isEmpty(productDetail) ?
                                                <h4 style={productDetail.quantity === 0 ? {color: "red"} : {color: "blue"}}>{productDetail.quantity !== 0 ? "Còn hàng: " + productDetail.quantity : "Hết hàng"}</h4>
                                                :
                                                <h4>Sản phẩm không có sẵn</h4>
                                            }
                                        </div> : ""
                                    }
                                    <div className='align-content-center mt-3'>
                                        <div className="me-5 d-flex mb-3">
                                            <button className="btn border me-1">
                                                <SlMinus className='text-30 text-color'
                                                         onClick={handleReduced}/>
                                            </button>
                                            <div className='me-1'>
                                                <input type="text"
                                                       className="form-control text-center me-1 py-2"
                                                       value={quantity}
                                                       onChange={handleInput}/>
                                            </div>

                                            <button className="btn border">
                                                <SlPlus className='text-30 text-color'
                                                        onClick={handleIncreases}/>
                                            </button>
                                        </div>
                                        <div>
                                            <button className="btn border me-5 d-flex align-items-center"
                                                    onClick={() => checkProduct(product)}>
                                                <BsFillCartPlusFill
                                                    className='text-30 text-color me-1'/><span
                                                className='text-18 pe-3'>Thêm giỏ hàng</span>
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </>
                        ) : (
                            <h1>Loading...</h1>)}
                    </div>
                </div>


                <div className="row">

                    <h4 className="mb-4">Đánh giá sản phẩm</h4>

                    {!_.isEmpty(reviews) && reviews.map((r, index) => {
                        return (
                            <div className="mb-4 d-flex">
                                <img src={r.account.avatar} alt="Image"
                                     className="img-fluid border rounded-circle me-3"
                                     style={{width: 45, height: 45}}/>
                                <div>
                                    <h6 className='pb-0'>{r.account.firstname} {r.account.lastname}</h6>
                                    <div className="text-primary pt-0">
                                        <StarsReview rating={r.rating}/>
                                    </div>
                                    <p>{r.comment}
                                        <small> - <i>{formatTimeAgo(new Date(r.createdAt))}</i></small>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            {/*Shop Detail End*/
            }


            {/*Products Start*/
            }
            <div className="container py-5">
                <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">You May Also Like</span>
                    </h2>
                </div>
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="owl-carousel related-carousel">
                            <div className="card product-item border-0">
                                <div
                                    className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                    <img className="img-fluid w-100"
                                         src="img/product-1.jpg" alt=""/>
                                </div>
                                <div
                                    className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                    <h6 className="text-truncate mb-3">Colorful Stylish
                                        Shirt</h6>
                                    <div className="d-flex justify-content-center">
                                        <h6>$123.00</h6>
                                        <h6 className="text-muted ml-2">
                                            <del>$123.00</del>
                                        </h6>
                                    </div>
                                </div>
                                <div
                                    className="card-footer d-flex justify-content-between bg-light border">
                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-eye text-primary mr-1"></i>View
                                        Detail</a>
                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-shopping-cart text-primary mr-1"></i>Add
                                        To
                                        Cart</a>
                                </div>
                            </div>
                            <div className="card product-item border-0">
                                <div
                                    className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                    <img className="img-fluid w-100"
                                         src="img/product-2.jpg" alt=""/>
                                </div>
                                <div
                                    className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                    <h6 className="text-truncate mb-3">Colorful Stylish
                                        Shirt</h6>
                                    <div className="d-flex justify-content-center">
                                        <h6>$123.00</h6>
                                        <h6 className="text-muted ml-2">
                                            <del>$123.00</del>
                                        </h6>
                                    </div>
                                </div>
                                <div
                                    className="card-footer d-flex justify-content-between bg-light border">
                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-eye text-primary mr-1"></i>View
                                        Detail</a>
                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-shopping-cart text-primary mr-1"></i>Add
                                        To
                                        Cart</a>
                                </div>
                            </div>
                            <div className="card product-item border-0">
                                <div
                                    className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                    <img className="img-fluid w-100"
                                         src="img/product-3.jpg" alt=""/>
                                </div>
                                <div
                                    className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                    <h6 className="text-truncate mb-3">Colorful Stylish
                                        Shirt</h6>
                                    <div className="d-flex justify-content-center">
                                        <h6>$123.00</h6>
                                        <h6 className="text-muted ml-2">
                                            <del>$123.00</del>
                                        </h6>
                                    </div>
                                </div>
                                <div
                                    className="card-footer d-flex justify-content-between bg-light border">
                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-eye text-primary mr-1"></i>View
                                        Detail</a>
                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-shopping-cart text-primary mr-1"></i>Add
                                        To
                                        Cart</a>
                                </div>
                            </div>
                            <div className="card product-item border-0">
                                <div
                                    className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                    <img className="img-fluid w-100"
                                         src="img/product-4.jpg" alt=""/>
                                </div>
                                <div
                                    className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                    <h6 className="text-truncate mb-3">Colorful Stylish
                                        Shirt</h6>
                                    <div className="d-flex justify-content-center">
                                        <h6>$123.00</h6>
                                        <h6 className="text-muted ml-2">
                                            <del>$123.00</del>
                                        </h6>
                                    </div>
                                </div>
                                <div
                                    className="card-footer d-flex justify-content-between bg-light border">
                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-eye text-primary mr-1"></i>View
                                        Detail</a>
                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-shopping-cart text-primary mr-1"></i>Add
                                        To
                                        Cart</a>
                                </div>
                            </div>
                            <div className="card product-item border-0">
                                <div
                                    className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                    <img className="img-fluid w-100"
                                         src="img/product-5.jpg" alt=""/>
                                </div>
                                <div
                                    className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                    <h6 className="text-truncate mb-3">Colorful Stylish
                                        Shirt</h6>
                                    <div className="d-flex justify-content-center">
                                        <h6>$123.00</h6>
                                        <h6 className="text-muted ml-2">
                                            <del>$123.00</del>
                                        </h6>
                                    </div>
                                </div>
                                <div
                                    className="card-footer d-flex justify-content-between bg-light border">
                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-eye text-primary mr-1"></i>View
                                        Detail</a>
                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-shopping-cart text-primary mr-1"></i>Add
                                        To
                                        Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Products End       */
            }
        </div>
    )
        ;
};

export default ProductsDetail;