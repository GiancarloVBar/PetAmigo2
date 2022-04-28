const inicio = document.querySelector('#inicio')
const services = document.querySelector('#services')
const about = document.querySelector('#about')
const contato = document.querySelector('#contato')
const navbar = document.querySelectorAll('a')//melhorar esse seletor


function mudaClasse(){
    const pathName = document.location.pathname;
if(pathName == '/'){
    inicio.classList.toggle('active')
    } else if(pathName == '/services'){
        services.classList.toggle('active')
    } else if(pathName == '/about'){
        about.classList.toggle('active')
    } else if(pathName == '/contato'){
        contato.classList.toggle('active')
    } else{
        navbar.classList.remove('active')
    }
}

window.addEventListener('load', mudaClasse);

console.log(navbar);


