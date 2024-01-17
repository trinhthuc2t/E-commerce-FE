import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {getProductsByOwner} from "../../Service/productService";
import _ from "lodash";
import {getAllCategory} from "../../Service/categoryService";
import {Link} from "react-router-dom";

const ProductByShop = () => {
    const account = useSelector((state) => state.auth.userLogin);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [nameSearch, setNameSearch] = useState("");
    const [colorId, setColorId] = useState(0);
    const [sizeId, setSizeId] = useState(0);
    const [page, setPage] = useState("");
    const [sort, setSort] = useState("");


    useEffect(() => {
        getProductsByOwner(account.id, colorId, sizeId,nameSearch, page).then(res => {
            setProducts(res.data.content)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [colorId, sizeId, nameSearch])

    useEffect(() => {
        getAllCategory().then(res => {
            setCategories(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    const handleSelectSize = (e) => {
        const sizeIdVal = e.target.value;
        if (sizeIdVal === 0) setSizeId(0)
        else setSizeId(sizeIdVal)
    }
    const handleSelectColor = (e) => {
        const colorNameVal = e.target.value;
        if (colorNameVal === 0) setColorId(0)
        else setColorId(colorNameVal)

    }
    const handleNameSearch = (e) => {
        setNameSearch(e.target.value);
    }

    return (
        <div className='col-9' style={{marginLeft: "25%"}}>
            <div className='container-fluid'>
                <div className='position-fixed bg-light pt-3 d-flex justify-content-between' style={{width:"70%"}}>
                    <div className='col-2'>
                        <p className='btn btn-primary'>Thêm sản phẩm</p>
                    </div>
                    <div className="col-6 me-2">
                        <input type="text" className="form-control" placeholder="Search by name"
                               onChange={handleNameSearch}/>
                    </div>
                    <div className='col-2 me-2'>
                        <select className="form-select" aria-label="Default select example"
                                onChange={(e) => {
                                    handleSelectSize(e)
                                }}>
                            <option value="0" selected>Size</option>
                            <option value="1">XS</option>
                            <option value="2">S</option>
                            <option value="3">L</option>
                            <option value="4">XL</option>
                            <option value="5">XXL</option>
                        </select>
                    </div>
                    <div className='col-2'>
                        <select className="form-select" aria-label="Default select example"
                                onChange={e => {
                                    handleSelectColor(e)
                                }}>
                            <option value="0" selected>Color</option>
                            <option value="1">Black</option>
                            <option value="2">White</option>
                            <option value="3">Red</option>
                            <option value="4">Blue</option>
                            <option value="5">Green</option>
                        </select>
                    </div>
                </div>
                <div className='pt-100'>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ảnh</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Hành dộng</th>

                        </tr>
                        </thead>
                        <tbody>
                        {!_.isEmpty(products) && products.map((p, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{p.id + 1}</th>
                                        <td ><img src={p.thumbnail} width={40} height={40} alt=""/></td>
                                        <td>{p.name}</td>
                                        <td>{p.price}</td>
                                        <td>{p.quantitySC}</td>
                                        <td style={p.quantitySC === 0 ? {color: "red"} : {color: "blue"}}>{p.quantitySC === 0 ? "Hết hàng" : "Còn hàng"}</td>
                                        <td><Link to={`/profile/edit/${p.id}`} className='btn btn-outline-warning px-3'>Sửa</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductByShop;