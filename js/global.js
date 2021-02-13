 
 function sInsulin() {
    var rapid = document.getElementById('rapid');
    var apidra = document.getElementById("apidra");
    
    if (apidra.selected) {
        rapid.style.display = 'block';
    } else {
        rapid.style.display = 'none';
    }
}