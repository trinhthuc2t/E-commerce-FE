import './App.css';
import {Route, Routes} from "react-router-dom";
import Register from "./Components/register/Register";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import TopBar from "./Components/TopBar";
import Login from "./Components/Login";

function App() {
    return (
        <div className="App">
            <TopBar/>
            <Routes>
                <Route path={"/"} element={<Home/>}>

                </Route>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/register"} element={<Register/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
