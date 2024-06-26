import './App.css';
import {Route, Routes} from "react-router-dom";
import Register from "./Components/Register/Register";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import TopBar from "./Components/TopBar";
import Login from "./Components/Login";
import ProductsDetail from "./Components/Product/ProductsDetail";
import Profile from "./Components/Profile";
import Message from "./Components/Message";
import Notification from "./Components/Notification";
import AccountDetail from "./Components/Register/AccountDetail";
import ProductByShop from "./Components/Product/ProductByShop";
import EditProduct from "./Components/Product/CreateAndEditProduct/EditProduct";
import Cart from "./Components/Product/Cart";
import Payment from "./Components/Product/Payment";
import CreateProduct from "./Components/Product/CreateAndEditProduct/CreateProduct";


function App() {
    return (
        <div className="App">
            <TopBar/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/product-detail/:productId"} element={<ProductsDetail/>}/><Route path={"/login"} element={<Login/>}/>
                <Route path={"/Register"} element={<Register/>}/>
                <Route path={"/profile/"} element={<Profile/>}>
                    <Route path={"information"} element={<AccountDetail/>}/>
                    <Route path={"message"} element={<Message/>}/>
                    <Route path={"notification"} element={<Notification/>}/>
                    <Route path={"shop-owner"} element={<ProductByShop/>}/>
                    <Route path={"payment"} element={<Payment/>}/>
                    <Route path={"carts"} element={<Cart/>}/>
                    <Route path={"edit/:productId"} element={<EditProduct/>}/>
                    <Route path={"create"} element={<CreateProduct/>}/>
                </Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
