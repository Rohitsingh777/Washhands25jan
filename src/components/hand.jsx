import { useEffect, useState } from "react"
import hand from '../images/Hand.png'
import presshand from '../images/press.png';
import Handpicstate  from '../store/atom.js';
import { useRecoilState } from "recoil";


export default function Hand(){
    const [position ,setPosition ] = useState({x : 0 , y:0 })
    const [handimg , setHandimg] = useRecoilState(Handpicstate)
   
    function mouseposition(e){
    setPosition({ x: e.clientX, y: e.clientY });
}

function handlemousedown () { 
    setHandimg(presshand)
}
function handlemouseup() {
    setHandimg(hand)
}
    useEffect(()=> { 
        window.addEventListener('mousemove' , mouseposition )
        window.addEventListener('mousedown' , handlemousedown )
        window.addEventListener('mouseup' , handlemouseup )
        return () => {
            window.removeEventListener('mousemove', mouseposition);
            window.removeEventListener('mousedown' , handlemousedown ); 
            window.removeEventListener('mouseup' , handlemouseup ); 

          };


    } , [])


    return(
        <div style={{position: 'absolute', left: position.x - 150 , top: position.y -150 , zIndex: '5', pointerEvents: 'none', opacity:'0.5'}}>
        <img src={handimg} alt="Hand" width="300" height="300"></img>
        </div>

    )
}