import './App.css';
import {useState} from 'react'

function App() {
var a=20;
function increment(){
  a= a+1;
  // a=a+1:
  console.log(a);

}
const [value, setvalue] = useState(0);

function incrementState(){
  console.log("1st value");
  setvalue(function(prev){
    return prev + 1;
  })
}



  return (<>

  <div>Normal Variable {a}</div>
  <button onClick={increment}>Pluse</button>
<hr/>

  <div>state Variable {value}</div>
  <button onClick={incrementState}>Pluse</button>

    </>)}
export default App;
