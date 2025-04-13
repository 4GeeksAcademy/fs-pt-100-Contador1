import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

function Contador (props) {
  return (
    <div className="Reloj">
      <div className="alarma"><i class="bi bi-alarm"></i></div>
      <div className="horas">{props.digitFour % 10}</div>
      <div className="minutos">{props.digitThree % 10}</div>
      <div className="segundos">{props.digitTwo % 10}</div>
      <div className=" milisegundos">{props.digitOne % 10}</div>
    </div>
  
  )
}
let counter= 0;
setInterval(function() {
  const four = Math.floor (counter/1000)
  const three= Math.floor (counter/100)
  const Two= Math.floor (counter/10)
  const One= Math.floor (counter/1)
  
  counter++;
 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contador digitOne={One} digitTwo={Two} digitThree={three} digitFour={four} />
  </React.StrictMode>,
) 

}, 1000);



