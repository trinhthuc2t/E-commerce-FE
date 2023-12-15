import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../test.css';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { imageDb } from '../FireBase/ConfigFirebase';
import { v4 } from 'uuid';

const AccountDetail = () => {
    const accountLogin = useSelector((state) => state.account);
    const [imageUrl, setImageUrl] = useState(
        accountLogin.avatar
            ? accountLogin.avatar
            : 'https://inkythuatso.com/uploads/thumbnails/800/2023/03/3-anh-dai-dien-trang-inkythuatso-03-15-25-56.jpg'
    );


    const handleClick = async (e) => {
        const imgFile = e.target.files[0];
        const imgRef = ref(imageDb, `files/${v4()}`);
        await uploadBytes(imgRef, imgFile)
            .then(async () => {
                const url = await getDownloadURL(imgRef);
                setImageUrl(url); // Lưu URL của ảnh từ input
                console.log(url)
                console.log(imageUrl)
            })
            .catch((error) => {
                console.log('Error uploading image: ', error);
            });
    };

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
            <div className="col-9" style={{ marginLeft: '27%' }}>
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
                        <input type="file" onChange={handleClick} style={inputImageStyle} />
                    </div>

                    {imageUrl && ( // Hiển thị ảnh từ input khi đã upload lên
                        <img
                            src={imageUrl}
                            height={300}
                            width={300}
                            alt="k thấy gì"
                            className="border rounded-circle"
                            style={{ marginLeft: '-300px' }} // Điều chỉnh vị trí để đè lên avatar
                        />
                    )}

                    <div className="col-8 mt-5 ms-5">
                        <h3>
                            Họ và tên: {accountLogin.firstname} {accountLogin.lastname}{' '}
                        </h3>
                        <h5>
                            Địa chỉ: {accountLogin.address} {accountLogin.district} {accountLogin.ward} {accountLogin.province}{' '}
                        </h5>
                        <h5>Số điện thoại: {accountLogin.phone} </h5>
                        <h5>Email: {accountLogin.email}</h5>
                        <h5>Ví tiền: {accountLogin.wallet}</h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountDetail;
