const btnMobile = document.getElementById('btn-mobile');
const body = document.getElementsByTagName('body');

function toggleMenu(){
  const header = document.getElementById('header');
  header.classList.toggle('on')
}

btnMobile.addEventListener('click', toggleMenu);

// Fixa Estilo Lista
const inicio = document.querySelector('#inicio')
const about = document.querySelector('#about')
const contato = document.querySelector('#contato')
const comoFunciona = document.querySelector('#comofunciona')
const navbar = document.querySelectorAll('a')//melhorar esse seletor

function mudaClasse(){
    const pathName = document.location.pathname;
if(pathName == '/'){
    inicio.classList.toggle('active')
    } else if(pathName == '/comoFunciona'){
        comoFunciona.classList.toggle('active')
    } else if(pathName == '/about'){
        about.classList.toggle('active')
    } else if(pathName == '/contato'){
        contato.classList.toggle('active')
    } else{
        navbar.classList.remove('active')
    }
}
window.addEventListener('load', mudaClasse);

