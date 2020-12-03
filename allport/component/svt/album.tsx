import React from 'react'
import Link from "next/link";

const AlbumList=({album}) => {

    return (
        <>
            <li className="album-item">
                <Link href={album.link}>
                    <a className="album-link">
                        <img src={album.img} className="album-img"/>
                        <p className="album-title">{album.title}</p>
                        <p>{album.part}</p>
                        <p>{album.when}</p>
                    </a>
                </Link>
            </li>
        </>
    )
}
export default AlbumList
