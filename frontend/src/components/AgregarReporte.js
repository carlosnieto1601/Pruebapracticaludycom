import React from "react";


const AgregarReporte = (dat, setDat) => {

    const handleChange = e => {
        setDat({
            ...dat,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = () => {

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dat)
        }
        fetch('https://api.covidtracking.com/v1/us/daily.json', requestInit)
         .then(res => res.text())
        .then(res => console.log(res))

       // reiniciando state de libro
        setDat({
            date:0,
            states:0,
            positive :0,
            negative: 0,
            pending:0
        })





    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">Date</label>
                <input name="date" onChange={handleChange}  type="number" id="date" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="states" className="form-label">States</label>
                <input name="states" onChange={handleChange}  type="number" id="states" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="positive" className="form-label">Positive</label>
                <input name="positive" onChange={handleChange} type="number" id="positive" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="negative" className="form-label">negative</label>
                <input name="negative" onChange={handleChange} type="number" id="negative" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="pending" className="form-label">pending</label>
                <input name="pending" onChange={handleChange} type="number" id="pending" className="form-control"/>
            </div>

            
            <button type="submit" className="btn btn-primary">Agregar Reporte</button>
        </form>
)

}

export default AgregarReporte;