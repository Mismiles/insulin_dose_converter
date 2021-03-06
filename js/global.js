//Insluin global variables// 

var apidra = document.getElementById("apidra");
var humalog = document.getElementById("humalog");
var humulinS = document.getElementById("humulinS");
var humulinI = document.getElementById('humulinI');
var humalogm25 = document.getElementById("humalogm25");
var humalogm50 = document.getElementById("humalogm50");
var humulinm3 = document.getElementById("humulinm3");
var levemir = document.getElementById("levemir");
var novom30 = document.getElementById("novom30");
var tresiba = document.getElementById("tresiba");
var toujeo = document.getElementById("toujeo");

var midLong = document.getElementById('midLong');
var odORbd = document.getElementById('odORbd');
var odTOtd = document.getElementById('odTOtd');

//Function shows particular form fields when insulin is selected// 
 
 
 function selectInsulin() {
    var rapid = document.getElementById('rapid');
    var humm3 = document.getElementById('humm3');
    
    if (apidra.selected || humalog.selected || humulinS.selected) {
        rapid.style.display = 'block';
        midLong.style.display = 'none';
        odORbd.style.display = 'none'; 
        humm3.style.display = 'none';
        odTOtd.style.display = 'none';
        
    } else if (tresiba.selected || toujeo.selected) {
        midLong.style.display = 'block';
        rapid.style.display = 'none';
        humm3.style.display = 'none';
        odORbd.style.display = 'none'; 
        odTOtd.style.display = 'none';
    } else if (humalogm25.selected || levemir.selected || humulinI.selected) {
        odORbd.style.display = 'block';
        midLong.style.display = 'none';
        rapid.style.display = 'none';
        humm3.style.display = 'none';
        odTOtd.style.display = 'none';
    } else if (humalogm50.selected || novom30.selected) {
        odORbd.style.display = 'none';
        midLong.style.display = 'none';
        rapid.style.display = 'none';
        humm3.style.display = 'none';
        odTOtd.style.display = 'block';
    } else if (humulinm3.selected) {
        odORbd.style.display = 'none';
        midLong.style.display = 'none';
        rapid.style.display = 'none';
        humm3.style.display = 'block';
        odTOtd.style.display = 'none';

    } else {
        rapid.style.display = 'none';
        midLong.style.display = 'none';
        humm3.style.display = 'none';
        odORbd.style.display = 'none';
        odTOtd.style.display = 'none';       
    }
}

// function tOptions() {

//     if 
// }


//This function is used to scroll the form down when an inulin is selected//
function scrollWin() {
 window.scrollBy(0, 300);
}

//Funciton resets entry fields on insulin change//
function resetFields() {
    
    // field.value= field.defaultValue;


  document.getElementById("insulin").reset();
}

function sInsulin() { 
    selectInsulin();
    scrollWin();
}

//Function to convert insulin doses//
var inDosebf;
var inDoselnc;
var inDosednr;
var bf = document.getElementById("bf").value;
var lnc = document.getElementById("lnc").value;
var dnr = document.getElementById("dnr").value;

function convertInsulin() {
    if (apidra.selected || humalog.selected || humulinS.selected){ 
        inDosebf = bf;
        inDoselnc = lnc;
        inDosednr = dnr;
        document.getElementById("insulinD").innerHTML = "Use novorapid as a replacement insulin. Breakfast dose = " + inDosebf + " units, lunchtime dose = " + inDoselnc + " units, dinner dose = " + inDosednr
    } else if (tresiba.selected || toujeo.selected) {
        midLong.style.display = 'block';
        rapid.style.display = 'none';
        humm3.style.display = 'none';
        odORbd.style.display = 'none'; 
        odTOtd.style.display = 'none';
    } else if (humalogm25.selected || levemir.selected || humulinI.selected) {
        odORbd.style.display = 'block';
        midLong.style.display = 'none';
        rapid.style.display = 'none';
        humm3.style.display = 'none';
        odTOtd.style.display = 'none';
    } else if (humalogm50.selected || novom30.selected) {
        odORbd.style.display = 'none';
        midLong.style.display = 'none';
        rapid.style.display = 'none';
        humm3.style.display = 'none';
        odTOtd.style.display = 'block';
    } else if (humulinm3.selected) {
        odORbd.style.display = 'none';
        midLong.style.display = 'none';
        rapid.style.display = 'none';
        humm3.style.display = 'block';
        odTOtd.style.display = 'none';

    } else {
        rapid.style.display = 'none';
    }
}