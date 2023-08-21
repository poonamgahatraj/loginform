let btn=document.getElementById("1")
btn.addEventListener("click" ,showForm)

function showForm(){
    let contt=document.getElementById("4")
    contt.style.background="grey";
    let cont=document.getElementById("2")
    cont.style.display="block";  
}

let x=document.getElementById("3")
x.addEventListener("click", closeForm)

function closeForm(){
    let form=document.getElementById("2")
    form.style.display="none";

    let contt=document.getElementById("4")
    contt.style.background="white";
}