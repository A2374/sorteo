const inputParticipating = document.querySelector('.participating-container__input')
const btnAddParticipating = document.querySelector('.participating-container__button')

const listParticipatingBlock = document.querySelector('.participating-container__list-of-participating > ul')

btnAddParticipating.addEventListener('click', () => {
    if (inputParticipating.value != '') {
        let newParticipating = document.createElement('li')
        newParticipating.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="icon"><path d="M192 32C262.7 32 320 89.31 320 160V320C320 337.7 305.7 352 288 352C270.3 352 256 337.7 256 320V160C256 124.7 227.3 96 192 96H64V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V64C0 46.33 14.33 32 32 32H192zM160 480C142.3 480 128 465.7 128 448V192C128 174.3 142.3 160 160 160C177.7 160 192 174.3 192 192V416H320C355.3 416 384 387.3 384 352V64C384 46.33 398.3 32 416 32C433.7 32 448 46.33 448 64V352C448 422.7 390.7 480 320 480H160z"/></svg>'+inputParticipating.value
        newParticipating.setAttribute('class', 'participating-container__participating-name')

        listParticipatingBlock.appendChild(newParticipating)

        inputParticipating.value = ''
    }
})

const winnerBlock = document.querySelector('.winner-block__box')
const btnStart = document.querySelector('.winner-block__button')

const loadingBlock = document.querySelector('.loading')

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getWinner() {
    return listParticipatingBlock.children[getRandomInt(listParticipatingBlock.childElementCount)].textContent
}

const winnerName = document.createElement('span')
winnerName.setAttribute('class', 'winner-block__winner-name')


function showWinner(winner) {
    if (winnerBlock.childElementCount > 0) {
        winnerBlock.firstElementChild.remove()
    }
    winnerBlock.insertAdjacentHTML('beforeend', '<div class="loading"><span class="loading__span"></span></div>')
    
    setTimeout(() => {
        winnerName.innerHTML = winner
        winnerBlock.replaceChild(winnerName, winnerBlock.children[0])
    }, 5000)
}

let num = 0
btnStart.addEventListener('click', () => {
    if (num == 0) {
        showWinner('murphy_nbi')

        num++
    } else {
        showWinner(getWinner())
    }
})