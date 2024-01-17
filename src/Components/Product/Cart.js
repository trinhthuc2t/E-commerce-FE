import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {editCart} from "../../features/cart/cartSlice";


const Cart = () => {
    const dispatch = useDispatch();
    const carts = useSelector(state => state.cart.carts)

    const handleDelete = (item) => {
        const updatedCarts = carts.filter(cartItem => cartItem !== item);
        localStorage.setItem("carts", JSON.stringify(updatedCarts));
        dispatch(editCart(updatedCarts));
    };
    return (
        <div className="container pt-100">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    </th>
                    <th scope="col">Sản phẩm</th>
                    <th scope="col">Đơn giá</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Số tiền</th>
                    <th scope="col">Thao tác</th>
                </tr>
                </thead>
                <tbody>

                {carts.length > 0 ? carts.map((c, index) => {
                    return (
                        <tr>
                            <td>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            </td>
                            <td><img src={c.product.thumbnail} alt="" width={50} height={50}/><span
                                className='mx-3'>{c.product.name}</span></td>
                            <td>{c.product.price}</td>
                            <td>{c.quantity}</td>
                            <td>{c.quantity * c.product.price}</td>
                            <td><span className='btn btn-warning' onClick={()=>{handleDelete(c)}}>Xóa</span></td>
                        </tr>

                    )
                }) :  <tr><td colSpan="6"><h3 className='text-center'>Chưa có sản phẩm trong giỏ hàng</h3></td></tr>}

                </tbody>
            </table>
        </div>
    );
};

export default Cart;