
import mainhand  from '../images/Hand.png'; 
import presshand   from '../images/press.png'; 

import { atom } from 'recoil';

 const Handpicstate = atom({
  key: 'Handpic',
  default: mainhand,
});


export default Handpicstate ;