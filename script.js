// Declaração de variáveis 

const section = document.querySelector('section')
const p = document.querySelector('hoje')
const main = document.querySelector('main')
var pessoa = {}

// Função para dinamizar
function personMessage (name, message, hours){
    pessoa = {
        nome: name,
        mensagem: message,
        horas: hours, 
        ladoSection: undefined,
        ladoMensagem: undefined,
    }
    if(pessoa.nome == "Cecília"){
        pessoa.ladoSection = "leftSection",
        pessoa.ladoMensagem = "leftMessage"
    } else{
        pessoa.ladoSection = "rightSection",
        pessoa.ladoMensagem = "rightMessage"
    }
    function criarElemento(){
        var sectionNova = document.createElement('section')
        main.append(sectionNova)

        var pNovo = document.createElement('p')
        pNovo.textContent = pessoa.nome + '-' +pessoa.horas
        sectionNova.append(pNovo)

        var divNova = document.createElement('div')
        sectionNova.append(divNova)

        var pMessage = document.createElement('p')
        divNova.append(pMessage)
        pMessage.textContent = pessoa.mensagem

        pMessage.classList.add(pessoa.ladoMensagem)
        sectionNova.classList.add(pessoa.ladoSection)
    }
    criarElemento()
    console.log(pessoa.nome)
    
    console.log(pessoa.nome)
}
personMessage("Cecília", "Tive uma ideia incrível para um projeto!", "11:30")
personMessage("Você", "Sério? Me conta mais.", "11-32")
personMessage("Cecília", "E se a gente fizesse um chat moderno e responsivo em apenas uma semana?", "11-34")
personMessage("Você", "#BoraCodar!", "11:36")


// Criação de Elementos

// Debug

console.log(pessoa)
