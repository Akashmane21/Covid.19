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
      console.log(data);
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
  
    
    })


  
     
 
  
 
  //    newasc(jsdata.AS.total.confirmed)
  //    newast(jsdata.AS.total.tested)
  //    newasd(jsdata.AS.total.deceased)
  //    newasv(jsdata.AS.total.vaccinated)
  //    newasr(jsdata.AS.total.recovered)
 
  //    newBRC(jsdata.BR.total.confirmed)
  //    newBRT(jsdata.BR.total.tested)
  //    newBRD(jsdata.BR.total.deceased)
  //    newBRV(jsdata.BR.total.vaccinated)
  //    newBRR(jsdata.BR.total.recovered)
 
  //    newCHC(jsdata.CH.total.confirmed)
  //    newCHT(jsdata.CH.total.tested)
  //    newCHD(jsdata.CH.total.deceased)
  //    newCHV(jsdata.CH.total.vaccinated)
  //    newCHR(jsdata.CH.total.recovered)
 
  //    newCTC(jsdata.CT.total.confirmed)
  //    newCTT(jsdata.CT.total.tested)
  //    newCTD(jsdata.CT.total.deceased)
  //    newCTV(jsdata.CT.total.vaccinated)
  //    newCTR(jsdata.CT.total.recovered)
 
  //    newDNC(jsdata.DN.total.confirmed)
  //    newDNT(jsdata.DN.total.tested)
  //    newDND(jsdata.DN.total.deceased)
  //    newDNV(jsdata.DN.total.vaccinated)
  //    newDNR(jsdata.DN.total.recovered)
 
  //    newDLC(jsdata.DL.total.confirmed)
  //    newDLT(jsdata.DL.total.tested)
  //    newDLD(jsdata.DL.total.deceased)
  //    newDLV(jsdata.DL.total.vaccinated)
  //    newDLR(jsdata.DL.total.recovered)
 
  //    newGAC(jsdata.GA.total.confirmed)
  //    newGAT(jsdata.GA.total.tested)
  //    newGAD(jsdata.GA.total.deceased)
  //    newGAV(jsdata.GA.total.vaccinated)
  //    newGAR(jsdata.GA.total.recovered)
 
  //    newGJC(jsdata.GJ.total.confirmed)
  //    newGJT(jsdata.GJ.total.tested)
  //    newGJD(jsdata.GJ.total.deceased)
  //    newGJV(jsdata.GJ.total.vaccinated)
  //    newGJR(jsdata.GJ.total.recovered)
 
  //    newHRC(jsdata.HR.total.confirmed)
  //    newHRT(jsdata.HR.total.tested)
  //    newHRD(jsdata.HR.total.deceased)
  //    newHRV(jsdata.HR.total.vaccinated)
  //    newHRR(jsdata.HR.total.recovered)
 
  //    newHPC(jsdata.HP.total.confirmed)
  //    newHPT(jsdata.HP.total.tested)
  //    newHPD(jsdata.HP.total.deceased)
  //    newHPV(jsdata.HP.total.vaccinated)
  //    newHPR(jsdata.HP.total.recovered)
 
  //    newJKC(jsdata.JK.total.confirmed)
  //    newJKT(jsdata.JK.total.tested)
  //    newJKD(jsdata.JK.total.deceased)
  //    newJKV(jsdata.JK.total.vaccinated)
  //    newJKR(jsdata.JK.total.recovered)
 
  //    newJHC(jsdata.JH.total.confirmed)
  //    newJHT(jsdata.JH.total.tested)
  //    newJHD(jsdata.JH.total.deceased)
  //    newJHV(jsdata.JH.total.vaccinated)
  //    newJHR(jsdata.JH.total.recovered)
 
  //    newKAC(jsdata.KA.total.confirmed)
  //    newKAT(jsdata.KA.total.tested)
  //    newKAD(jsdata.KA.total.deceased)
  //    newKAV(jsdata.KA.total.vaccinated)
  //    newKAR(jsdata.KA.total.recovered)
 
  //    newKLC(jsdata.KL.total.confirmed)
  //    newKLT(jsdata.KL.total.tested)
  //    newKLD(jsdata.KL.total.deceased)
  //    newKLV(jsdata.KL.total.vaccinated)
  //    newKLR(jsdata.KL.total.recovered)
 
  //    newLDC(jsdata.LD.total.confirmed)
  //    newLDT(jsdata.LD.total.tested)
  //    newLDD(jsdata.LD.total.deceased)
  //    newLDV(jsdata.LD.total.vaccinated)
  //    newLDR(jsdata.LD.total.recovered)
 
  //    newMPC(jsdata.MP.total.confirmed)
  //    newMPT(jsdata.MP.total.tested)
  //    newMPD(jsdata.MP.total.deceased)
  //    newMPV(jsdata.MP.total.vaccinated)
  //    newMPR(jsdata.MP.total.recovered)
 
  //    newMHC(jsdata.MH.total.confirmed)
  //    newMHT(jsdata.MH.total.tested)
  //    newMHD(jsdata.MH.total.deceased)
  //    newMHV(jsdata.MH.total.vaccinated)
  //    newMHR(jsdata.MH.total.recovered)
 
  //    newMLC(jsdata.ML.total.confirmed)
  //    newMLT(jsdata.ML.total.tested)
  //    newMLD(jsdata.ML.total.deceased)
  //    newMLV(jsdata.ML.total.vaccinated)
  //    newMLR(jsdata.ML.total.recovered)
 
  //    newMZC(jsdata.MZ.total.confirmed)
  //    newMZT(jsdata.MZ.total.tested)
  //    newMZD(jsdata.MZ.total.deceased)
  //    newMZV(jsdata.MZ.total.vaccinated)
  //    newMZR(jsdata.MZ.total.recovered)
 
  //    newMNC(jsdata.MN.total.confirmed)
  //    newMNT(jsdata.MN.total.tested)
  //    newMND(jsdata.MN.total.deceased)
  //    newMNV(jsdata.MN.total.vaccinated)
  //    newMNR(jsdata.MN.total.recovered)
 
  //    newNLC(jsdata.NL.total.confirmed)
  //    newNLT(jsdata.NL.total.tested)
  //    newNLD(jsdata.NL.total.deceased)
  //    newNLV(jsdata.NL.total.vaccinated)
  //    newNLR(jsdata.NL.total.recovered)
 
  //    newORC(jsdata.OR.total.confirmed)
  //    newORT(jsdata.OR.total.tested)
  //    newORD(jsdata.OR.total.deceased)
  //    newORV(jsdata.OR.total.vaccinated)
  //    newORR(jsdata.OR.total.recovered)
 
  //    newPYC(jsdata.PY.total.confirmed)
  //    newPYT(jsdata.PY.total.tested)
  //    newPYD(jsdata.PY.total.deceased)
  //    newPYV(jsdata.PY.total.vaccinated)
  //    newPYR(jsdata.PY.total.recovered)
 
  //    newPBC(jsdata.PB.total.confirmed)
  //    newPBT(jsdata.PB.total.tested)
  //    newPBD(jsdata.PB.total.deceased)
  //    newPBV(jsdata.PB.total.vaccinated)
  //    newPBR(jsdata.PB.total.recovered)
 
  //    newRJC(jsdata.RJ.total.confirmed)
  //    newRJT(jsdata.RJ.total.tested)
  //    newRJD(jsdata.RJ.total.deceased)
  //    newRJV(jsdata.RJ.total.vaccinated)
  //    newRJR(jsdata.RJ.total.recovered)
 
  //    newSKC(jsdata.SK.total.confirmed)
  //    newSKT(jsdata.SK.total.tested)
  //    newSKD(jsdata.SK.total.deceased)
  //    newSKV(jsdata.SK.total.vaccinated)
  //    newSKR(jsdata.SK.total.recovered)
 
  //    newTNC(jsdata.TN.total.confirmed)
  //    newTNT(jsdata.TN.total.tested)
  //    newTND(jsdata.TN.total.deceased)
  //    newTNV(jsdata.TN.total.vaccinated)
  //    newTNR(jsdata.TN.total.recovered)
 
  //    newTGC(jsdata.TG.total.confirmed)
  //    newTGT(jsdata.TG.total.tested)
  //    newTGD(jsdata.TG.total.deceased)
  //    newTGV(jsdata.TG.total.vaccinated)
  //    newTGR(jsdata.TG.total.recovered)
 
  //    newTRC(jsdata.TR.total.confirmed)
  //    newTRT(jsdata.TR.total.tested)
  //    newTRD(jsdata.TR.total.deceased)
  //    newTRV(jsdata.TR.total.vaccinated)
  //    newTRR(jsdata.TR.total.recovered)
 
  //    newUPC(jsdata.UP.total.confirmed)
  //    newUPT(jsdata.UP.total.tested)
  //    newUPD(jsdata.UP.total.deceased)
  //    newUPV(jsdata.UP.total.vaccinated)
  //    newUPR(jsdata.UP.total.recovered)
 
  //    newUTC(jsdata.UT.total.confirmed)
  //    newUTT(jsdata.UT.total.tested)
  //    newUTD(jsdata.UT.total.deceased)
  //    newUTV(jsdata.UT.total.vaccinated)
  //    newUTR(jsdata.UT.total.recovered)
 
  //    newWBC(jsdata.WB.total.confirmed)
  //    newWBT(jsdata.WB.total.tested)
  //    newWBD(jsdata.WB.total.deceased)
  //    newWBV(jsdata.WB.total.vaccinated)
  //    newWBR(jsdata.WB.total.recovered)
   
 














  return (
   <>

     
<input type="text" id="myInput" onKeyUp={myFunction} placeholder="Search for State.." />
          {/* <table  class ="table table-dark table-striped" id="myTable1">
              <tr class="header"> */}


              <table id="myTable1">
  <thead>
    <tr >
                <th >State</th>
                <th >confirmed</th>
                <th >recovered</th>
                <th >tested</th>
                <th >deceased</th>
                <th >vaccinated</th>
              </tr>
              </thead>
  <tbody>
              <tr >
                <td id="And">Andaman and Nicobar Islands</td>
                <td id="anc"></td>
                <td id="anr"></td>
                <td id="ant"></td>
                <td id="and"></td>
                <td id="anv"></td>
              </tr>
              <tr >
              <td id="And">Andhra Pradesh</td>
              <td id="apc"></td>
                <td id="apr"></td>
                <td id="apt"></td>
                <td id="apd"></td>
                <td id="apv"></td>
              </tr>
              <tr >
              <td id="Aru">Arunachal Pradesh</td>
              <td id="arc"></td>
                <td id="arr"></td>
                <td id="art"></td>
                <td id="ard"></td>
                <td id="arv"></td>
              </tr>
              <tr >
              <td id="Ass">Assam</td>
              <td id="asc"></td>
                <td id="asr"></td>
                <td id="ast"></td>
                <td id="asd"></td>
                <td id="asv"></td>
              </tr>
              <tr >
              <td id="Bih">Bihar</td>
              <td id="BRC"></td>
                <td id="BRR"></td>
                <td id="BRT"></td>
                <td id="BRD"></td>
                <td id="BRV"></td>
              </tr>
              <tr >
              <td id="Cha">Chandigarh</td>
              <td id="CHC"></td>
                <td id="CHR"></td>
                <td id="CHT"></td>
                <td id="CHD"></td>
                <td id="CHV"></td>
              </tr>
              <tr >
              <td id="Chh">Chhattisgarh</td>
              <td id="CTC"></td>
                <td id="CTR"></td>
                <td id="CTT"></td>
                <td id="CTD"></td>
                <td id="CTV"></td>
              </tr>
              <tr >
              <td id="Dad">Dadra and Nagar Haveli</td>
              <td id="DNC"></td>
                <td id="DNR"></td>
                <td id="DNT"></td>
                <td id="DND"></td>
                <td id="DNV"></td>
              </tr>
              <tr >
              <td id="Del">Delhi</td>
              <td id="DLC"></td>
                <td id="DLR"></td>
                <td id="DLT"></td>
                <td id="DLD"></td>
                <td id="DLV"></td>
              </tr>
              <tr >
              <td id="Goa">Goa</td>
              <td id="GAC"></td>
                <td id="GAR"></td>
                <td id="GAT"></td>
                <td id="GAD"></td>
                <td id="GAV"></td>
              </tr>
              <tr >
              <td id="Guj">Gujarat</td>
              <td id="GJC"></td>
                <td id="GJR"></td>
                <td id="GJT"></td>
                <td id="GJD"></td>
                <td id="GJV"></td>
              </tr>
              <tr >
              <td id="Har">Haryana</td>
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


   </>
  );
}

export default States;
