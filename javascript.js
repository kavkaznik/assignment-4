var x = document.getElementById("sound"); 

function playAudio() { 
  document.getElementById("sound").play();
  alert("Added to cart");
} 
function toLogin() {
  document.getElementById('myBtn').style.display='none';
  document.getElementById('bottomText').style.display='none';
}
function login() {
  if (document.getElementById('loginInput').value != "Login" || document.getElementById('loginPassword').value != "Password"  ){alert("Wrong Login or Password!");}
  if (document.getElementById('loginInput').value == "Login" || document.getElementById('loginPassword').value == "Password" ){
  window.open("file:///C:/Users/A2Life/Desktop/%D0%A2%D0%B2%D0%BE%D0%B9%20%D0%9F%D0%B0%D0%BF%D0%BA%D0%B0/2%20%D1%82%D1%80%D0%B8%D0%BC%D0%B5%D1%81%D1%82%D1%80/%D0%B2%D0%B5%D0%B1%D0%BA%D0%B0/project_website/store.html");
}}
function register() {
  if (document.getElementById('regLogin').value == "" || document.getElementById('regPassword').value == "" || document.getElementById('regPassword2').value == ""){alert("Please fill all blanks");}
if (document.getElementById('regLogin').value != "" && document.getElementById('regPassword').value != "" && document.getElementById('regPassword2').value != ""){
  if (document.getElementById('regPassword').value == document.getElementById('regPassword2').value ){window.open("file:///C:/Users/A2Life/Desktop/%D0%A2%D0%B2%D0%BE%D0%B9%20%D0%9F%D0%B0%D0%BF%D0%BA%D0%B0/2%20%D1%82%D1%80%D0%B8%D0%BC%D0%B5%D1%81%D1%82%D1%80/%D0%B2%D0%B5%D0%B1%D0%BA%D0%B0/project_website/store.html");}
  if (document.getElementById('regPassword').value != document.getElementById('regPassword2').value ){alert("You have different passwords");}
}
}
function checking(){ document.getElementById("sound").play();
  if(document.getElementById('asus').checked==true){document.getElementById('vdc2').style.display='none';
document.getElementById('vdc3').style.display='none';
document.getElementById('vdc4').style.display='none';
document.getElementById('vdc5').style.display='none';
document.getElementById('vdc6').style.display='none';
 document.getElementById('vdc1').style.display='inherit'; }
 if(document.getElementById('msi').checked==true){document.getElementById('vdc1').style.display='none';
document.getElementById('vdc3').style.display='none';
document.getElementById('vdc4').style.display='none';
document.getElementById('vdc5').style.display='none';
document.getElementById('vdc6').style.display='none';
 document.getElementById('vdc2').style.display='inherit'; }
 if(document.getElementById('rtx').checked==true){document.getElementById('vdc2').style.display='none';
document.getElementById('vdc1').style.display='none';
document.getElementById('vdc4').style.display='none';
document.getElementById('vdc3').style.display='none';
document.getElementById('vdc6').style.display='none';
 document.getElementById('vdc5').style.display='inherit'; }
 if(document.getElementById('ktx').checked==true){document.getElementById('vdc2').style.display='none';
document.getElementById('vdc3').style.display='none';
document.getElementById('vdc4').style.display='none';
document.getElementById('vdc5').style.display='none';
document.getElementById('vdc6').style.display='none';
 document.getElementById('vdc1').style.display='inherit'; }
if(document.getElementById('gtx').checked==true){document.getElementById('vdc1').style.display='none'; 
document.getElementById('vdc3').style.display='none'; 
document.getElementById('vdc2').style.display='none';
document.getElementById('vdc5').style.display='none'; document.getElementById('vdc4').style.display='inherit'; document.getElementById('vdc6').style.display='inherit'; }
 if(document.getElementById('6gb').checked==true){document.getElementById('vdc2').style.display='none';
document.getElementById('vdc3').style.display='none';
document.getElementById('vdc4').style.display='none';
document.getElementById('vdc5').style.display='none';
document.getElementById('vdc1').style.display='none'; document.getElementById('vdc6').style.display='inherit'; }
if(document.getElementById('asus').checked==false && document.getElementById('msi').checked==false && document.getElementById('rtx').checked==false && document.getElementById('gtx').checked==false && document.getElementById('ktx').checked==false && document.getElementById('6gb').checked==false ){
  document.getElementById('vdc2').style.display='inherit';
document.getElementById('vdc3').style.display='inherit';
document.getElementById('vdc4').style.display='inherit';
document.getElementById('vdc5').style.display='inherit';
document.getElementById('vdc1').style.display='inherit'; document.getElementById('vdc6').style.display='inherit';
}
}