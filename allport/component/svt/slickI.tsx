import React, {useState} from 'react';
import Slick from 'react-slick';
import {css} from "@emotion/css";
import {baseURL} from "../../config/config";
import {onlyImg2} from "../../css/svt";

const SVTImg = ({images, onClose}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <div className={css(onlyImg2)}>
            <div className="slick-header">
                <h1>상세 이미지</h1>
                <p className="closeBtn" onClick={onClose}>닫기</p>
            </div>
            <div className="slick-img">
                <Slick
                    initialSlide={0}
                    beforeChange={(slide) => setCurrentSlide(slide)}
                    infinite
                    arrows={false}
                    slidesToShow={1}
                    slidesToScroll={1}
                >
                    {images.map((x,ind)=>(
                        <div className="one-show" key={ind}>
                            <img src={baseURL+"/svt/" + x.src}/>
                        </div>
                    ))}
                </Slick>
            </div>
        </div>
    );
};
export default SVTImg;
