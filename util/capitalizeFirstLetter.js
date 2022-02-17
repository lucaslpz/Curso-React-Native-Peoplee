/*
Deixa a primeira letra de uma palavra maíusculo
Ex: exemplo -> Exemplo
*/
const capitalizeFirstLetter = string =>{
    return string [0].toUpperCase()+ string.slice(1)
}

export default capitalizeFirstLetter;