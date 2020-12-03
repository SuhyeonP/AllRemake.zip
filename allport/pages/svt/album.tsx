import React, {useEffect, useState} from "react";
import SVTAppLayout from "../../component/svt/layout";
import AlbumList from "../../component/svt/album";
import axios from "axios";
import {baseURL} from "../../config/config";

const Album=({data})=>{
    const [albumData,setAlbum]=useState(data)

    useEffect(()=>{
        setAlbum(data)
    },[])

    return(
        <SVTAppLayout>
            <h1 className="mini-text">Album</h1>
            <div className="album-sec">
                <ul className="album-list">
                    {albumData.map((x,y)=><AlbumList key={y} album={x}/>)}
                </ul>
            </div>
        </SVTAppLayout>
    )
}

export default Album;

export async function getServerSideProps() {
    const res=await axios.get(baseURL+"/svt/albums")
    const data=await res.data;
    return {
        props: {
            data
        },
    }
}

