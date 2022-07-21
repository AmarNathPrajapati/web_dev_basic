let doNothing = document.getElementById('doNothing');
doNothing.addEventListener('click',no);
function no(e){
    e.preventDefault();
    alert("do Nothing");
}