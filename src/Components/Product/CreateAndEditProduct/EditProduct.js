import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {useParams} from "react-router-dom";
import {getProductById} from "../../../Service/productService";

const EditProduct = () => {
    const [sizeId, setSizeId] = useState(0);
    const [colorId, setColorId] = useState(0);
    const [products, setProducts] = useState([]);
    const product = useParams();
    useEffect(() => {
        console.log(product.productId)
        getProductById(product.productId, sizeId, colorId).then(res => {
            setProducts(res.data)
            console.log(res)
        }).catch(err => console.log(err))
    }, [])


    return (

        <div className='col-9' style={{marginLeft: "25%"}}>


        </div>
    );
};
export default EditProduct;
