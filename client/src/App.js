import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/nav/Header";
import Footer from "../src/components/nav/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const PageNotFound = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                404 | Page not found
            </div>
        </>
    );
};

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
