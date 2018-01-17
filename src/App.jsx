import React, {Component} from 'react';

const patients = require('./patients.json');

class App extends Component {

  render() {

    let rows = patients.map(function(row, k) {

      const properDate = new Date(row.dob);
      const now = new Date();
      const age = now.getFullYear() - properDate.getFullYear();

      return <tr key={k}>
        <td>{row.name.last}, {row.name.first}</td>
        <td>{row.mrn}</td>
        <td>{row.dob}</td>
        <td>{age} y.o. {row.sex}</td>
        <td>{row.treatment_site}</td>
      </tr>
    });

    return (
      <div style={{padding: '2rem 0'}}>
        <h1>Patient Portal</h1>
        <table className="ui table">
          <thead>
            <tr>
              <th>Name</th>
              <th>MRN</th>
              <th>DOB</th>
              <th>Demographics</th>
              <th>Treatment Site</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
