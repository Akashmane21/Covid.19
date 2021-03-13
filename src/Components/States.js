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










  // const [anc,newanc] = useState("-/-");
  // const [ant,newant] = useState("-/-");
  // const [and,newand] = useState("-/-");
  // const [anr,newanr] = useState("-/-");
  // const [anv,newanv] = useState("-/-");
 
 
 
 
 
  // const [apc,newapc] = useState("-/-");
  // const [apt,newapt] = useState("-/-");
  // const [apd,newapd] = useState("-/-");
  // const [apr,newapr] = useState("-/-");
  // const [apv,newapv] = useState("-/-");
 
 
  // const [arc,newarc] = useState("-/-");
  // const [art,newart] = useState("-/-");
  // const [ard,neward] = useState("-/-");
  // const [arr,newarr] = useState("-/-");
  // const [arv,newarv] = useState("-/-");
 
 
  // const [asc,newasc] = useState("-/-");
  // const [ast,newast] = useState("-/-");
  // const [asd,newasd] = useState("-/-");
  // const [asr,newasr] = useState("-/-");
  // const [asv,newasv] = useState("-/-");
 
  // const [BRC,newBRC] = useState("-/-");
  // const [BRT,newBRT] = useState("-/-");
  // const [BRD,newBRD] = useState("-/-");
  // const [BRR,newBRR] = useState("-/-");
  // const [BRV,newBRV] = useState("-/-");
 
  // const [CHC,newCHC] = useState("-/-");
  // const [CHT,newCHT] = useState("-/-");
  // const [CHD,newCHD] = useState("-/-");
  // const [CHR,newCHR] = useState("-/-");
  // const [CHV,newCHV] = useState("-/-");
 
  // const [CTC,newCTC] = useState("-/-");
  // const [CTT,newCTT] = useState("-/-");
  // const [CTD,newCTD] = useState("-/-");
  // const [CTR,newCTR] = useState("-/-");
  // const [CTV,newCTV] = useState("-/-");
 
  // const [DNC,newDNC] = useState("-/-");
  // const [DNT,newDNT] = useState("-/-");
  // const [DND,newDND] = useState("-/-");
  // const [DNR,newDNR] = useState("-/-");
  // const [DNV,newDNV] = useState("-/-");
 
  // const [DLC,newDLC] = useState("-/-");
  // const [DLT,newDLT] = useState("-/-");
  // const [DLD,newDLD] = useState("-/-");
  // const [DLR,newDLR] = useState("-/-");
  // const [DLV,newDLV] = useState("-/-");
 
  // const [GAC,newGAC] = useState("-/-");
  // const [GAT,newGAT] = useState("-/-");
  // const [GAD,newGAD] = useState("-/-");
  // const [GAR,newGAR] = useState("-/-");
  // const [GAV,newGAV] = useState("-/-");
 
  // const [GJC,newGJC] = useState("-/-");
  // const [GJT,newGJT] = useState("-/-");
  // const [GJD,newGJD] = useState("-/-");
  // const [GJR,newGJR] = useState("-/-");
  // const [GJV,newGJV] = useState("-/-");
 
  // const [HRC,newHRC] = useState("-/-");
  // const [HRT,newHRT] = useState("-/-");
  // const [HRD,newHRD] = useState("-/-");
  // const [HRR,newHRR] = useState("-/-");
  // const [HRV,newHRV] = useState("-/-");
 
  // const [HPC,newHPC] = useState("-/-");
  // const [HPT,newHPT] = useState("-/-");
  // const [HPD,newHPD] = useState("-/-");
  // const [HPR,newHPR] = useState("-/-");
  // const [HPV,newHPV] = useState("-/-");
 
  // const [JKC,newJKC] = useState("-/-");
  // const [JKT,newJKT] = useState("-/-");
  // const [JKD,newJKD] = useState("-/-");
  // const [JKR,newJKR] = useState("-/-");
  // const [JKV,newJKV] = useState("-/-");
 
  // const [JHC,newJHC] = useState("-/-");
  // const [JHT,newJHT] = useState("-/-");
  // const [JHD,newJHD] = useState("-/-");
  // const [JHR,newJHR] = useState("-/-");
  // const [JHV,newJHV] = useState("-/-");
 
  // const [KAC,newKAC] = useState("-/-");
  // const [KAT,newKAT] = useState("-/-");
  // const [KAD,newKAD] = useState("-/-");
  // const [KAR,newKAR] = useState("-/-");
  // const [KAV,newKAV] = useState("-/-");
 
  // const [KLC,newKLC] = useState("-/-");
  // const [KLT,newKLT] = useState("-/-");
  // const [KLD,newKLD] = useState("-/-");
  // const [KLR,newKLR] = useState("-/-");
  // const [KLV,newKLV] = useState("-/-");
 
  // const [LDC,newLDC] = useState("-/-");
  // const [LDT,newLDT] = useState("-/-");
  // const [LDD,newLDD] = useState("-/-");
  // const [LDR,newLDR] = useState("-/-");
  // const [LDV,newLDV] = useState("-/-");
 
  // const [MPC,newMPC] = useState("-/-");
  // const [MPT,newMPT] = useState("-/-");
  // const [MPD,newMPD] = useState("-/-");
  // const [MPR,newMPR] = useState("-/-");
  // const [MPV,newMPV] = useState("-/-");
 
  // const [MHC,newMHC] = useState("-/-");
  // const [MHT,newMHT] = useState("-/-");
  // const [MHD,newMHD] = useState("-/-");
  // const [MHR,newMHR] = useState("-/-");
  // const [MHV,newMHV] = useState("-/-");
 
  // const [MNC,newMNC] = useState("-/-");
  // const [MNT,newMNT] = useState("-/-");
  // const [MND,newMND] = useState("-/-");
  // const [MNR,newMNR] = useState("-/-");
  // const [MNV,newMNV] = useState("-/-");
 
  // const [MLC,newMLC] = useState("-/-");
  // const [MLT,newMLT] = useState("-/-");
  // const [MLD,newMLD] = useState("-/-");
  // const [MLR,newMLR] = useState("-/-");
  // const [MLV,newMLV] = useState("-/-");
 
  // const [MZC,newMZC] = useState("-/-");
  // const [MZT,newMZT] = useState("-/-");
  // const [MZD,newMZD] = useState("-/-");
  // const [MZR,newMZR] = useState("-/-");
  // const [MZV,newMZV] = useState("-/-");
 
  // const [NLC,newNLC] = useState("-/-");
  // const [NLT,newNLT] = useState("-/-");
  // const [NLD,newNLD] = useState("-/-");
  // const [NLR,newNLR] = useState("-/-");
  // const [NLV,newNLV] = useState("-/-");
 
  // const [ORC,newORC] = useState("-/-");
  // const [ORT,newORT] = useState("-/-");
  // const [ORD,newORD] = useState("-/-");
  // const [ORR,newORR] = useState("-/-");
  // const [ORV,newORV] = useState("-/-");
 
  // const [PYC,newPYC] = useState("-/-");
  // const [PYT,newPYT] = useState("-/-");
  // const [PYD,newPYD] = useState("-/-");
  // const [PYR,newPYR] = useState("-/-");
  // const [PYV,newPYV] = useState("-/-");
 
  // const [PBC,newPBC] = useState("-/-");
  // const [PBT,newPBT] = useState("-/-");
  // const [PBD,newPBD] = useState("-/-");
  // const [PBR,newPBR] = useState("-/-");
  // const [PBV,newPBV] = useState("-/-");
 
  // const [RJC,newRJC] = useState("-/-");
  // const [RJT,newRJT] = useState("-/-");
  // const [RJD,newRJD] = useState("-/-");
  // const [RJR,newRJR] = useState("-/-");
  // const [RJV,newRJV] = useState("-/-");
 
  // const [SKC,newSKC] = useState("-/-");
  // const [SKT,newSKT] = useState("-/-");
  // const [SKD,newSKD] = useState("-/-");
  // const [SKR,newSKR] = useState("-/-");
  // const [SKV,newSKV] = useState("-/-");
 
  // const [TNC,newTNC] = useState("-/-");
  // const [TNT,newTNT] = useState("-/-");
  // const [TND,newTND] = useState("-/-");
  // const [TNR,newTNR] = useState("-/-");
  // const [TNV,newTNV] = useState("-/-");
 
  // const [TGC,newTGC] = useState("-/-");
  // const [TGT,newTGT] = useState("-/-");
  // const [TGD,newTGD] = useState("-/-");
  // const [TGR,newTGR] = useState("-/-");
  // const [TGV,newTGV] = useState("-/-");
 
  // const [TRC,newTRC] = useState("-/-");
  // const [TRT,newTRT] = useState("-/-");
  // const [TRD,newTRD] = useState("-/-");
  // const [TRR,newTRR] = useState("-/-");
  // const [TRV,newTRV] = useState("-/-");
 
  // const [UPC,newUPC] = useState("-/-");
  // const [UPT,newUPT] = useState("-/-");
  // const [UPD,newUPD] = useState("-/-");
  // const [UPR,newUPR] = useState("-/-");
  // const [UPV,newUPV] = useState("-/-");
 
  // const [UTC,newUTC] = useState("-/-");
  // const [UTT,newUTT] = useState("-/-");
  // const [UTD,newUTD] = useState("-/-");
  // const [UTR,newUTR] = useState("-/-");
  // const [UTV,newUTV] = useState("-/-");
 
  // const [WBC,newWBC] = useState("-/-");
  // const [WBT,newWBT] = useState("-/-");
  // const [WBD,newWBD] = useState("-/-");
  // const [WBR,newWBR] = useState("-/-");
  // const [WBV,newWBV] = useState("-/-");
 
 
 
  // async function getstate(){
  //    const jsondata = await fetch("https://api.covid19india.org/v4/min/data.min.json");
  //    const jsdata = await jsondata.json()
  //    newanc(jsdata.AN.total.confirmed)
  //    newant(jsdata.AN.total.tested)
  //    newand(jsdata.AN.total.deceased)
  //    newanv(jsdata.AN.total.vaccinated)
  //    newanr(jsdata.AN.total.recovered)
 
 
 
  //    newapc(jsdata.AP.total.confirmed)
  //    newapt(jsdata.AP.total.tested)
  //    newapd(jsdata.AP.total.deceased)
  //    newapv(jsdata.AP.total.vaccinated)
  //    newapr(jsdata.AP.total.recovered)
 
  //    newarc(jsdata.AR.total.confirmed)
  //    newart(jsdata.AR.total.tested)
  //    neward(jsdata.AR.total.deceased)
  //    newarv(jsdata.AR.total.vaccinated)
  //    newarr(jsdata.AR.total.recovered)
 
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
                <td>Andaman and Nicobar Islands</td>
                <td>anc</td>
                <td>anr</td>
                <td>ant</td>
                <td>and</td>
                <td>anv</td>
              </tr>
              <tr >
              <td>Andhra Pradesh</td>
              <td>apc</td>
                <td>apr</td>
                <td>apt</td>
                <td>apd</td>
                <td>apv</td>
              </tr>
              <tr >
              <td>Arunachal Pradesh</td>
              <td>arc</td>
                <td>arr</td>
                <td>art</td>
                <td>ard</td>
                <td>arv</td>
              </tr>
              <tr >
              <td>Assam</td>
              <td>asc</td>
                <td>asr</td>
                <td>ast</td>
                <td>asd</td>
                <td>asv</td>
              </tr>
              <tr >
              <td>Bihar</td>
              <td>BRC</td>
                <td>BRR</td>
                <td>BRT</td>
                <td>BRD</td>
                <td>BRV</td>
              </tr>
              <tr >
              <td>Chandigarh</td>
              <td>CHC</td>
                <td>CHR</td>
                <td>CHT</td>
                <td>CHD</td>
                <td>CHV</td>
              </tr>
              <tr >
              <td>Chhattisgarh</td>
              <td>CTC</td>
                <td>CTR</td>
                <td>CTT</td>
                <td>CTD</td>
                <td>CTV</td>
              </tr>
              <tr >
              <td>Dadra and Nagar Haveli</td>
              <td>DNC</td>
                <td>DNR</td>
                <td>DNT</td>
                <td>DND</td>
                <td>DNV</td>
              </tr>
              <tr >
              <td>Delhi</td>
              <td>DLC</td>
                <td>DLR</td>
                <td>DLT</td>
                <td>DLD</td>
                <td>DLV</td>
              </tr>
              <tr >
              <td>Goa</td>
              <td>GAC</td>
                <td>GAR</td>
                <td>GAT</td>
                <td>GAD</td>
                <td>GAV</td>
              </tr>
              <tr >
              <td>Gujarat</td>
              <td>GJC</td>
                <td>GJR</td>
                <td>GJT</td>
                <td>GJD</td>
                <td>GJV</td>
              </tr>
              <tr >
              <td>Haryana</td>
              <td>HRC</td>
                <td>HRR</td>
                <td>HRT</td>
                <td>HRD</td>
                <td>HRV</td>
              </tr>
              <tr >
              <td>Himachal Pradesh</td>
              <td>HPC</td>
                <td>HPR</td>
                <td>HPT</td>
                <td>HPD</td>
                <td>HPV</td>
              </tr>
              <tr >
              <td>Jammu and Kashmir</td>
              <td>JKC</td>
                <td>JKR</td>
                <td>JKT</td>
                <td>JKD</td>
                <td>JKV</td>
              </tr>
              <tr >
              <td>Jharkhand</td>
              <td>JHC</td>
                <td>JHR</td>
                <td>JHT</td>
                <td>JHD</td>
                <td>JHV</td>
              </tr>
              <tr >
              <td>Karnataka</td>
              <td>KAC</td>
                <td>KAR</td>
                <td>KAT</td>
                <td>KAD</td>
                <td>KAV</td>
              </tr>
              <tr >
              <td>Kerala</td>
              <td>KLC</td>
                <td>KLR</td>
                <td>KLT</td>
                <td>KLD</td>
                <td>KLV</td>
              </tr>
              <tr >
              <td>Lakshadweep</td>
              <td>LDC</td>
                <td>LDR</td>
                <td>LDT</td>
                <td>LDD</td>
                <td>LDV</td>
              </tr>
              <tr >
              <td>Madhya Pradesh</td>
              <td>MPC</td>
                <td>MPR</td>
                <td>MPT</td>
                <td>MPD</td>
                <td>MPV</td>
              </tr>
              <tr >
              <td>Maharastra</td>
              <td>MHC</td>
                <td>MHR</td>
                <td>MHT</td>
                <td>MHD</td>
                <td>MHV</td>
              </tr>
              <tr >
              <td>Manipur</td>
              <td>MNC</td>
                <td>MNR</td>
                <td>MNT</td>
                <td>MND</td>
                <td>MNV</td>
              </tr>
              <tr >
              <td>Meghalaya</td>
              <td>MLC</td>
                <td>MLR</td>
                <td>MLT</td>
                <td>MLD</td>
                <td>MLV</td>
              </tr>
              <tr >
              <td>Mizoram</td>
              <td>MZC</td>
                <td>MZR</td>
                <td>MZT</td>
                <td>MZD</td>
                <td>MZV</td>
              </tr>
              <tr >
              <td>Nagaland</td>
              <td>NLC</td>
                <td>NLR</td>
                <td>NLT</td>
                <td>NLD</td>
                <td>NLV</td>
              </tr>
              <tr >
              <td>Odisha</td>
              <td>ORC</td>
                <td>ORR</td>
                <td>ORT</td>
                <td>ORD</td>
                <td>ORV</td>
              </tr>
              <tr >
              <td>Puducherry</td>
              <td>PYC</td>
                <td>PYR</td>
                <td>PYT</td>
                <td>PYD</td>
                <td>PYV</td>
              </tr>
              <tr >
              <td>Punjab</td>
              <td>PBC</td>
                <td>PBR</td>
                <td>PBT</td>
                <td>PBD</td>
                <td>PBV</td>
              </tr>
              <tr >
              <td>Rajasthan</td>
              <td>RJC</td>
                <td>RJR</td>
                <td>RJT</td>
                <td>RJD</td>
                <td>RJV</td>
              </tr>
              <tr >
              <td>Sikkim</td>
              <td>SKC</td>
                <td>SKR</td>
                <td>SKT</td>
                <td>SKD</td>
                <td>SKV</td>
              </tr>
              <tr >
              <td>Tamil Nadu</td>
              <td>TNC</td>
                <td>TNR</td>
                <td>TNT</td>
                <td>TND</td>
                <td>TNV</td>
              </tr>
              <tr >
              <td>Telangana</td>
              <td>TGC</td>
                <td>TGR</td>
                <td>TGT</td>
                <td>TGD</td>
                <td>TGV</td>
              </tr>
              <tr >
              <td>Tripura</td>
              <td>TRC</td>
                <td>TRR</td>
                <td>TRT</td>
                <td>TRD</td>
                <td>TRV</td>
              </tr>
              <tr >
              <td>Uttar Pradesh</td>
              <td>UPC</td>
                <td>UPR</td>
                <td>UPT</td>
                <td>UPD</td>
                <td>UPV</td>
              </tr>
              <tr >
              <td>Uttarakhand	</td>
              <td>UTC</td>
                <td>UTR</td>
                <td>UTT</td>
                <td>UTD</td>
                <td>UTV</td>
              </tr>
              <tr >
              <td>West Bengal</td>
              <td>WBC</td>
                <td>WBR</td>
                <td>WBT</td>
                <td>WBD</td>
                <td>WBV</td>
              </tr>
              
              </tbody>
</table>


   </>
  );
}

export default States;
