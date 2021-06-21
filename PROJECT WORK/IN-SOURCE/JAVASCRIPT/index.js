function myFunction(){
  var x = document.getElementById("myTopnav");
  if (x.className === "nav1"){
    x.className += " responsive";
  } 
  else {
    x.className = "nav1";
  }
}

const sign_in_button=document.getElementById("signin");
const sign_up_button=document.getElementById("signup");
const frm_cntnr=document.getElementById("frm_cntnr");

sign_in_button.addEventListener("click",() =>{
  frm_cntnr.classList.add("right-panel-active")
})

sign_up_button.addEventListener("click",() =>{
  frm_cntnr.classList.remove("right-panel-active")
})