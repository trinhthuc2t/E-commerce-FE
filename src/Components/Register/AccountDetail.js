import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import '../test.css';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import {imageDb} from '../FireBase/ConfigFirebase';
import {v4} from 'uuid';
import {ErrorMessage, Field, Form, Formik} from "formik";
import Swal from "sweetalert2";
import {editAccount} from "../../Service/accountService";
import {getAllDistrictsByProvinceId, getAllProvinces, getAllWardsByDistrictId} from "../../Service/addressService";
import _ from "lodash";
import {editAccountRedux} from "../../features/auth/authSlice";



const AccountDetail = () => {
    const accountLogin = useSelector((state) => state.auth.userLogin);

    const dispatch = useDispatch();

    const [account, setAccount] = useState(accountLogin)

    const [wards, setWards] = useState([])
    const [districts, setDistricts] = useState([])
    const [provinces, setProvinces] = useState([])
    const [provinceName, setProvinceName] = useState("");
    const [districtName, setDistrictName] = useState("");
    const [imageUrl, setImageUrl] = useState(
        !_.isEmpty(accountLogin.avatar)
            ? accountLogin.avatar
            : 'https://inkythuatso.com/uploads/thumbnails/800/2023/03/3-anh-dai-dien-trang-inkythuatso-03-15-25-56.jpg'
    );


    const handleValueInput = (e) => {
        let {name, value} = e.target;
        setAccount({...account, [name]: value});
    }
    const initialValues = {
        username: accountLogin.username,
        firstname: account.firstname,
        lastname: account.lastname,
        phone: account.phone,
        address: account.address,
        ward: account.ward,
        district: account.district,
        province: account.province,
        email: account.email,
    };

    const handleSubmit = (values) => {
        const updateAccount= {...account,  province: values.province, district: values.district, ward: values.ward};
         editAccount(accountLogin.id, updateAccount)
             .then(res => {
                 Swal.fire({
                     icon: 'success',
                     title: 'Thay đổi thông tin thành công !',
                     showConfirmButton: false,
                     timer: 1500
                 })
                 dispatch(editAccountRedux(account));
                 localStorage.setItem("account", JSON.stringify(updateAccount))

             })
             .catch(err => {
                 console.log(err);
                 Swal.fire({
                     icon: 'error',
                     title: 'Đổi thông tin tài khoản thất bại!',
                     showConfirmButton: false,
                     timer: 1500
                 })
             })
    }
    const handleClick = async (e) => {
        const imgFile = e.target.files[0];
        const imgRef = ref(imageDb, `files/${v4()}`);
        await uploadBytes(imgRef, imgFile)
            .then(async () => {
                const url = await getDownloadURL(imgRef);
                setImageUrl(url); // Lưu URL của ảnh từ input
                setAccount({...account, avatar : url})
            })
            .catch((error) => {
                console.log('Error uploading image: ', error);
            });
    };


    useEffect(() => {
        getAllProvinces().then(response => {
            setProvinces(response.data.data);
        }).catch(error => {
            console.log(error)
        })
    }, [])

    useEffect(() => {
        if (provinceName) {
            const province = provinces.find(item => item.ProvinceName === provinceName);
            if (province) {
                getAllDistrictsByProvinceId(province.ProvinceID).then(response => {
                    setDistricts(response.data.data);
                }).catch(error => {
                    console.log(error)
                })
            }
        } else {
            setDistricts([]);
            setDistrictName("");
        }
    }, [provinceName])

    useEffect(() => {
        if (districtName) {
            const district = districts.find(item => item.DistrictName === districtName);
            if (district) {
                getAllWardsByDistrictId(district.DistrictID).then(response => {

                    setWards(response.data.data);
                }).catch(error => {
                    console.log(error)
                })
            }
        } else {
            setWards([]);
        }
    }, [districtName])


    const avatarStyle = {
        position: 'relative',
        width: '300px',
        height: '300px',
    };

    const inputImageStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        opacity: '0',
        cursor: 'pointer',
    };

    return (
        <>
            <div className="col-9" style={{marginLeft: '25%'}}>
                <div className="d-flex">
                    <div style={avatarStyle}>
                        <img
                            src={imageUrl}
                            height={300}
                            width={300}
                            alt="k thấy gì"
                            className="border rounded-circle"
                            id={'output'}
                        />
                        <input type="file" onChange={handleClick} style={inputImageStyle}/>
                    </div>

                    {imageUrl && ( // Hiển thị ảnh từ input khi đã upload lên
                        <img
                            src={imageUrl}
                            height={300}
                            width={300}
                            alt="k thấy gì"
                            className="border rounded-circle"
                            style={{marginLeft: '-300px'}} // Điều chỉnh vị trí để đè lên avatar
                        />
                    )}

                    <div className="col-8 mt-1 ms-5">

                        <Formik
                            initialValues={initialValues}
                            // validationSchema={registerSchema}
                            onSubmit={(values) => {
                                handleSubmit(values)
                            }}
                            onReset={(values) => {

                            }}
                            innerRef={(actions) => {
                                if (actions && actions.touched.province)
                                    setProvinceName(actions.values.province);

                                if (actions && actions.touched.district)
                                    setDistrictName(actions.values.district);

                            }}
                        >
                            {({errors}) => (
                                <Form>

                                    <div className="d-flex align-items-center mb-2">
                                        <div className="col-2 text-18">Tên đăng nhập</div>
                                        <div className="col-10">
                                            <Field type="text" id="username" name="username"
                                                   className="form-control form-control py-2" readOnly/>
                                        </div>
                                    </div>
                                    <div className="form-outline  mb-2" style={{textAlign: "left"}}>
                                        <div className="d-flex align-items-center text-18 mb-2"
                                             style={{textAlign: "left"}}>
                                            <div className="col-2">
                                                <label className="form-label me-3" htmlFor="email">Họ và tên đệm</label>
                                            </div>
                                            <div className="col-10">
                                                <Field type="text" id="fistname" name="firstname"
                                                       className="form-control form-control py-2"
                                                       onInput={handleValueInput}/>
                                            </div>

                                        </div>
                                        <div className="d-flex align-items-center text-18 mb-2"
                                             style={{textAlign: "left"}}>
                                            <div className="col-2 ">
                                                <label className="form-label me-3" htmlFor="email">Tên</label>
                                            </div>
                                            <Field type="text" id="lastname" name="lastname"
                                                   className="form-control form-control py-2"
                                                   onInput={handleValueInput}/>
                                        </div>
                                        <div className="d-flex align-items-center text-18 mb-2"
                                             style={{textAlign: "left"}}>
                                            <div className="col-2 ">
                                                <label className="form-label me-3" htmlFor="phone">Số điện thoại</label>
                                            </div>
                                            <Field type="text" id="phone" name="phone"
                                                   className="form-control form-control py-2"
                                                   onInput={handleValueInput}/>
                                        </div>
                                        <div className="form-outline  mb-2" style={{textAlign: "left"}}>
                                            <div className="d-flex align-items-center text-18 mb-2"
                                                 style={{textAlign: "left"}}>
                                                <div className="col-2">

                                                    <label className="form-label me-3" htmlFor="email">Email</label>
                                                </div>
                                                <div className="col-10">
                                                    <Field type="email" id="email" name="email"
                                                           className="form-control form-control py-2"
                                                           onInput={handleValueInput}/>
                                                </div>
                                            </div>

                                            <ErrorMessage name="email" className="text-danger mt-1"
                                                          component="div"/>
                                        </div>

                                            <div className="d-flex align-items-center text-18 mb-2"
                                                 style={{textAlign: "left"}}>
                                                <div className="col-2">
                                                    <span className='text-18'>Địa chỉ</span>
                                                </div>
                                                <div className="col-10">
                                                    <div className='row'>
                                                        <div className="col-3">
                                                            <Field as="select" className="form-select" name="province"
                                                                   id="province">
                                                                <option value="">{accountLogin.province}</option>
                                                                {!_.isEmpty(provinces) && provinces.map(province => (
                                                                    <option key={province.ProvinceID}
                                                                            value={province.ProvinceName}>
                                                                        {province.ProvinceName}
                                                                    </option>
                                                                ))}

                                                            </Field>
                                                        </div>

                                                        <div className="col-3 ">
                                                            <Field as="select" className="form-select" id="district"
                                                                   name="district">
                                                                <option value="">{accountLogin.district}</option>
                                                                {!_.isEmpty(districts) && districts.map(district => (
                                                                    <option key={district.DistrictID}
                                                                            value={district.DistrictName}>
                                                                        {district.DistrictName}
                                                                    </option>
                                                                ))}
                                                            </Field>
                                                        </div>

                                                        <div className="col-3">
                                                            <Field as="select" className="form-select" id="ward"
                                                                   name="ward">
                                                                <option value="">{accountLogin.ward}</option>
                                                                {!_.isEmpty(wards) && wards.map(ward => (
                                                                    <option key={ward.WardCode} value={ward.WardName}>
                                                                        {ward.WardName}
                                                                    </option>
                                                                ))}
                                                            </Field>
                                                        </div>


                                                        <div className="col-3">
                                                            <Field type="text" id="address" name="address"
                                                                   className="form-control form-control py-2"
                                                                   onInput={handleValueInput}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <ErrorMessage name="address" className="text-danger mt-1"
                                                          component="div"/>
                                        </div>

                                    <div className="d-flex justify-content-center mt-3">
                                        <button type="submit" className="btn btn-primary btn-lg mx-3 px-5">
                                            Lưu
                                        </button>

                                        <button type="reset" className="btn btn-danger btn-lg px-5">
                                            Hủy
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
                <hr/>
                <div>

                </div>
            </div>
        </>
    );
};

export default AccountDetail;
