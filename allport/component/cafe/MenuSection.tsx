import React from "react";
import {menuTable} from "../../css/cafe";
import {css} from "@emotion/css";

const menuPart=['loading','Coffee','Non Coffee','Bakery']

const MenuSection=({menus})=>{
    return (
        <div className={css(menuTable)}>
            <table>
                <thead>
                <tr>
                    <th>name</th>
                    <th>kind</th>
                    <th>price</th>
                </tr>
                </thead>
                <tbody>
                {menus.map((x,y)=>(
                    <tr key={y}>
                        <td className="menu-name">{x.MENU_NM}</td>
                        <td>{menuPart[x.MENU_PART]}</td>
                        <td className="menu-price">{x.MENU_PRICE}</td>
                    </tr>
                ))}
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
}
export default MenuSection;
