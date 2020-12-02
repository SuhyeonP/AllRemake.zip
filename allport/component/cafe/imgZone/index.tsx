import React, {useState} from 'react';
import Slick from 'react-slick';
import {onlyImg} from '../../../css/cafe';
import {cafeURL} from "../../../config/config";
import {css} from "@emotion/css";

const ImagesZoom = ({images, onClose}) => {
    const imgArr=[images.IMG_ADDR,images.SUBIMG_ADDR]
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <div className={css(onlyImg)}>
            <header>
                <h1>상세 이미지</h1>
                <p className="closeBtn" onClick={onClose}>닫기</p>
            </header>
            <div className="slick-img">
                <Slick
                    initialSlide={0}
                    beforeChange={(slide) => setCurrentSlide(slide)}
                    infinite
                    arrows={false}
                    slidesToShow={1}
                    slidesToScroll={1}
                >
                    {imgArr.map((x,ind)=>(
                        <div className="one-show" key={ind}>
                            <img src={cafeURL + x}/>
                        </div>
                    ))}
                </Slick>
            </div>
        </div>
    );
};
export default ImagesZoom;
