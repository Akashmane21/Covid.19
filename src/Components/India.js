import '../Home.css';




function India() {



   
      
   

        fetch("https://www.mohfw.gov.in/data/datanew.json")
 .then(response => {
     return response.json();
   }).then(data => {
     console.log(data[36]);
     document.getElementById('total').innerHTML=data[36].new_positive
     document.getElementById('active').innerHTML=data[36].new_active
     document.getElementById('recover').innerHTML =data[36].new_cured
     document.getElementById('death').innerHTML=data[36].new_death
    
     document.getElementById('date').innerHTML=` Last updated on ${data.data.last_update}`

   }).catch(err => {
     console.log(err);
   });



 fetch("https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats")
 .then(response => {
     return response.json();
   }).then(data => {
     console.log(data);
   
     document.getElementById('date').innerHTML=` Last updated on ${data.data.last_update}`

   }).catch(err => {
     console.log(err);
   });

  return (
      <>

<div class="section">

<div class="dateinfo">
    <pan>INDIA</pan><br />
    <date id="date" >Last Updated on </date>
</div>

<div class="first"  id="box">

    <h2>Confirmed Case-</h2>
    <h1 id="total">total</h1>
    <p>No. of Confirmed COVID-19 Cases in India</p>
</div>
<div class="second" id="box">
    
    <h2>Active Case-</h2>
    <h1 id="active">active</h1>
    <p>No. of Active COVID-19 Cases in India</p>
</div>
<div class="third" id="box">
   
    <h2>Recovered Case-</h2>
    <h1 id="recover">recover</h1>
    <p>No. of Recoveries COVID-19 Cases in India</p>
</div>
<div class="fourth" id="box">
    
    <h2>Deceased Case-</h2>
    <h1 id="death">
    death</h1>
    <p>No. of Deaths caused by COVID-19 in India</p>
</div>


</div>

      </>
   
  );
}

export default India;
