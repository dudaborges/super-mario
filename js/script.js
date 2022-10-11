const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')


const jump = () => {
    mario.classList.add('jump')
    // para adicionar a class jump no mario. Mesma coisa que escrever no class do mario assim: class="mario jump"

    // para remover o "jump" do mario. É preciso remover, porque se não a animação acontece apenas uma vez. E também antes de remover é preciso respeitar o tempo de animação do pulo que é de 500ms.
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)

}

// criar um loop para verificar se perdeu ou não perdeu
const loop = setInterval(() => {
    // para acessar o deslocamento esquerdo do tubo
    const pipePosition = pipe.offsetLeft
    // pega o estilo do bottom computado do mario e gera o valor string sem px
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    // o + na frente converte para number, assim como "number()"

 
    // quando a posição em relação a esquerda do pipe for 120 px, acaba a animação.
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        // para parar de rodar o loop quando acabar o jogo
        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', jump)
// o evento keydown é quando pressionar a tecla