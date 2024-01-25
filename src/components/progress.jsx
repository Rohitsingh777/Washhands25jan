import { useRecoilState } from "recoil";
import Titlestate from "../store/title";
import { useEffect } from "react";



export default function Title(){
    const [title , setTitle ] = useRecoilState(Titlestate)
    useEffect(()=>{
            setTimeout(() => {
                setTitle("Lets starts with soap")
            }, 2000);
            
  
    },[])
    return(
        <div style={{textAlign : 'center' , fontSize:'8vh' , background: 'white' , fontWeight:'bold' , fontFamily:'cursive'}}>
            {title}
        </div>
    )
}