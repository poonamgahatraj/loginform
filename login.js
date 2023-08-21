let btn=document.getElementById("1")
btn.addEventListener("click" ,showForm)

function showForm(){
    let cont=document.getElementById("4")
    cont.style.background="grey";
    let form=document.getElementById("2")
    form.style.display="block";
}

let x=document.getElementById("2")
x.addEventListener("click", closeForm)

function closeForm(){
    let form=document.getElementById("2")
    form.style.display="none";
}