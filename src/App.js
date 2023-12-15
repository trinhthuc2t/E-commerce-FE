import './App.css';
import {Route, Routes} from "react-router-dom";
import Register from "./Components/Register/Register";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import TopBar from "./Components/TopBar";
import Login from "./Components/Login";
import ProductsDetail from "./Components/ProductsDetail";
import Profile from "./Components/Profile";
import Message from "./Components/Message";
import Notification from "./Components/Notification";
import AccountDetail from "./Components/Register/AccountDetail";
import F8 from "./Components/Register/F8";
import FirebaseImageUpload from "./Components/FireBase/FirebaseImageUpload";


function App() {
    return (
        <div className="App">
            <TopBar/>
{/*<FirebaseImageUpload/>*/}
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/product-detail/:productId"} element={<ProductsDetail/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/Register"} element={<Register/>}/>
                <Route path={"/profile/"} element={<Profile/>}>
                    <Route path={"f8"} element={<F8/>}/>
                    <Route path={"information"} element={<AccountDetail/>}/>
                    <Route path={"message"} element={<Message/>}/>
                    <Route path={"notification"} element={<Notification/>}/>
                </Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
