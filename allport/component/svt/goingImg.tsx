import React, {useCallback, useState} from 'react';
import {baseURL} from "../../config/config";
import SVTImg from "./slickI";


const ImageG= ({images}) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false)
    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, [])

    const onClose = useCallback(() => {
        setShowImagesZoom(false);
    }, []);

    return (
        <>
            <div className="going-detail">
                {showImagesZoom && <SVTImg images={images} onClose={onClose}/>}
                <div className="img-zip-zoom">
                    <img className="before-zoom" src={baseURL + "/svt/" + images[0].src} alt={baseURL + "/svt/" + images[0].src}
                         width="50%" onClick={onZoom}/>
                    <div role="presentation"
                         style={{display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle'}}
                         onClick={onZoom} className="moresee-img">
                        {images.length - 1}개의 사진 더보기
                    </div>
                </div>
            </div>
        </>
    )


}

export default ImageG;
