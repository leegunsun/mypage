import { useEffect, useState } from 'react'
import * as St from './footer.style'

export default function Footer () {

    const [isHight, setIsHight] = useState(window.innerHeight)


    useEffect(() => {

        const handleResize = () => {
            setIsHight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    },[isHight])


    return <>
    {isHight < 1124 ? false : <St.footerContainer src= "https://capsule-render.vercel.app/api?type=waving&color=0:fad0c4,100:ffd1ff&height=120%&fontSize=30" ></St.footerContainer>}
    
    </>
}