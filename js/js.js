

var count = 1;
var countEl = document.getElementById("count");

function plus() {
    count++;
    countEl.value = count;
    document.getElementById("total_price").innerHTML = count*100;
}

function minus() {
    if (count > 1) {
        count--;
        countEl.value = count;
    }
    document.getElementById("total_price").innerHTML = count*100;
}

var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var name = document.getElementById('name');
var name = document.getElementById('name');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function log(){
    var email = document.getElementById("name");
    var erroremail = document.getElementById("userr");
    var password = document.getElementById("pass");
    var errorpass = document.getElementById("password");
    var check = false;
    var check2 = false;
    if (email.value.length < 6) {
        email.style.border = "1px solid red";
        erroremail.style.display = "block";
        check2 = false;
    } else {
        email.style.border = "1px solid black";
        erroremail.style.display = "none";
        check2 = true;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        errorpass.style.display = "block";
        check = false;
    } else {
        errorpass.style.display = "none";
        password.style.border = "1px solid black";
        check = true;
    }
    if(check == true && check2 == true){
        if(email.value== localStorage.getItem("name")&&password.value==localStorage.getItem("pass")){
            alert("Dang nhap thanh cong");
            location.href="index.html";
        }
    }else{
        alert("sai thong tin");
    }
   
}
function deletePro(id){
    document.getElementById("pro"+id).style.display = "none"
}
function sign(){
    var name = document.getElementById("create_name").value;
    var pass = document.getElementById("create_pass").value;
    var cf = document.getElementById("cfpass").value;
    if(name.length <6 || pass.length<6 || pass!=cf){
        alert("sai thong tin");
    }else{
        localStorage.setItem("name",name);
        localStorage.setItem("pass",pass);
        alert("dang ki thanh cong");
        location.reload();
    }
}