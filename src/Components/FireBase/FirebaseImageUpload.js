import React, { useState } from 'react';
import { imageDb } from './ConfigFirebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

const FirebaseImageUpload = () => {
    const [img, setImg] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleClick = async () => {
        const imgRef = ref(imageDb, `files/${v4()}`);
        await uploadBytes(imgRef, img).then(async () => {
            const url = await getDownloadURL(imgRef);
            setImageUrl(url);
        }).catch(error => {
            console.log('Error uploading image: ', error);
        });
    };

    return (
        <div className="pt-100">
            <input type="file" onChange={(e) => setImg(e.target.files[0])} />
            <button onClick={handleClick}>Lưu</button>
            {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />} {/* Hiển thị ảnh */}
        </div>
    );
};

export default FirebaseImageUpload;
