import React, { useState } from "react";
import { SlideImage, StyledSlider } from "../Component/SliderImage";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import slidearrows from "../module/slider.module.css"

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
            <FaChevronLeft className={slidearrows.leftArrow} onClick={prevSlide} />
            <FaChevronRight className={slidearrows.rightArrow} onClick={nextSlide} />
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
