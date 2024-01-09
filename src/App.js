
import { useState } from 'react';
import { Button } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import sound from './sound.wav';
import win from './win.wav'
import './App.css';
function App() {
  const row = [0 ,3 ,6];
  const [playing,setplaying] = useState(true);
  //const column = [0 ,1, 2];
  const [state,setstate] = useState(Array(9).fill(null));
  const [isXTurn , setTurn] = useState(true);
  const handelClicked =(index)=>{
   playing && new Audio(sound).play();
    const copystate = [...state];
    copystate[index] = isXTurn ? 'X' : 'Y';
    setstate(copystate);
    setTurn(!isXTurn);
    }
    //const [win,setwin] = useState(null);
 const checkwinner = ()=>{
const winner = [
  [0 ,1 ,2],
  [3, 4, 5],
  [6, 7, 8],
  [0 ,3 ,6],
  [1 ,4 ,7],
  [2 ,5 ,8],
  [0, 4, 8],
  [2, 4, 6]
];

for( let logic of winner){
  const [a, b, c] = logic;
  if(state[a] != null && state[a] === state[b] && state[a] === state[c]){
    playing && new Audio(win).play();
   return true;
  }
}
return false;
    }
    const winn = checkwinner();
    if(winn){
      setTimeout(()=>{
        alert(`${isXTurn ? '2nd' : '1st'}player win`);
      },200);
      setstate(Array(9).fill(null));
      setTurn(true);
    }
  return (
   <>
    <div className='Mainbody'>
    {playing ? <VolumeUpIcon onClick={()=>setplaying(!playing)} sx={{fontSize:'1em', position:'absolute',top:'1em',right:'1em'}}/>:<VolumeOffIcon onClick={()=>setplaying(!playing)} sx={{fontSize:'1em', position:'absolute',top:'1em',right:'1em'}}/>}
      <div className='main'>
      {
row.map((row)=>{
  return <div key={row} className='row'>
 <Button  className='column'  onClick={()=>handelClicked(row+0)} sx={{fontSize:'.7em'}}>
{state[row+0] === null ? 0 : state[row+0]}
<hr className='vr'/>
  </Button>
  <Button  className='column'  onClick={()=>handelClicked(row+1)} sx={{fontSize:'.7em'}}>
{state[row+1] === null ? 0 : state[row+1]}
<hr className='vr'/>
  </Button>
  <Button  className='column'  onClick={()=>handelClicked(row+2)} sx={{fontSize:'.7em'}}>
{state[row+2] === null ? 0 : state[row+2]}
<hr className='vr'/>
  </Button>
  </div>
})
      }
      </div>
      <p>Player turn : {isXTurn ? '1st' : '2nd'}</p>
    </div>
   </>
  );
}

export default App;
