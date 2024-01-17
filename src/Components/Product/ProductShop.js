import {FaEye} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import {getProductsByOwner} from "../../Service/productService";
import _ from "lodash";
import {Link} from "react-router-dom";

const ProductShop = (account) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProductsByOwner(account.id, 0, 0,"", 0).then(res => {
            setProducts(res.data.content)
        }).catch(err => {
            console.log(err)
        })
    }, [account])
    return (
        <div className= "row">
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
                                        <h6>{product.price}</h6>
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
        </div>
    );
}

export default ProductShop;