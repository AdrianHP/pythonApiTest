import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="content">
      
      <div className='sidebar'>
        <a style={{color:"black"}} href="https://www.mozilla.org/es-ES/"> screen 1 </a>
        <a  style={{color:"black"}}> screen 2 </a>
        <a  style={{color:"black"}}> screen 3 </a>
        <DataScreen1></DataScreen1>
      </div>

      <div className='content-area'>

      </div>

     </div>
    </>
  )
}

function DataScreen1()
{
  const [dataScreen1, setdataScreen1] = useState(null);
 


  useEffect(() => {
    fetch("http://127.0.0.1:8080", {
      method: "GET",
      mode: 'no-cors',      
     
    })
      .then((response) => response.json())
      .then((data) => {
        setdataScreen1(data[0].message);
       
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <div>
      data screen 1 :{dataScreen1}
    </div>
    </>
  )
}
export default App
