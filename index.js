const botonclick = document.getElementById("jugar");
const selectvalue = document.getElementById("selectOption1");
const empate = document.getElementById("empate");
const ganar = document.getElementById("ganar");
const perder = document.getElementById("perder");
let textvs = document.getElementById("vs");
let optionuser = document.getElementById("optionuser");
let optionmachine = document.getElementById("optionmachine");
let ocultar = document.querySelector(".container-all");
const ROCK = "piedra";
const PAPER = "papel";
const SCISSORS = "tijera";

function useroption(){
    const valuemachine = [ROCK, PAPER, SCISSORS];
    const random = valuemachine[Math.floor(Math.random()*3)];

    if(botonclick.addEventListener("click",function(){
        let selected = selectvalue.options[selectvalue.selectedIndex].value;
        if(selected != "" && random != ""){
            $('.image-select').addClass('show');
            textvs.classList.add("show")
            optionuser.src="/images/"+selected+".png";
            optionmachine.src="/images/"+random+".png";
            ocultar.classList.add("hidden");
            if(selected == random){
                empate.classList.add("show");
            }else if((selected == 'piedra' && random =='tijera') || (selected == 'tijera' && random =='papel')|| (selected == 'papel' && random =='piedra')){
                ganar.classList.add("show");
            }else{
                perder.classList.add("show");
            }
        }else{
            alert("Selecciona una opción");
        }
    }));
    
}

function changetext(){
    if(botonclick.addEventListener("click",function(){
        let selected = selectvalue.options[selectvalue.selectedIndex].value;
        let url = document.getElementById('url')
        if(selected != ""){
            botonclick.classList.add('playagain');
            botonclick.innerHTML="Jugar de nuevo";
        }
        if(botonclick.classList.contains('playagain')){
            if(botonclick.addEventListener("click",function(){
                url.href = "/index.html"
            }));
        }
    }));
}
changetext();
useroption();



