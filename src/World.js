import './Home.css';
// import { useState } from 'react/cjs/react.development';


function World() {


    
        fetch("https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats")
        .then(response => {
            return response.json();
          }).then(data => {
            console.log(data);
            document.getElementById('total').innerHTML=data.data.total_cases
            document.getElementById('active').innerHTML=data.data.currently_infected
            document.getElementById('recover').innerHTML =data.data.recovery_cases
            document.getElementById('death').innerHTML=data.data.death_cases
            // document.getElementById('date').innerHTML=data.data.last_update
            document.getElementById('date').innerHTML=` Last updated on ${data.data.last_update}`

          }).catch(err => {
            console.log(err);
          });
 




  return (
      <>

<div class="section">

<div class="dateinfo">
    <pan>World</pan><br />
    <date id="date" >Last Updated on fetching..</date>
</div>

<div class="first"  id="box">

    <h2>Confirmed Case-</h2>
    <h1 id="total">fetching..</h1>
    <p>No. of Confirmed COVID-19 Cases in World</p>
</div>
<div class="second" id="box">
    
    <h2>Active Case-</h2>
    <h1 id="active">fetching..</h1>
    <p>No. of Active COVID-19 Cases in World</p>
</div>
<div class="third" id="box">
   
    <h2>Recovered Case-</h2>
    <h1 id="recover">fetching..</h1>
    <p>No. of Recoveries COVID-19 Cases in World</p>
</div>
<div class="fourth" id="box">
    
    <h2>Deceased Case-</h2>
    <h1 id="death">
    fetching..</h1>
    <p>No. of Deaths caused by COVID-19 in World</p>
</div>


</div>

      </>
   
  );
}

export default World;
