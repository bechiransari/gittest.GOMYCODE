let plus=document.querySelectorAll(".plus")
console.log(plus);
let less=document.querySelectorAll(".less")
let btnlike=document.querySelectorAll(".like")
let like=document.querySelectorAll(".fa-heart")
let btnremove=document.querySelectorAll(".btnremove")

for(let i=0; i<plus.length;i++){
    plus[i].addEventListener("click", function(){
        plus[i].nextElementSibling.innerHTML++
        Total()
    })
    less[i].addEventListener("click", function(){
        if(less[i].previousElementSibling.innerHTML>1){
        less[i].previousElementSibling.innerHTML--
        Total()}
    })
btnlike[i].addEventListener("click", function(){
    
    if(like[i].style.color=="red")
{    like[i].style.color="black"

    }
    else{
        like[i].style.color="red"
    }
})
btnremove[i].addEventListener("click", function(){
    btnremove[i].parentElement.parentElement.remove();
    Total()
})
}
function Total(){
    let prx=document.querySelectorAll(".prx");
    let qte=document.querySelectorAll(".qte");
    let total=document.querySelector(".totalprice");
    let somme=0;
    for(let i=0; i<qte.length;i++){
        somme=somme + prx[i].innerHTML * qte[i].innerHTML;
    }
    total.innerHTML=somme;
}
