import AllMenu from "../../../component/allC";
import React, {useEffect, useState} from "react";
import {baseURL, gikalURL} from "../../../config/config";
import {useRouter} from "next/router";
import GikalLayout from "../../../component/gikal/layout";
import axios from "axios";
import Link from "next/link";
import {Breath} from "../../../css/gikal";
import {GetServerSideProps, GetStaticProps} from "next";

const GikalEnd = (data) => {
    const router = useRouter()
    let count = router.query.more;
    let sn = Number(count)
    let [cnn, setCnn] = useState(sn)

    const [next,setNext]=useState(true)
    const [before,setBefore]=useState(false)

    const [breath, setBreath] = useState('loading')
    const [explain, setExplain] = useState('loading')
    const [Img1, setImg1] = useState('')
    const [Img2, setImg2] = useState('')
    const [color, setColor] = useState<string | null>()
    const [name, setName] = useState('')
    const [beforeLink,setBeforeLink]=useState('/')
    const [nextLink,setNextLink]=useState('/')

    useEffect(()=>{
        console.log(cnn)
        if(cnn===1){
            setNext(true)
            setNextLink('/gikal/character/'+Number(cnn+1))
            return setBefore(false)
        }else if(cnn===16){
            setBefore(true)
            setBeforeLink('/gikal/character/'+Number(cnn-1))
            return setNext(false)
        }else{
            setBeforeLink('/gikal/character/'+Number(cnn-1))
            setNextLink('/gikal/character/'+Number(cnn+1))
            setBefore(true)
            setNext(true)
        }
    },[cnn])

    useEffect(() => {
        setCnn(sn)
        setBreath(data.props.breath[0].BREATH_NM)
        setColor(data.props.breath[0].color)
        setExplain(data.props.character[0].CHAR_EXP)
        setImg1(gikalURL + data.props.character[0].CHAR_IMG1)
        setImg2(gikalURL + data.props.character[0].CHAR_IMG2)
        setName(data.props.character[0].CHAR_NM)
    }, [data])


    return (
        <>
            <AllMenu/>
            <GikalLayout>
                <div className="container">
                    <div className="more-see">
                        <div className="mim">
                            <img src={Img1} className="f1p"/>
                            <img src={Img2} className="f2p"/>
                        </div>
                        <div className="char-txt">
                            <input type="hidden" id="siteN" value="${getChar.charNum }"/>
                            <h2 className="char-cont">{name}:<Breath color={color} className="use-breath">{breath}</Breath>의
                                호흡</h2>
                            <p className="use-exp">{explain}</p>
                        </div>
                        <div className="buton-zip">
                            {before&&<Link href={beforeLink}><a  className="next">◁</a></Link>}
                            {next&&<Link href={nextLink}><a  className="next">▷</a></Link>}
                        </div>
                    </div>
                </div>
            </GikalLayout>
        </>
    )
};


GikalEnd.getInitialProps= async (context) => {
    const res1 = await axios.get(baseURL + "/gikal/more/" + context.query.more)
    const character = await res1.data
    const res2 = await axios.get(baseURL+"/gikal/more/breath/"+context.query.more)
    const breath = await res2.data
    return {
        props: {
            breath,character
        }
    };
}

export default GikalEnd;
//{gikalURL+data.props.question[0].QUE_IMG}
// export async function getStaticProps(context){
//     const cookie = context.req ? context.req.headers.cookie : '';
//     axios.defaults.headers.Cookie = '';
//     if (context.req && cookie) {
//         axios.defaults.headers.Cookie = cookie;
//     }
//     const res1 = await axios.get(baseURL + "/gikal/more/" + context.query.more)
//     const character = await res1.data
//     const res2 = await axios.get(baseURL+"/gikal/more/breath/"+context.query.more)
//     const breath = await res2.data
//     return {
//         props: {
//             breath,character
//         }
//     };
// }
