//criar indice para passar imagem
let i = 0

//criar indice para o titulo da imagem
let indiceTitulo = 1

//pegar o elemento de classe 'imagem'
let imagemCarrosel = document.getElementsByClassName('imagem')

//pegar elemento das setas
let setaEsquerda = document.getElementById('seta-esquerda')
let setaDireita = document.getElementById('seta-direita')

//pegar elemento do titulo da descrição
let tituloDescricao = document.getElementById('titulo')

//criar indice para link
let linkSaibaMais = document.getElementById('link')

//criar função para alterar imagem quando passar
function passarParaProximaImagem() {
    imagemCarrosel[i].classList.remove('ativa')
    i++
    imagemCarrosel[i].classList.add('ativa')

    indiceTitulo++
    tituloDescricao.innerHTML = `Titulo da Imagem ${indiceTitulo}`

    setaEsquerda.style.display = 'block'
    if (i === imagemCarrosel.length - 1) {
        setaDireita.style.display = 'none'
    }

    if (i === 1) {
        linkSaibaMais.style.color = '#D9DD10'
    } else if (i === 2) {
        linkSaibaMais.style.color = '#A63A17'
    } else if (i === 3) {
        linkSaibaMais.style.color = '#10ACDD'
    }
}



//Criar função para voltar a imagem anterior
function voltarParaImagemAnterior() {
    imagemCarrosel[i].classList.remove('ativa')
    i--
    imagemCarrosel[i].classList.add('ativa')

    indiceTitulo--
    tituloDescricao.innerHTML = `Titulo da Imagem ${indiceTitulo}`

    setaDireita.style.display = 'block'
    if (i === 0) {
        setaEsquerda.style.display = 'none'
        linkSaibaMais.style.color = '#C50000'
    }

    if (i === 1) {
        linkSaibaMais.style.color = 'yellow'
    } else if (i === 2) {
        linkSaibaMais.style.color = '#A63A17'
    } else if (i === 3) {
        linkSaibaMais.style.color = '#10ACDD'
    }
}


