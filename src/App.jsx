import './App.css';
import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BestBooks from "./components/BestBooks/BestBooks";
import Banner from "./components/Banner/Banner";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import AllBooks from "./components/AllBooks/AllBooks";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import PopupLogin from "./components/Popup/PopupLogin";
import {Light} from "@mui/icons-material";

function App() {
    const [orderPopup, setOrderPopup] = React.useState(false)

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    };

    React.useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);

    return (
        <>
            <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
                <Navbar handleOrderPopup={handleOrderPopup}/>
                <Hero handleOrderPopup={handleOrderPopup}/>
                <BestBooks handleOrderPopup={handleOrderPopup}/>
                <Banner/>
                <AppStoreBanner/>
                <AllBooks/>
                <Testimonial/>
                <Footer/>
                <PopupLogin handleOrderPopup={handleOrderPopup} orderPopup={orderPopup}/>
            </div>
        </>
    );
}

export default App;
