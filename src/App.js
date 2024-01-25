import { RecoilRoot } from 'recoil';
import './App.css';
import Hand from './components/hand';
import backgroundimg from './images/SINK.jpeg'
import Dettol from './components/handwash';
import Taphandle from './components/taphandle'
import Title from './components/progress';
function App() {
  return (

<RecoilRoot>
<div style={{
  height : '100vh' ,
  width  : '100vw',
  backgroundImage : `url(${backgroundimg})`,
  backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', 
}}>
  <Title/>
<Taphandle/>
<Dettol/>
<Hand/>
</div>
</RecoilRoot>

  );
}

export default App;
