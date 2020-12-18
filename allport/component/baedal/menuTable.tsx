import React, {memo, useCallback} from "react";
import {baseURL} from "../../config/config";

const MenuTable=({Menu,postOrder,setImgSrc,imgSrc})=>{
    const neverChange=baseURL+"/basic.jpg";
    const changeImage=useCallback(()=>{
        setImgSrc(baseURL+"/menu"+(Menu.id+1)+".jpg")
    },[imgSrc])

    const removeImg=useCallback(()=>{
        setImgSrc(neverChange)
    },[imgSrc])

    return(
        <tr>
            <td onMouseOver={changeImage} onMouseOut={removeImg}>{Menu.name}</td>
            <td>{Menu.price}</td>
            <th>&nbsp;</th>
            <td className="youcanClick" onClick={()=>postOrder(Menu.id)}>Send Order</td>
        </tr>
    )
}

export default memo(MenuTable);
