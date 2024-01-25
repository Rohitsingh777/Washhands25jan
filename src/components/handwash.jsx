import {  useEffect } from 'react';
import handwashpic from '../images/handwash.png'
import { useState } from 'react';
import squirt from '../audio/handwashsound.mp3'
import soaphands from '../images/soaponlyhands.png'
import { useRecoilState, useResetRecoilState } from 'recoil';
import Handpicstate from "../store/atom";
import Titlestate from '../store/title';
import tapstate from '../store/tapdisable';


export default function Dettol(){
    const [isClicked, setisClicked ] = useState(true);
    const [hands , setHands] = useRecoilState(Handpicstate);
    const [title , setTitle ] = useRecoilState(Titlestate)
    const [rotated , setRotated ] = useState(false)
    const [tap , settap ] = useRecoilState(tapstate) ; 


    const glowingStyle = {
        backgroundColor: isClicked ? '#3e3ee4ad' : '#e84f93ad'  , // Your div background color
        borderRadius: '10px',     // Optional: Add rounded corners
        boxShadow: '0 0 10px 5px #00f',  // Glowing effect
        animation: 'pulse 1s infinite',  // Optional: Add a smooth transition
        position : 'absolute',
        zIndex: 2, 
        left:'10%',
        top: '41%',
        height: '320',
        width:'320',
        rotate : rotated ? '45deg' : '0deg'
      };

function clickondettol(){
    setisClicked(false)
    console.log('clicked the dettol'); 
    const audio  = new Audio(squirt);
    audio.play();
    setHands(soaphands)
    setTitle("NOW lets wash them ")
    setRotated(true)
    settap(true) ; 
    
    
    setTimeout(() => {
        setRotated(false)
    }, 500);

}


    return(
        <div style={glowingStyle} >
            <img src={handwashpic} alt='Dettol' width="300" height="300" onClick={clickondettol} ></img>
        </div>
    )
}