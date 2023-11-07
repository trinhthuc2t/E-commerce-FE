import './App.css';
import {Route, Routes} from "react-router-dom";
import Bar from "./Components/Bar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
    return (
        <div className="App" style={{backgroundColor:"rgb(239,253,245)"}}>
            <Bar/>
            <Routes>
                <Route path={"/"} element={<Home/>}>

                </Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
