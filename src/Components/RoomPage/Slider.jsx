import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import styles from "./slider.module.css"
import styled from "styled-components";

const SlideImage = styled.img`
    width: 700px;
    height: 400px;
    border-radius: 10px;         
`;

const StyledSlider = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <StyledSlider>
            <FaChevronLeft className={styles.leftArrow} onClick={prevSlide} />
            <FaChevronRight className={styles.rightArrow} onClick={nextSlide} />
            {slides.map((slide, index) => {
                return (
                    <div key={index}>
                        {index === current && <SlideImage src={slide.image} alt="" />}
                    </div>
                );
            })}
        </StyledSlider>
    );
};

export default Slider;