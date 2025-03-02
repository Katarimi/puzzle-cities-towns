showChecked();
function showChecked(){
  document.getElementById("result").textContent = document.querySelectorAll("input:checked").length;
}
document.querySelectorAll("input").forEach(i=>{
 i.onclick = function(){
  showChecked();
  showPicture(i);
 
 }
});

function showPicture(i){

   var checkbox=document.getElementById(i.id);
   var imageNr="img"+ i.id.slice(-1);
   var picture = document.getElementById(imageNr);
if (checkbox.checked==true){
   picture.style.display = "block";
 
} else {
    picture.style.display = "none"; 
}
};

