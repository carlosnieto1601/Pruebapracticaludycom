
import './App.css';
import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './components/Navbar.js';
import ReportCovid from './components/ReportCovid.js';
import AgregarReporte from './components/AgregarReporte';


function App() {

const [dat, setDat] = useState ({
  date:0,
  states:0,
  positive :0,
  negative: 0,
  pending:0
})

const [date, setdate]= useState ([])
const [listUpdated, setListUpdated] = useState(false)
useEffect ( ()=> {
const getCovid = () =>{
  fetch('https://api.covidtracking.com/v1/us/daily.json')
  .then(res => res.json())
  // .then(res => console.log(res))
  .then(res=> setdate(res))
}
getCovid()
setListUpdated(false)
}, [listUpdated])
  return (
    <Fragment>
      <Navbar brand='Covidtracking'/>
      <div className="container">
        <div className="row">
        <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Reporte de Covid los ultimos 30 dias</h2>
            <ReportCovid date={date} />
          </div>
          <div className="col-5">
            <h2 style={{textAlign: 'center'}}>Agregar Reporte</h2>
            <AgregarReporte dat={dat} setDat={setDat}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
