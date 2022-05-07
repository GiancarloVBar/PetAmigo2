

const btnMobile = document.getElementById('btn-mobile');
const body = document.getElementsByTagName('body');

function toggleMenu(){
  const header = document.getElementById('header');
  header.classList.toggle('on')
}

btnMobile.addEventListener('click', toggleMenu);

const entrar = document.getElementById('entrar');
const cadastrar = document.getElementById('cadastrar');
const loginDiv = document.getElementById('login')

// Lógica Login Mobile
let login = false;
  if(login){
    entrar.textContent = 'Sair'     
    cadastrar.textContent = 'Minha conta' 
    loginDiv.classList.add('logado')
  }else{
    entrar.textContent = 'Entrar'  
    cadastrar.textContent = 'Cadastre-se' 
    loginDiv.classList.remove('logado')
  }

// Lógica Login 

let loginDesktop = true;
if(loginDesktop){
  cadastrar.textContent = 'Minha Conta';
  entrar.textContent = 'Sair'
}else{
  cadastrar.textContent = 'Cadastre-se' 
  entrar.style.display = 'Entrar'

}

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

