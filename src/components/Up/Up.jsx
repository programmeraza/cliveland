import React, { useState, useEffect } from "react";
import './Up.scss'
import { IoIosArrowUp } from "react-icons/io";

const Up = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            {isVisible && (
                <button className="scrollToTop" onClick={scrollToTop}>
                    <IoIosArrowUp />
                </button>
            )}
        </>
    )
}

export default Up
