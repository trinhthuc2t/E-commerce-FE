import React, {useEffect, useState} from 'react';
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {imageDb} from "../../FireBase/ConfigFirebase";
import {v4} from "uuid";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {getAllCategory, getListColor, getListSize} from "../../../Service/listItem";
import {useSelector} from "react-redux";
import {saveProductByShop} from "../../../Service/productService";
import Swal from "sweetalert2";

const CreateProduct = () => {
    const [thumbnail, setThumbnail] = useState('');
    const [images, setImages] = useState([]);
    const [listColor, setListColor] = useState([]);
    const [listSize, setListSize] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const account = useSelector(state => state.auth.userLogin)
    useEffect(() => {
        getListSize().then(res => {
            setListSize(res.data);
        }).catch(err => {
            console.log(err);
        });

        getListColor().then(res => {
            setListColor(res.data);
        }).catch(err => {
            console.log(err);
        });
        getAllCategory().then(res => {
            setCategories(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    const handleThumbnailClick = async (e) => {
        const imgFile = e.target.files[0];
        const imgRef = ref(imageDb, `files/${v4()}`);
        await uploadBytes(imgRef, imgFile)
            .then(async () => {
                const url = await getDownloadURL(imgRef);
                setThumbnail(url);
            })
            .catch((error) => {
                console.log('Error uploading image: ', error);
            });
    };
    const handleDeleteImage = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);

    };

    const handleImagesClick = async (e) => {
        const imgFiles = e.target.files;
        const imageObjects = [];
        for (const imgFile of imgFiles) {
            const imgRef = ref(imageDb, `files/${v4()}`);
            await uploadBytes(imgRef, imgFile)
                .then(async () => {
                    const url = await getDownloadURL(imgRef);
                    const imageObject = { imageUrl: url };
                    imageObjects.push(imageObject);
                })
                .catch((error) => {
                    console.log('Error uploading image: ', error);
                });
        }
        setImages(imageObjects); // Thiết lập mảng hình ảnh mới với các đối tượng có thuộc tính imageUrl
    };

    const saveProductDetail = (id, values) => {
        console.log('save', id, values)
        saveProductByShop(id, values).then(res => {
            Swal.fire({
                icon: 'success',
                title: 'Thêm sản phâm thành công !',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSubmitting(false);
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Thêm sản phẩm không thành công!',
                showConfirmButton: false,
                timer: 1500
            })
            console.log(err)
            setIsSubmitting(false);
        })

    }

    return (
        <div className='col-9' style={{marginLeft: "25%"}}>
            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    price: 0,
                    quantity: 0,
                    color: '',
                    size: '',
                    category: '',
                }}
                onSubmit={(values) => {
                    setIsSubmitting(true);
                    saveProductDetail(account.id, { ...values, thumbnail: thumbnail, images: images })
                }}
            >

            <Form>
                    <div className='row'>
                        <div className='col-lg-6 col-12'>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Tên sản phẩm <span
                                    className='text-danger'>*</span></label>
                                <Field type="text" name="name" className="form-control" placeholder="Tên sản phẩm"/>
                                <ErrorMessage name="name" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Mô tả</label>
                                <Field as="textarea" name="description" className="form-control" rows="3"/>
                                <ErrorMessage name="description" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Giá sản phẩm <span
                                    className='text-danger'>*</span></label>
                                <Field type="number" name="price" className="form-control"
                                       placeholder="Giá sản phẩm"/>
                                <ErrorMessage name="price" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="quantity" className="form-label">Số lượng sản phẩm<span
                                    className='text-danger'>*</span></label>
                                <Field type="number" name="quantity" className="form-control"
                                       placeholder="Số lượng sản phẩm"/>
                                <ErrorMessage name="quantity" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="size" className="form-label">Chọn kích cỡ sản phẩm<span
                                    className='text-danger'>*</span></label>
                                <Field as="select" name="size" className="form-select form-select-sm">
                                    <option value="">Chọn kích cỡ sản phẩm</option>
                                    {listSize && listSize.map((sizeOption, index) => (
                                        <option key={index} value={sizeOption.id}>{sizeOption.name}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name="size" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="color" className="form-label">Chọn màu sản phẩm<span
                                    className='text-danger'>*</span></label>
                                <Field as="select" name="color" className="form-select form-select-sm">
                                    <option value="">Chọn màu sản phẩm</option>
                                    {listColor && listColor.map((colorOption, index) => (
                                        <option key={index} value={colorOption.id}>{colorOption.name}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name="color" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Chọn loại sản phẩm<span
                                    className='text-danger'>*</span></label>
                                <Field as="select" name="category" className="form-select form-select-sm">
                                    <option value="">Chọn loại sản phẩm</option>
                                    {categories && categories.map((category) => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name="category" component="div" className="text-danger"/>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <div className='row'>
                                <div>
                                    <img
                                        src={thumbnail}
                                        height={400}
                                        width={600}
                                        alt="Thumbnail"
                                        id={'thumbnailOutput'}
                                    />
                                    <input type="file" onChange={handleThumbnailClick}/>
                                </div>
                                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                    {images.map((imageUrl, index) => (
                                        <div key={index}
                                             style={{width: '25%', padding: '5px', position: 'relative'}}>
                                            <img
                                                src={imageUrl}
                                                height={150}
                                                width={'100%'}
                                                alt={`Image ${index + 1}`}
                                                className="img-fluid"
                                            />
                                            <button
                                                className="btn btn-danger btn-sm"
                                                style={{position: 'absolute', top: '5px', right: '5px'}}
                                                onClick={() => handleDeleteImage(index)}
                                            >
                                                X
                                            </button>

                                        </div>
                                    ))}
                                </div>
                                <input type="file" multiple onChange={handleImagesClick}/>
                            </div>
                        </div>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                        <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Đang lưu...' : 'Lưu sản phẩm'}
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary btn-lg ms-2"
                            // onClick={() => setResetForm(true)}
                        >
                            Clear
                        </button>
                    </div>

                </Form>
            </Formik>
        </div>
    );
};

export default CreateProduct;
