import { useEffect,useState } from "react";
import { Board } from '../board/board'
import * as St from "./header.style"
import { Link } from "react-router-dom";

export default function Header () {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth])
   
   
    return <>
     <St.mainContainer>
       <Link to={`/Board`}>
        <St.wrapContainer> <St.HeaderImage 
                src="https://capsule-render.vercel.app/api?type=waving&color=0:fad0c4,100:ffd1ff&text=Welcome!&height=120%&fontSize=30" 
                alt="header" 
            /></St.wrapContainer>
            </Link> 
<St.linkContainer>
    <St.link to="/1">Container1</St.link>
    <St.link to="/2">Container2</St.link>
    <St.link to="/3">Container3</St.link>
    <St.BorderLine />
</St.linkContainer>
</St.mainContainer></>
   
}