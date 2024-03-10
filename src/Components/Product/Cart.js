import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editCart} from "../../features/cart/cartSlice";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
import {SlMinus, SlPlus} from "react-icons/sl";
import {editItemToPay} from "../../features/payItem/payItemSlice";
import {formatPrice} from "../../Validate/formatTimeAgo";

const Cart = () => {
    const dispatch = useDispatch();
    const carts = useSelector(state => state.cart.carts);
    const [selectedItems, setSelectedItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);


    useEffect(() => {
        dispatch(editItemToPay(selectedItems))
    }, [selectedItems])

    useEffect(() => {
        const newTotalAmount = calculateSubtotal();
        setTotalAmount(newTotalAmount);
    }, [carts, selectedItems]);


    const updateQuantity = (item, newQuantity) => {
        if (newQuantity >= 1) {
            const updatedCart = carts.map(cartItem =>
                cartItem === item ? {...cartItem, quantity: newQuantity} : cartItem
            );
            localStorage.setItem('carts', JSON.stringify(updatedCart));
            dispatch(editCart(updatedCart));

        }
    };
    const handleInput = (e, item) => {
        const newQuantity = e.target.value;
        updateQuantity(item, newQuantity)

    }
    const handleIncreases = (e, item) => {
        const newQuantity = +item.quantity + 1;
        updateQuantity(item, newQuantity)
    }
    const handleReduced = (e, item) => {
        const newQuantity = +item.quantity - 1;
        updateQuantity(item, newQuantity)
    }

    const calculateSubtotal = () => {
        return selectedItems.reduce((acc, p) => {
            return acc + p.product.price * p.quantity;
        }, 0);
    };

    const handleDelete = (item) => {
        Swal.fire({
            title: "Bạn chắc chắn muốn xóa?",
            text: "Sản phẩm sẽ được gỡ khỏi giỏ hàng!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Xác nhận!"
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedCarts = carts.filter(cartItem => cartItem !== item);
                localStorage.setItem("carts", JSON.stringify(updatedCarts));
                dispatch(editCart(updatedCarts));
                Swal.fire({
                    title: "Xóa thành công!",
                    text: "Sản phẩm đã gỡ khỏi giỏ hàng.",
                    icon: "success"
                });
            }
        });

    };

    const handleCheckboxChange = (item) => {
        const isCheck = selectedItems.some(itemSelected => itemSelected.id === item.id);

        if (isCheck) {
            const updatedItems = selectedItems.filter(selectedItem => selectedItem.id !== item.id);
            setSelectedItems(updatedItems);
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };


    const handleSelectAll = () => {
        if (selectedItems.length === carts.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems([...carts]);
        }
    };
    const handleDeleteItem = () => {
        Swal.fire({
            title: "Bạn chắc chắn muốn xóa?",
            text: "Sản phẩm sẽ được gỡ khỏi giỏ hàng!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Xác nhận!"
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedCarts = carts.filter(
                    (cartItem) => !selectedItems.includes(cartItem)
                );
                localStorage.setItem("carts", JSON.stringify(updatedCarts));
                dispatch(editCart(updatedCarts));
                setSelectedItems([]);
                Swal.fire({
                    title: "Xóa thành công!",
                    text: "Sản phẩm đã gỡ khỏi giỏ hàng.",
                    icon: "success"
                });
            }
        });
    };


    return (
        <div className='col-9' style={{marginLeft: "25%"}}>
            <div className="container">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="selectAllCheckbox"
                                checked={selectedItems.length === carts.length}
                                onChange={handleSelectAll}
                            />
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
                        const isChecked = selectedItems.includes(c);
                        return (
                            <tr key={index}>
                                <td>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id={`flexCheckDefault-${index}`}
                                        checked={isChecked}
                                        onChange={() => handleCheckboxChange(c)}
                                    />
                                </td>
                                <td>
                                    <img src={c.product.thumbnail} alt="" width={50} height={50}/>
                                    <span className='mx-3'>{c.product.name}</span>
                                </td>
                                <td>{formatPrice(c.product.price)}</td>
                                <td>
                                    <div className='align-content-center mt-3'>
                                        <div className="me-5 d-flex mb-3">
                                            <button className="btn border me-1">
                                                <SlMinus className='text-16 text-color'
                                                         onClick={(e) => handleReduced(e, c)}/>
                                            </button>
                                            <div className='me-1'>
                                                <input
                                                    type="text"
                                                    className="form-control text-center me-1 py-2"
                                                    value={c.quantity}
                                                    onChange={(e) => handleInput(e, c)}
                                                />
                                            </div>

                                            <button className="btn border">
                                                <SlPlus className='text-16 text-color'
                                                        onClick={(e) => handleIncreases(e, c)}/>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td>{formatPrice(c.quantity*c.product.price)} </td>
                                <td>
                                    <span className='btn btn-warning px-5' onClick={() => {
                                        handleDelete(c)
                                    }}>Xóa</span>
                                </td>
                            </tr>
                        );
                    }) : <tr>
                        <td colSpan="6">
                            <h3 className='text-center'>Chưa có sản phẩm trong giỏ hàng</h3>
                        </td>
                    </tr>}

                    <tr>
                        <td>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="selectAllCheckboxFooter"
                                checked={selectedItems.length === carts.length}
                                onChange={handleSelectAll}
                            />
                        </td>
                        <td>
                            <label className="form-check-label" htmlFor="selectAllCheckboxFooter">
                                Chọn tất cả ({carts.length})
                            </label>
                        </td>
                        <td><span className='btn text-danger'
                                  onClick={() => handleDeleteItem(selectedItems)}>Xóa ({selectedItems.length})</span>
                        </td>
                        <td className="fw-bold">Tổng thanh toán ({selectedItems.length}):</td>
                        <td>{formatPrice(totalAmount)} </td>
                        {selectedItems.length !== 0 ?
                            <td><Link to={`/profile/payment`} className='btn btn-primary px-4'>Mua hàng</Link></td> :
                            <td></td>
                    }
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
