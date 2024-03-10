import React from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {editCart} from "../../features/cart/cartSlice";
import _ from "lodash";
import {formatPrice} from "../../Validate/formatTimeAgo";


const CartSmall = ({carts}) => {
    const dispatch = useDispatch();


    const calculateSubtotal = () => {
        return carts.reduce((acc, p) => {
            return acc + p.product.price * p.quantity;
        }, 0);
    };

    const handleRemoveProduct = (productId) => {
        const updatedCart = carts.filter((product) => product.id !== productId);
        localStorage.setItem("carts", JSON.stringify(updatedCart));
        dispatch(editCart(updatedCart))
    };

    return (
        <>
            {!_.isEmpty(carts) && carts.map((p) => (
                <li key={p.product.id} className="dropdown-item d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img src={p.product.thumbnail} width={50} height={50} alt="" className="me-2"/>

                        <div>
                            <p className="fw-bold pt-0 mb-0"><Link to={`/product-detail/${p.product.id}`} className='text-decoration-none text-black'>{p.product.name}({p.sizeProduct.name}, {p.colorProduct.name})</Link></p>
                            <span className="">{formatPrice(p.product.price)} x {p.quantity} - </span>
                            <span className="fw-bold">{formatPrice(p.product.price * p.quantity)}</span>
                        </div>
                    </div>

                    <div className='ms-5'>
                        <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => handleRemoveProduct(p.id)}>
                            X
                        </button>
                    </div>
                </li>
            ))}
            <li className="list-group-item d-flex justify-content-between align-items-center my-3 mx-3">
                <span className="fw-bold">SUBTOTAL:</span>
                <span className="fw-bold">${formatPrice(calculateSubtotal())}</span>
            </li>

            <li className="mx-3 d-flex justify-content-around align-items-center gap-2">
                    <Link to={"/profile/carts"} className="btn btn-outline-primary px-5">
                        Giỏ hàng
                    </Link>
                    {/*<Link to={"/profile/payment"} className="btn btn-outline-primary px-5">*/}
                    {/*    Mua hàng*/}
                    {/*</Link>*/}
            </li>
        </>
    );
};

export default CartSmall;
