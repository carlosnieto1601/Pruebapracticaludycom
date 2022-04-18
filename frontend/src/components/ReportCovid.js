import React from "react";

const ReportCovid = ({date,setListUpdated}) => {


    const handleDelete = date => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('https://api.covidtracking.com/v1/us/daily.json' + date, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }

    

    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>date</th>
                    <th>states</th>
                    <th>positive</th>
                    <th>negative</th>
                    <th>pending</th>
                    <th>Accion</th>
                   

                </tr>
            </thead>
            <tbody>
                {date.map(dato => (
                    <tr key={dato.id}>
                        <td>{dato.date}</td>
                        <td>{dato.states}</td>
                        <td>{dato.positive}</td>
                        <td>{dato.negative}</td>
                        <td>{dato.pending}</td>
                      
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(dato.date)}  className="btn btn-danger">Delete</button>
                            </div>
                            {' '}
                            <div className="mb-3">
                                <button  className="btn btn-dark">Update</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default ReportCovid;