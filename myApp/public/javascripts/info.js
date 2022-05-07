
let estados = [
    { 'AC': 'Acre' },
    { 'AL': 'Alagoas' },
    { 'AP': 'Amapá' },
    { 'AM': 'Amazonas' },
    { 'BA': 'Bahia' },
    { 'CE': 'Ceará' },
    { 'DF': 'Distrito Federal' },
    { 'ES': 'Espírito Santo' },
    { 'GO': 'Goías' },
    { 'MA': 'Maranhão' },
    { 'MT': 'Mato Grosso' },
    { 'MS': 'Mato Grosso do Sul' },
    { 'MG': 'Minas Gerais' },
    { 'PA': 'Pará' },
    { 'PB': 'Paraíba' },
    { 'PR': 'Paraná' },
    { 'PE': 'Pernambuco' },
    { 'PI': 'Piauí' },
    { 'RJ': 'Rio de Janeiro' },
    { 'RN': 'Rio Grande do Norte' },
    { 'RS': 'Rio Grande do Sul' },
    { 'RO': 'Rondônia' },
    { 'RR': 'Roraíma' },
    { 'SC': 'Santa Catarina' },
    { 'SP': 'São Paulo' },
    { 'SE': 'Sergipe' },
    { 'TO': 'Tocantins' },
  ]

let siglas = estados.map(e=>{
    return Object.keys(e).toString()
})

const nomeEstados = estados.map(e=>{
     return Object.values(e).toString()
})
console.log(siglas)
const menuPet = ['Cachorros', 'Gatos', 'Roedores', 'Pássaros', 'Capivaras', 'Iguanas', 'Ariranhas']

const menuTamanho =  ['Pequeno', 'Médio', 'Grande'];

const menuName = ['Pet', 'Tamanho do Pet', 'Localização']

module.exports = { siglas, nomeEstados, menuPet, menuTamanho, menuName};


  