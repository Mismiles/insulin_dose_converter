 
 function sInsulin() {
    var rapid = document.getElementById('rapid');
    var midLong = document.getElementById('midLong');
    var BD = document.getElementById('BD');
    

    var apidra = document.getElementById("apidra");
    var humalog = document.getElementById("humalog");
    var humulinS = document.getElementById("humulinS");

    // var humulinI = document.getElementById('humulinI');
    // var humalogm25 = document.getElementById("humalogm25");
    // var humalogm50 = document.getElementById("humalogm50");
    // var humulinm3 = document.getElementById("humulinm3");
    // var levemir = document.getElementById("LEVEMIR");
    // var novom30 = document.getElementById("novom30");
    var tresiba = document.getElementById("tresiba");
    var toujeo = document.getElementById("toujeo");
    
    if (apidra.selected || humalog.selected || humulinS.selected) {
        rapid.style.display = 'block';
        midLong.style.display = 'none';
    } else if (tresiba.selected || toujeo.selected) {
        midLong.style.display = 'block';
        rapid.style.display = 'none';
        BD.style.display = 'none';

        
    } else {
        rapid.style.display = 'none';
        midLong.style.display = 'none';
    }
}