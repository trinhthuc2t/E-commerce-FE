import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {getProductsByOwner} from "../../Service/productService";
import _ from "lodash";

const ProductByShop = () => {
    const account = useSelector((state) => state.auth.userLogin)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProductsByOwner(account.id).then(res => {
            setProducts(res.data.content)
            console.log(res.data.content)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div className='col-9' style={{marginLeft: "27%"}}>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Ảnh</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Cỡ</th>
                    <th scope="col">Màu</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Hành dộng</th>

                </tr>
                </thead>
                <tbody>
                {
                    !_.isEmpty(products) && products.map((p, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                <td><img src={p.productDetail.thumbnail} width={40} height={40} alt=""/></td>
                                <td>{p.productDetail.name}</td>
                                <td>{p.productDetail.price}</td>
                                <td>{p.quantity}</td>
                                <td>{p.sizeProduct.name}</td>
                                <td>{p.colorProduct.name}</td>
                                <td className='text-primary'>{p.quantity === 0 ? "Hết hàng" : "Còn hàng"}</td>
                                <td><span className='btn btn-outline-warning px-3'>Sửa</span> <span className='btn btn-outline-danger'>Ngừng bán</span></td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </table>
        </div>
    );
};

export default ProductByShop;