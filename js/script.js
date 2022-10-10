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
    console.log(pipePosition)
}, 10)

document.addEventListener('keydown', jump)
// o evento keydown é quando pressionar a tecla