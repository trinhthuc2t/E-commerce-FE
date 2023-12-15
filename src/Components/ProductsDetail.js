import React, {useEffect, useState} from 'react';
import {getAllImageByProductId, getProductById} from "../Service/productService";
import {useParams} from "react-router-dom";
import _ from "lodash";
import {SlMinus, SlPlus} from "react-icons/sl";
import {BsFillCartPlusFill} from "react-icons/bs";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

const ProductsDetail = () => {
    const [product, setProduct] = useState({});
    const [images, setImages] = useState([]);
    const {productId} = useParams();
    useEffect(() => {
        getProductById(productId).then((res => {
            setProduct(res.data);
            console.log(res.data)
        })).catch((err => {
            console.log(err);
        }))
    }, [])
    useEffect(() => {
        getAllImageByProductId(productId).then((res => {
            setImages(res.data);
        })).catch((err => {
            console.log(err);
        }))
    }, [])

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
                                            <div className=" " key={index}>
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
                        {product.productDetail && product.productDetail.name ? (
                            <>

                                <h3>{product.productDetail.name}</h3>
                                <div className="d-flex mb-3">
                                    <div className="text-primary mr-2">
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star-half-alt"></small>
                                        <small className="far fa-star"></small>
                                    </div>
                                    <small className="pt-1">(50 Reviews)</small>
                                </div>
                                <h3 className="mb-4">{product.productDetail.price} VNĐ</h3>
                                <p className="mb-4">{product.productDetail.description}</p>
                                <div className="d-flex mb-3">
                                    <p className="mb-0 me-3">Sizes:</p>
                                    <form className='d-flex'>
                                        <div className="me-3">
                                            <input type="radio" className="me-1 form-check-inline" id="size-1"
                                                   name="size"/>
                                            <label className="form-label" htmlFor="size-1">XS</label>
                                        </div>
                                        <div className="me-3">
                                            <input type="radio" className="me-1 form-check-inline" id="size-2"
                                                   name="size"/>
                                            <label className="form-label" htmlFor="size-2">S</label>
                                        </div>
                                        <div className="me-3">
                                            <input type="radio" className="me-1 form-check-inline" id="size-3"
                                                   name="size"/>
                                            <label className="form-label me-1" htmlFor="size-3">M</label>
                                        </div>
                                        <div className="me-3">
                                            <input type="radio" className="me-1 form-check-inline" id="size-4"
                                                   name="size"/>
                                            <label className="me-1 form-label" htmlFor="size-4">L</label>
                                        </div>
                                        <div className="">
                                            <input type="radio" className="me-1 form-check-inline" id="size-5"
                                                   name="size"/>
                                            <label className="form-label" htmlFor="size-5">XL</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="d-flex mb-4">
                                    <p className="mb-0 me-3">Colors:</p>
                                    <form className='d-flex'>
                                        <div className="me-3">
                                            <input type="radio" className="form-check-inline me-1" id="color-1"
                                                   name="color"/>
                                            <label className="form-label" htmlFor="color-1">Black</label>
                                        </div>
                                        <div className="me-3">
                                            <input type="radio" className="form-check-inline me-1" id="color-2"
                                                   name="color"/>
                                            <label className="form-label" htmlFor="color-2">White</label>
                                        </div>
                                        <div className="me-3">
                                            <input type="radio" className="form-check-inline me-1" id="color-3"
                                                   name="color"/>
                                            <label className="form-label" htmlFor="color-3">Red</label>
                                        </div>
                                        <div className="me-3">
                                            <input type="radio" className="form-check-inline me-1" id="color-4"
                                                   name="color"/>
                                            <label className="form-label" htmlFor="color-4">Blue</label>
                                        </div>
                                        <div className="me-3">
                                            <input type="radio" className="form-check-inline me-1" id="color-5"
                                                   name="color"/>
                                            <label className="form-label" htmlFor="color-5">Green</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="d-flex">
                                    <div className="me-5 d-flex" style={{width: 130}}>
                                        <button className="btn border me-1">
                                            <SlMinus className='text-30 text-color'/>
                                        </button>
                                        <input type="text" className="form-control  text-center me-1 px-4" value="1"/>
                                        <button className="btn border">
                                            <SlPlus className='text-30 text-color'/>
                                        </button>
                                    </div>
                                    <button className="btn border me-5 d-flex align-items-center">
                                        <BsFillCartPlusFill className='text-30 text-color me-1'/><span
                                        className='text-18'>Thêm giỏ hàng</span>
                                    </button>
                                </div>
                            </>
                        ) : (
                            <h3>Loading...</h3>
                        )}
                    </div>
                </div>

                <div className="px-xl-5">
                    <div className="col">
                        <div className='d-flex justify-content-center'>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                                            data-bs-target="#home" type="button" role="tab" aria-controls="home"
                                            aria-selected="true">Description
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                                            data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                                            aria-selected="false">Information
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="messages-tab" data-bs-toggle="tab"
                                            data-bs-target="#messages" type="button" role="tab" aria-controls="messages"
                                            aria-selected="false">Reviews (0)
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero
                                    aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor
                                    rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd
                                    ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum
                                    accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus
                                    diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at
                                    sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod
                                    takimata dolor ea invidunt.</p>
                            </div>
                            <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">...
                            </div>
                            <div className="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4 className="mb-4">1 review for "Colorful Stylish Shirt"</h4>
                                        <div className="media mb-4">
                                            <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1"
                                                 style={{width: 45}}/>
                                            <div className="media-body">
                                                <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                                <div className="text-primary mb-2">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-half-alt"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore
                                                    accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed
                                                    sed eirmod ipsum.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="mb-4">Leave a review</h4>
                                        <small>Your email address will not be published. Required fields are marked
                                            *</small>
                                        <div className="d-flex my-3">
                                            <p className="mb-0 mr-2">Your Rating * :</p>
                                            <div className="text-primary">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </div>
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="message">Your Review *</label>
                                                <textarea id="message" cols="30" rows="5"
                                                          className="form-control"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Your Name *</label>
                                                <input type="text" className="form-control" id="name"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Your Email *</label>
                                                <input type="email" className="form-control" id="email"/>
                                            </div>
                                            <div className="form-group mb-0">
                                                <input type="submit" value="Leave Your Review"
                                                       className="btn btn-primary px-3"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Shop Detail End*/}


            {/*Products Start*/
            }
            <div className="container py-5">
                <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">You May Also Like</span></h2>
                </div>
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="owl-carousel related-carousel">
                            <div className="card product-item border-0">
                                <div
                                    className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                    <img className="img-fluid w-100" src="img/product-1.jpg" alt=""/>
                                </div>
                                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                    <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                    <div className="d-flex justify-content-center">
                                        <h6>$123.00</h6>
                                        <h6 className="text-muted ml-2">
                                            <del>$123.00</del>
                                        </h6>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-between bg-light border">
                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                                </div>
                            </div>
                            <div className="card product-item border-0">
                                <div
                                    className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                    <img className="img-fluid w-100" src="img/product-2.jpg" alt=""/>
                                </div>
                                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                    <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                    <div className="d-flex justify-content-center">
                                        <h6>$123.00</h6>
                                        <h6 className="text-muted ml-2">
                                            <del>$123.00</del>
                                        </h6>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-between bg-light border">
                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                                </div>
                            </div>
                            <div className="card product-item border-0">
                                <div
                                    className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                    <img className="img-fluid w-100" src="img/product-3.jpg" alt=""/>
                                </div>
                                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                    <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                    <div className="d-flex justify-content-center">
                                        <h6>$123.00</h6>
                                        <h6 className="text-muted ml-2">
                                            <del>$123.00</del>
                                        </h6>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-between bg-light border">
                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                                </div>
                            </div>
                            <div className="card product-item border-0">
                                <div
                                    className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                    <img className="img-fluid w-100" src="img/product-4.jpg" alt=""/>
                                </div>
                                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                    <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                    <div className="d-flex justify-content-center">
                                        <h6>$123.00</h6>
                                        <h6 className="text-muted ml-2">
                                            <del>$123.00</del>
                                        </h6>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-between bg-light border">
                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                                </div>
                            </div>
                            <div className="card product-item border-0">
                                <div
                                    className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                    <img className="img-fluid w-100" src="img/product-5.jpg" alt=""/>
                                </div>
                                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                    <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                    <div className="d-flex justify-content-center">
                                        <h6>$123.00</h6>
                                        <h6 className="text-muted ml-2">
                                            <del>$123.00</del>
                                        </h6>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-between bg-light border">
                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                    <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
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