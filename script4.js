const firstImg = document.querySelector('#firstImg')
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 778
const CANVAS_HEIGHT = canvas.height = 625
firstImg.src = 'img/sprite sheet.png'

const spriteWidth = 1038
const spriteHeight = 832
let frame = 0
let speed = 0
const speedFrame = 5
// let i = 0
// let currentAction = 'run'
// let currentAction = 'dash'
let currentAction = 'jump'  
// let currentAction = 'attack'

const actionName = ['run','attack','jump','dash']

const action = [
    {
        name: 'run',
        frames: 4,
    },
    {
        name: 'attack',
        frames: 6,
    },
    {
        name: 'jump',
        frames: 9,
    },
    {
        name: 'dash',
        frames: 7,
    }
]

const Anime = () => {
    if ((speed % speedFrame) == 0) {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        i = actionName.indexOf(currentAction)
        let frameX = spriteWidth * (frame % (action[i].frames))
        let frameY = spriteHeight * i
        ctx.drawImage(firstImg, frameX, frameY, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        frame++
    }
    speed++
    requestAnimationFrame(Anime)
}
Anime()