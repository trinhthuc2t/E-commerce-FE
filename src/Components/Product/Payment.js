import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {saveOrder} from "../../Service/orderService";
import {editCart} from "../../features/cart/cartSlice";
import {removeItemToPay} from "../../features/payItem/payItemSlice";
import Swal from "sweetalert2";
import {formatPrice} from "../../Validate/formatTimeAgo";


const Payment = () => {
    const accountLogin = useSelector((state) => state.auth.userLogin);
    const [isShippingAddressVisible, setIsShippingAddressVisible] = useState(false);
    const dispatch = useDispatch();
    const itemToPay = useSelector(state => state.itemToPay.itemToPay);
    const carts = useSelector(state => state.cart.carts)
    // const [shippingMoney, setShippingMoney] = useState(0);


    const orderSubmit = () => {
        Swal.fire({
            title: "Bạn chắc chắn muốn mua sản phẩm?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Xác nhận!"
        }).then((result) => {
            const cartReq = {
                total: totalShipping,
                orderDate: new Date(),
                status: 'Pending',
                shippingAddress: isShippingAddressVisible ? 'Địa chỉ giao hàng khác' : accountLogin.address,
                createdAt: new Date(),
                products: itemToPay.map((item) => ({
                    id: item.id,
                    quantity: item.quantity
                })),
            };
            saveOrder(accountLogin.id, cartReq)
                .then((res) => {
                    removeCart(carts)
                    Swal.fire({
                        title: "Đặt hàng thành công!",
                        text: "Sản phẩm sẽ được giao trong 2-3 ngày!.",
                        icon: "success"
                    });
                })
                .catch((err) => console.log(err));
        });

    };
    const removeCart = (carts) => {
        const updatedCarts = carts.filter(cartItem => !itemToPay.some(item => item.id === cartItem.id));

        dispatch(removeItemToPay());
        localStorage.setItem("carts", JSON.stringify(updatedCarts));
        dispatch(editCart(updatedCarts));
    };


    const handleToggleShippingAddress = () => {
        setIsShippingAddressVisible(!isShippingAddressVisible);
    };

    const subTotal = () => {
        return itemToPay.reduce((total, item) => total + item.product.price * item.quantity, 0)
    }
    const setShippingMoney = () => subTotal() >= 1000000 ? 0 : 30000;
    const totalShipping = subTotal() + setShippingMoney();


    // useEffect(() => {
    //     subTotal() > 1000000 ? setShippingMoney(0) : setShippingMoney(30000)
    // }, [subTotal])

    return (
        <div className='col-9' style={{marginLeft: "25%"}}>
            <div className="container">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        <div className="mb-4">
                            <h4 className="mb-4">Địa chỉ thanh toán</h4>
                            <div className="row">
                                <div className="col-md-6 form-group mb-3">
                                    <label>Họ</label>
                                    <input className="form-control" type="text" value={accountLogin.firstname}/>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Tên</label>
                                    <input className="form-control" type="text" value={accountLogin.lastname}/>
                                </div>
                                <div className="col-md-6 form-group mb-3">
                                    <label>E-mail</label>
                                    <input className="form-control" type="text" value={accountLogin.email}/>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Điện thoại</label>
                                    <input className="form-control" type="text" value={accountLogin.phone}/>
                                </div>
                                <div className="col-md-6 form-group mb-3">
                                    <label>Địa chỉ</label>
                                    <input className="form-control" type="text" value={accountLogin.address}/>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Phường/Xã</label>
                                    <input className="form-control" type="text" value={accountLogin.ward}/>
                                </div>

                                <div className="col-md-6 form-group">
                                    <label>Quận/Huyện</label>
                                    <input className="form-control" type="text" value={accountLogin.district}/>
                                </div>
                                <div className="col-md-6 form-group mb-3">
                                    <label>Thành Phố/Tỉnh</label>
                                    <input className="form-control" type="text" value={accountLogin.province}/>
                                </div>

                                <div className="col-md-12 form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="shipto"
                                            checked={isShippingAddressVisible}
                                            onChange={handleToggleShippingAddress}
                                        />
                                        <label
                                            className="custom-control-label ms-1"
                                            htmlFor="shipto"
                                            data-toggle="collapse"
                                            data-target="#shipping-address"
                                        >
                                            Địa chỉ giao hàng khác
                                        </label>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className={`collapse mb-4 ${isShippingAddressVisible ? 'show' : ''}`}
                             id="shipping-address">
                            <h4 className="font-weight-semi-bold mb-4">Địa chỉ giao hàng</h4>
                            <div className="row">
                                <div className="col-md-6 form-group mb-3">
                                    <label>Họ</label>
                                    <input className="form-control" type="text" value={accountLogin.firstname}/>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Tên</label>
                                    <input className="form-control" type="text" value={accountLogin.lastname}/>
                                </div>
                                <div className="col-md-6 form-group mb-3">
                                    <label>E-mail</label>
                                    <input className="form-control" type="text" value={accountLogin.email}/>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Điện thoại</label>
                                    <input className="form-control" type="text" value={accountLogin.phone}/>
                                </div>
                                <div className="col-md-6 form-group mb-3">
                                    <label>Địa chỉ</label>
                                    <input className="form-control" type="text" value={accountLogin.address}/>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Phường/Xã</label>
                                    <input className="form-control" type="text" value={accountLogin.ward}/>
                                </div>

                                <div className="col-md-6 form-group">
                                    <label>Quận/Huyện</label>
                                    <input className="form-control" type="text" value={accountLogin.district}/>
                                </div>
                                <div className="col-md-6 form-group mb-3">
                                    <label>Thành Phố/Tỉnh</label>
                                    <input className="form-control" type="text" value={accountLogin.province}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card border-secondary mb-5">
                            <div className="card-header bg-secondary border-0">
                                <h4 className="font-weight-semi-bold m-0">Order Total</h4>
                            </div>
                            <div className="card-body">
                                <h5 className="font-weight-medium mb-3">Sản phẩm</h5>
                                {itemToPay ? itemToPay.map((item => {
                                    return (
                                        <div className="d-flex justify-content-between">
                                            <p>{item.product.name}({item.colorProduct.name},{item.sizeProduct.name})</p>
                                            <p>{formatPrice(item.product.price * item.quantity)}</p>
                                        </div>
                                    )
                                })) : "Chưa có gì"}

                                <hr className="mt-0"/>
                                <div className="d-flex justify-content-between mb-3 pt-1">
                                    <h6 className="font-weight-medium">Tạm tính</h6>
                                    <h6 className="font-weight-medium">{formatPrice(subTotal())}</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Vận chuyển</h6>
                                    <h6 className="font-weight-medium">{setShippingMoney() !== 0 ? formatPrice(setShippingMoney()) : "Miễn phí"}</h6>
                                </div>
                            </div>
                            <div className="card-footer border-secondary bg-transparent">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5 className="font-weight-bold">Total</h5>
                                    <h5 className="font-weight-bold">{formatPrice(totalShipping)}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="card border-secondary mb-5">
                            <div className="card-header bg-secondary border-0">
                                <h4 className="font-weight-semi-bold m-0">Payment</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" name="payment"
                                               id="paypal"/>
                                        <label className="custom-control-label ms-1" htmlFor="paypal">Thanh toán khi
                                            nhận hàng</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" name="payment"
                                               id="directcheck"/>
                                        <label className="custom-control-label ms-1" htmlFor="directcheck">VNPay</label>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" name="payment"
                                               id="banktransfer"/>
                                        <label className="custom-control-label ms-1" htmlFor="banktransfer">Bank
                                            Transfer</label>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer border-secondary bg-transparent">
                                <button className="btn btn-lg btn-block btn-primary font-weight-bold px-5"
                                        onClick={() => orderSubmit(itemToPay)}>Đặt hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;