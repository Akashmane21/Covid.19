import '../Home.css';

function States() {




    

 function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable1");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }





  fetch("https://api.covid19india.org/v4/min/data.min.json")
  .then(response => {
      return response.json();
    }).then(data => {
      // console.log(data);
      document.getElementById('anc').innerHTML =data.AN.total.confirmed
      document.getElementById('ant').innerHTML =data.AN.total.tested
      document.getElementById('and').innerHTML =data.AN.total.deceased
      document.getElementById('anv').innerHTML =data.AN.total.vaccinated
      document.getElementById('anr').innerHTML =data.AN.total.recovered
  

      document.getElementById('arc').innerHTML =data.AR.total.confirmed
      document.getElementById('art').innerHTML =data.AR.total.tested
      document.getElementById('ard').innerHTML =data.AR.total.deceased
      document.getElementById('arv').innerHTML =data.AR.total.vaccinated
      document.getElementById('arr').innerHTML =data.AR.total.recovered
  
      document.getElementById('apc').innerHTML =data.AP.total.confirmed
      document.getElementById('apt').innerHTML =data.AP.total.tested
      document.getElementById('apd').innerHTML =data.AP.total.deceased
      document.getElementById('apv').innerHTML =data.AP.total.vaccinated
      document.getElementById('apr').innerHTML =data.AP.total.recovered
  

      document.getElementById('asc').innerHTML =data.AS.total.confirmed
      document.getElementById('ast').innerHTML =data.AS.total.tested
      document.getElementById('asd').innerHTML =data.AS.total.deceased
      document.getElementById('asv').innerHTML =data.AS.total.vaccinated
      document.getElementById('asr').innerHTML =data.AS.total.recovered

      document.getElementById('BRC').innerHTML =data.BR.total.confirmed
      document.getElementById('BRT').innerHTML =data.BR.total.tested
      document.getElementById('BRD').innerHTML =data.BR.total.deceased
      document.getElementById('BRV').innerHTML =data.BR.total.vaccinated
      document.getElementById('BRR').innerHTML =data.BR.total.recovered
  
      document.getElementById('CHC').innerHTML =data.CH.total.confirmed
      document.getElementById('CHT').innerHTML =data.CH.total.tested
      document.getElementById('CHD').innerHTML =data.CH.total.deceased
      document.getElementById('CHV').innerHTML =data.CH.total.vaccinated
      document.getElementById('CHR').innerHTML =data.CH.total.recovered
  
      document.getElementById('CTC').innerHTML =data.CT.total.confirmed
      document.getElementById('CTT').innerHTML =data.CT.total.tested
      document.getElementById('CTD').innerHTML =data.CT.total.deceased
      document.getElementById('CTV').innerHTML =data.CT.total.vaccinated
      document.getElementById('CTR').innerHTML =data.CT.total.recovered
  

      document.getElementById('DNC').innerHTML =data.DN.total.confirmed
      document.getElementById('DNT').innerHTML =data.DN.total.tested
      document.getElementById('DND').innerHTML =data.DN.total.deceased
      document.getElementById('DNV').innerHTML =data.DN.total.vaccinated
      document.getElementById('DNR').innerHTML =data.DN.total.recovered
  

      document.getElementById('DLC').innerHTML =data.DL.total.confirmed
      document.getElementById('DLT').innerHTML =data.DL.total.tested
      document.getElementById('DLD').innerHTML =data.DL.total.deceased
      document.getElementById('DLV').innerHTML =data.DL.total.vaccinated
      document.getElementById('DLR').innerHTML =data.DL.total.recovered
  

      document.getElementById('GAC').innerHTML =data.GA.total.confirmed
      document.getElementById('GAT').innerHTML =data.GA.total.tested
      document.getElementById('GAD').innerHTML =data.GA.total.deceased
      document.getElementById('GAV').innerHTML =data.GA.total.vaccinated
      document.getElementById('GAR').innerHTML =data.GA.total.recovered

      document.getElementById('GJC').innerHTML =data.GJ.total.confirmed
      document.getElementById('GJT').innerHTML =data.GJ.total.tested
      document.getElementById('GJD').innerHTML =data.GJ.total.deceased
      document.getElementById('GJV').innerHTML =data.GJ.total.vaccinated
      document.getElementById('GJR').innerHTML =data.GJ.total.recovered
  
      document.getElementById('HRC').innerHTML =data.HR.total.confirmed
      document.getElementById('HRT').innerHTML =data.HR.total.tested
      document.getElementById('HRD').innerHTML =data.HR.total.deceased
      document.getElementById('HRV').innerHTML =data.HR.total.vaccinated
      document.getElementById('HRR').innerHTML =data.HR.total.recovered
  
      document.getElementById('HPC').innerHTML =data.HP.total.confirmed
      document.getElementById('HPT').innerHTML =data.HP.total.tested
      document.getElementById('HPD').innerHTML =data.HP.total.deceased
      document.getElementById('HPV').innerHTML =data.HP.total.vaccinated
      document.getElementById('HPR').innerHTML =data.HP.total.recovered
  

      document.getElementById('JKC').innerHTML =data.JK.total.confirmed
      document.getElementById('JKT').innerHTML =data.JK.total.tested
      document.getElementById('JKD').innerHTML =data.JK.total.deceased
      document.getElementById('JKV').innerHTML =data.JK.total.vaccinated
      document.getElementById('JKR').innerHTML =data.JK.total.recovered
  

      document.getElementById('JHC').innerHTML =data.JH.total.confirmed
      document.getElementById('JHT').innerHTML =data.JH.total.tested
      document.getElementById('JHD').innerHTML =data.JH.total.deceased
      document.getElementById('JHV').innerHTML =data.JH.total.vaccinated
      document.getElementById('JHR').innerHTML =data.JH.total.recovered

      
      document.getElementById('KAC').innerHTML =data.KA.total.confirmed
      document.getElementById('KAT').innerHTML =data.KA.total.tested
      document.getElementById('KAD').innerHTML =data.KA.total.deceased
      document.getElementById('KAV').innerHTML =data.KA.total.vaccinated
      document.getElementById('KAR').innerHTML =data.KA.total.recovered

      document.getElementById('KLC').innerHTML =data.KL.total.confirmed
      document.getElementById('KLT').innerHTML =data.KL.total.tested
      document.getElementById('KLD').innerHTML =data.KL.total.deceased
      document.getElementById('KLV').innerHTML =data.KL.total.vaccinated
      document.getElementById('KLR').innerHTML =data.KL.total.recovered
  

      document.getElementById('LDC').innerHTML =data.LD.total.confirmed
      document.getElementById('LDT').innerHTML =data.LD.total.tested
      document.getElementById('LDD').innerHTML =data.LD.total.deceased
      document.getElementById('LDV').innerHTML =data.LD.total.vaccinated
      document.getElementById('LDR').innerHTML =data.LD.total.recovered

      document.getElementById('MPC').innerHTML =data.MP.total.confirmed
      document.getElementById('MPT').innerHTML =data.MP.total.tested
      document.getElementById('MPD').innerHTML =data.MP.total.deceased
      document.getElementById('MPV').innerHTML =data.MP.total.vaccinated
      document.getElementById('MPR').innerHTML =data.MP.total.recovered

      document.getElementById('MHC').innerHTML =data.MH.total.confirmed
      document.getElementById('MHT').innerHTML =data.MH.total.tested
      document.getElementById('MHD').innerHTML =data.MH.total.deceased
      document.getElementById('MHV').innerHTML =data.MH.total.vaccinated
      document.getElementById('MHR').innerHTML =data.MH.total.recovered

      document.getElementById('MLC').innerHTML =data.ML.total.confirmed
      document.getElementById('MLT').innerHTML =data.ML.total.tested
      document.getElementById('MLD').innerHTML =data.ML.total.deceased
      document.getElementById('MLV').innerHTML =data.ML.total.vaccinated
      document.getElementById('MLR').innerHTML =data.ML.total.recovered

      document.getElementById('MZC').innerHTML =data.MZ.total.confirmed
      document.getElementById('MZT').innerHTML =data.MZ.total.tested
      document.getElementById('MZD').innerHTML =data.MZ.total.deceased
      document.getElementById('MZV').innerHTML =data.MZ.total.vaccinated
      document.getElementById('MZR').innerHTML =data.MZ.total.recovered


      document.getElementById('MNC').innerHTML =data.MN.total.confirmed
      document.getElementById('MNT').innerHTML =data.MN.total.tested
      document.getElementById('MND').innerHTML =data.MN.total.deceased
      document.getElementById('MNV').innerHTML =data.MN.total.vaccinated
      document.getElementById('MNR').innerHTML =data.MN.total.recovered


      document.getElementById('NLC').innerHTML =data.NL.total.confirmed
      document.getElementById('NLT').innerHTML =data.NL.total.tested
      document.getElementById('NLD').innerHTML =data.NL.total.deceased
      document.getElementById('NLV').innerHTML =data.NL.total.vaccinated
      document.getElementById('NLR').innerHTML =data.NL.total.recovered

      document.getElementById('ORC').innerHTML =data.OR.total.confirmed
      document.getElementById('ORT').innerHTML =data.OR.total.tested
      document.getElementById('ORD').innerHTML =data.OR.total.deceased
      document.getElementById('ORV').innerHTML =data.OR.total.vaccinated
      document.getElementById('ORR').innerHTML =data.OR.total.recovered

      document.getElementById('PYC').innerHTML =data.PY.total.confirmed
      document.getElementById('PYT').innerHTML =data.PY.total.tested
      document.getElementById('PYD').innerHTML =data.PY.total.deceased
      document.getElementById('PYV').innerHTML =data.PY.total.vaccinated
      document.getElementById('PYR').innerHTML =data.PY.total.recovered

      document.getElementById('PBC').innerHTML =data.PB.total.confirmed
      document.getElementById('PBT').innerHTML =data.PB.total.tested
      document.getElementById('PBD').innerHTML =data.PB.total.deceased
      document.getElementById('PBV').innerHTML =data.PB.total.vaccinated
      document.getElementById('PBR').innerHTML =data.PB.total.recovered

      document.getElementById('RJC').innerHTML =data.RJ.total.confirmed
      document.getElementById('RJT').innerHTML =data.RJ.total.tested
      document.getElementById('RJD').innerHTML =data.RJ.total.deceased
      document.getElementById('RJV').innerHTML =data.RJ.total.vaccinated
      document.getElementById('RJR').innerHTML =data.RJ.total.recovered


      document.getElementById('SKC').innerHTML =data.SK.total.confirmed
      document.getElementById('SKT').innerHTML =data.SK.total.tested
      document.getElementById('SKD').innerHTML =data.SK.total.deceased
      document.getElementById('SKV').innerHTML =data.SK.total.vaccinated
      document.getElementById('SKR').innerHTML =data.SK.total.recovered


      document.getElementById('TNC').innerHTML =data.TN.total.confirmed
      document.getElementById('TNT').innerHTML =data.TN.total.tested
      document.getElementById('TND').innerHTML =data.TN.total.deceased
      document.getElementById('TNV').innerHTML =data.TN.total.vaccinated
      document.getElementById('TNR').innerHTML =data.TN.total.recovered

      document.getElementById('TGC').innerHTML =data.TG.total.confirmed
      document.getElementById('TGT').innerHTML =data.TG.total.tested
      document.getElementById('TGD').innerHTML =data.TG.total.deceased
      document.getElementById('TGV').innerHTML =data.TG.total.vaccinated
      document.getElementById('TGR').innerHTML =data.TG.total.recovered

      document.getElementById('TRC').innerHTML =data.TR.total.confirmed
      document.getElementById('TRT').innerHTML =data.TR.total.tested
      document.getElementById('TRD').innerHTML =data.TR.total.deceased
      document.getElementById('TRV').innerHTML =data.TR.total.vaccinated
      document.getElementById('TRR').innerHTML =data.TR.total.recovered

      document.getElementById('UPC').innerHTML =data.UP.total.confirmed
      document.getElementById('UPT').innerHTML =data.UP.total.tested
      document.getElementById('UPD').innerHTML =data.UP.total.deceased
      document.getElementById('UPV').innerHTML =data.UP.total.vaccinated
      document.getElementById('UPR').innerHTML =data.UP.total.recovered


      document.getElementById('UTC').innerHTML =data.UT.total.confirmed
      document.getElementById('UTT').innerHTML =data.UT.total.tested
      document.getElementById('UTD').innerHTML =data.UT.total.deceased
      document.getElementById('UTV').innerHTML =data.UT.total.vaccinated
      document.getElementById('UTR').innerHTML =data.UT.total.recovered

      document.getElementById('WBC').innerHTML =data.WB.total.confirmed
      document.getElementById('WBT').innerHTML =data.WB.total.tested
      document.getElementById('WBD').innerHTML =data.WB.total.deceased
      document.getElementById('WBV').innerHTML =data.WB.total.vaccinated
      document.getElementById('WBR').innerHTML =data.WB.total.recovered


    })
 















  return (
   <>

     
<input type="text" id="myInput" onKeyUp={myFunction} placeholder="Search for State.." />
          {/* <table  class ="table table-dark table-striped" id="myTable1">
              <tr class="header"> */}

              <div class="table-responsive">
              <table id="myTable1" class="table">
  <thead>
    <tr >
                <th scope="col">State</th>
                <th scope="col">confirmed</th>
                <th scope="col">recovered</th>
                <th scope="col">tested</th>
                <th scope="col">deceased</th>
                <th scope="col">vaccinated</th>
              </tr>
              </thead>
  <tbody>
              <tr >
              <th scope="row">Andaman and Nicobar Islands</th>
                {/* <td id="And">Andaman and Nicobar Islands</td> */}
                <td id="anc"></td>
                <td id="anr"></td>
                <td id="ant"></td>
                <td id="and"></td>
                <td id="anv"></td>
              </tr>
              <tr >
              <th scope="row">Andaman and Nicobar Islands</th>

              <td id="apc"></td>
                <td id="apr"></td>
                <td id="apt"></td>
                <td id="apd"></td>
                <td id="apv"></td>
              </tr>
              <tr >
              <th scope="row">Arunachal Pradesh</th>

              <td id="arc"></td>
                <td id="arr"></td>
                <td id="art"></td>
                <td id="ard"></td>
                <td id="arv"></td>
              </tr>
              <tr >
              <th scope="row">Assam</th>

              <td id="asc"></td>
                <td id="asr"></td>
                <td id="ast"></td>
                <td id="asd"></td>
                <td id="asv"></td>
              </tr>
              <tr >
              <th scope="row">Bihar</th>

              <td id="BRC"></td>
                <td id="BRR"></td>
                <td id="BRT"></td>
                <td id="BRD"></td>
                <td id="BRV"></td>
              </tr>
              <tr >
              <th scope="row">Chandigarh</th>

              <td id="CHC"></td>
                <td id="CHR"></td>
                <td id="CHT"></td>
                <td id="CHD"></td>
                <td id="CHV"></td>
              </tr>
              <tr >
              <th scope="row">Chhattisgarh</th>

              <td id="CTC"></td>
                <td id="CTR"></td>
                <td id="CTT"></td>
                <td id="CTD"></td>
                <td id="CTV"></td>
              </tr>
              <tr >
              <th scope="row">Dadra and Nagar Haveli</th>

              <td id="DNC"></td>
                <td id="DNR"></td>
                <td id="DNT"></td>
                <td id="DND"></td>
                <td id="DNV"></td>
              </tr>
              <tr >
              <th scope="row">Delhi</th>

              <td id="DLC"></td>
                <td id="DLR"></td>
                <td id="DLT"></td>
                <td id="DLD"></td>
                <td id="DLV"></td>
              </tr>
              <tr >
              <th scope="row">Goa</th>

              <td id="GAC"></td>
                <td id="GAR"></td>
                <td id="GAT"></td>
                <td id="GAD"></td>
                <td id="GAV"></td>
              </tr>
              <tr >
              <th scope="row">Gujarat</th>

              <td id="GJC"></td>
                <td id="GJR"></td>
                <td id="GJT"></td>
                <td id="GJD"></td>
                <td id="GJV"></td>
              </tr>
              <tr >
              <th scope="row">Haryana</th>

              <td id="HRC"></td>
                <td id="HRR"></td>
                <td id="HRT"></td>
                <td id="HRD"></td>
                <td id="HRV"></td>
              </tr>
              <tr >
              <td id="Him">Himachal Pradesh</td>
              <td id="HPC"></td>
                <td id="HPR"></td>
                <td id="HPT"></td>
                <td id="HPD"></td>
                <td id="HPV"></td>
              </tr>
              <tr >
              <td id="Jam">Jammu and Kashmir</td>
              <td id="JKC"></td>
                <td id="JKR"></td>
                <td id="JKT"></td>
                <td id="JKD"></td>
                <td id="JKV"></td>
              </tr>
              <tr >
              <td id="Jha">Jharkhand</td>
              <td id="JHC"></td>
                <td id="JHR"></td>
                <td id="JHT"></td>
                <td id="JHD"></td>
                <td id="JHV"></td>
              </tr>
              <tr >
              <td id="Kar">Karnataka</td>
              <td id="KAC"></td>
                <td id="KAR"></td>
                <td id="KAT"></td>
                <td id="KAD"></td>
                <td id="KAV"></td>
              </tr>
              <tr >
              <td id="Ker">Kerala</td>
              <td id="KLC"></td>
                <td id="KLR"></td>
                <td id="KLT"></td>
                <td id="KLD"></td>
                <td id="KLV"></td>
              </tr>
              <tr >
              <td id="Lak">Lakshadweep</td>
              <td id="LDC"></td>
                <td id="LDR"></td>
                <td id="LDT"></td>
                <td id="LDD"></td>
                <td id="LDV"></td>
              </tr>
              <tr >
              <td id="Mad">Madhya Pradesh</td>
              <td id="MPC"></td>
                <td id="MPR"></td>
                <td id="MPT"></td>
                <td id="MPD"></td>
                <td id="MPV"></td>
              </tr>
              <tr >
              <td id="Mah">Maharastra</td>
              <td id="MHC"></td>
                <td id="MHR"></td>
                <td id="MHT"></td>
                <td id="MHD"></td>
                <td id="MHV"></td>
              </tr>
              <tr >
              <td id="Man">Manipur</td>
              <td id="MNC"></td>
                <td id="MNR"></td>
                <td id="MNT"></td>
                <td id="MND"></td>
                <td id="MNV"></td>
              </tr>
              <tr >
              <td id="Meg">Meghalaya</td>
              <td id="MLC"></td>
                <td id="MLR"></td>
                <td id="MLT"></td>
                <td id="MLD"></td>
                <td id="MLV"></td>
              </tr>
              <tr >
              <td id="Miz">Mizoram</td>
              <td id="MZC"></td>
                <td id="MZR"></td>
                <td id="MZT"></td>
                <td id="MZD"></td>
                <td id="MZV"></td>
              </tr>
              <tr >
              <td id="Nag">Nagaland</td>
              <td id="NLC"></td>
                <td id="NLR"></td>
                <td id="NLT"></td>
                <td id="NLD"></td>
                <td id="NLV"></td>
              </tr>
              <tr >
              <td id="Odi">Odisha</td>
              <td id="ORC"></td>
                <td id="ORR"></td>
                <td id="ORT"></td>
                <td id="ORD"></td>
                <td id="ORV"></td>
              </tr>
              <tr >
              <td id="Pud">Puducherry</td>
              <td id="PYC"></td>
                <td id="PYR"></td>
                <td id="PYT"></td>
                <td id="PYD"></td>
                <td id="PYV"></td>
              </tr>
              <tr >
              <td id="Pun">Panjab</td>
              <td id="PBC"></td>
                <td id="PBR"></td>
                <td id="PBT"></td>
                <td id="PBD"></td>
                <td id="PBV"></td>
              </tr>
              <tr >
              <td id="Raj">Rajasthan</td>
              <td id="RJC"></td>
                <td id="RJR"></td>
                <td id="RJT"></td>
                <td id="RJD"></td>
                <td id="RJV"></td>
              </tr>
              <tr >
              <td id="Sik">Sikkim</td>
              <td id="SKC"></td>
                <td id="SKR"></td>
                <td id="SKT"></td>
                <td id="SKD"></td>
                <td id="SKV"></td>
              </tr>
              <tr >
              <td id="Tam">Tamil Nadu</td>
              <td id="TNC"></td>
                <td id="TNR"></td>
                <td id="TNT"></td>
                <td id="TND"></td>
                <td id="TNV"></td>
              </tr>
              <tr >
              <td id="Tel">Telangana</td>
              <td id="TGC"></td>
                <td id="TGR"></td>
                <td id="TGT"></td>
                <td id="TGD"></td>
                <td id="TGV"></td>
              </tr>
              <tr >
              <td id="Tri">Tripura</td>
              <td id="TRC"></td>
                <td id="TRR"></td>
                <td id="TRT"></td>
                <td id="TRD"></td>
                <td id="TRV"></td>
              </tr>
              <tr >
              <td id="Utt">Uttar Pradesh</td>
              <td id="UPC"></td>
                <td id="UPR"></td>
                <td id="UPT"></td>
                <td id="UPD"></td>
                <td id="UPV"></td>
              </tr>
              <tr >
              <td id="Utt">Uttarakhand	</td>
              <td id="UTC"></td>
                <td id="UTR"></td>
                <td id="UTT"></td>
                <td id="UTD"></td>
                <td id="UTV"></td>
              </tr>
              <tr >
              <td id="Wes">West Bengal</td>
              <td id="WBC"></td>
                <td id="WBR"></td>
                <td id="WBT"></td>
                <td id="WBD"></td>
                <td id="WBV"></td>
              </tr>
              
              </tbody>
</table>
</div>

   </>
  );
}

export default States;
