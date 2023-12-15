import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyD_4i_RIvKvat9HNvBGDgYPzdP0v5cLcN0",
    authDomain: "e-commerce-88fe1.firebaseapp.com",
    projectId: "e-commerce-88fe1",
    storageBucket: "e-commerce-88fe1.appspot.com",
    messagingSenderId: "182642001838",
    appId: "1:182642001838:web:bd431f67e86e5885d7ea3f"
};
const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);