var cardregis = document.getElementById("cardregis");

function openRegister(){
    cardregis.style.transform = "rotateY(-180deg)";
}

function openLogin(){
    cardregis.style.transform = "rotateY(0deg)";
}

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
})