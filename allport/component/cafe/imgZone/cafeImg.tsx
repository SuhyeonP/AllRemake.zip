import React, {useCallback, useEffect, useState} from "react";
import ImagesZoom from "./index";
import {cafeURL} from "../../../config/config";
import {PlusOutlined} from "@ant-design/icons";

const CafeImages=({images,onImg})=>{
    const [showImagesZoom, setShowImagesZoom] = useState(false);

    const onClose = useCallback(() => {
        setShowImagesZoom(false);
    }, []);
    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, []);



    return(
        <div className="img-section">
            <img className="not-open-img" src={cafeURL+onImg}/>
            <p onClick={onZoom} className="more-click">더보기<PlusOutlined /></p>
            {showImagesZoom && <ImagesZoom images={images[0]} onClose={onClose} />}
        </div>
    )
}
export default CafeImages;
