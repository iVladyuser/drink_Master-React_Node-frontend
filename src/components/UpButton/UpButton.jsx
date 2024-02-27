import { ToTopDiv, ArrowUp } from './UpButton.styled';
import React, { useState, useEffect } from 'react';


const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1000) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <ToTopDiv>
            {showTopBtn && (
                <ArrowUp
                    onClick={goToTop}
                />
            )}
        </ToTopDiv>
    );
};

export default ScrollToTop;
