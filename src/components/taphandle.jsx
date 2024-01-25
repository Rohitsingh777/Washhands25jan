import { useState } from "react"
import tapsound from '../audio/tapwater.mp3'
import Handpicstate from "../store/atom";
import washhands from '../images/washinghands.png'
import { useRecoilState } from "recoil";
import Titlestate from "../store/title";




export default function Taphandle(){
    const [isClicked, setisClicked ] = useState (true);
    const [hands , setHands] = useRecoilState(Handpicstate)
    const [title , setTitle ] = useRecoilState(Titlestate)

    const  hadnlestyle = {
        backgroundColor: isClicked ? '#3e3ee4ad' : '#e84f93ad' , // Your div background color
        borderRadius: '10px',     // Optional: Add rounded corners
        boxShadow: '0 0 10px 5px #00f',  // Glowing effect
        animation: 'pulse 1s infinite',  // Optional: Add a smooth transition
        position : 'absolute',
        zIndex: 2, 
        left:'42%',
        top: '25%',
        height: '50px',
        width:'50px'
    }


    function handleclick(){
            setisClicked(false)
            console.log('clicked the div ')
            const audio = new Audio(tapsound);
            audio.play();
            setHands(washhands)
            setTitle("You are free of germs now lets do that again")

            setTimeout(() => {
                window.location.reload()
            }, 5000);



    }

    return(
        <div style={hadnlestyle} onClick={handleclick}>

        </div>
    )
}