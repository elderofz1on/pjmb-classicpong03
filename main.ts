input.onButtonPressed(Button.A, function () {
    if (raqueteA.get(LedSpriteProperty.X) > 0) {
        raqueteA.change(LedSpriteProperty.X, -1)
        raqueteB.change(LedSpriteProperty.X, -1)
    }
})
function rebater () {
    bola.change(LedSpriteProperty.X, direcaoX * -1)
    bola.change(LedSpriteProperty.Y, -1)
    direcaoX = randint(-1, 1)
    direcaoY = -1
    if (intervalo > 100) {
        intervalo += redução
    }
}
input.onButtonPressed(Button.B, function () {
    if (raqueteA.get(LedSpriteProperty.X) < 3) {
        raqueteA.change(LedSpriteProperty.X, 1)
        raqueteB.change(LedSpriteProperty.X, 1)
    }
})
let redução = 0
let intervalo = 0
let direcaoY = 0
let direcaoX = 0
let raqueteB: game.LedSprite = null
let raqueteA: game.LedSprite = null
let bola: game.LedSprite = null
bola = game.createSprite(randint(0, 4), 0)
raqueteA = game.createSprite(0, 4)
raqueteB = game.createSprite(1, 4)
direcaoX = randint(-1, 1)
direcaoY = 1
intervalo = 500
redução = -20
basic.pause(intervalo)
basic.forever(function () {
    bola.change(LedSpriteProperty.X, direcaoX)
    bola.change(LedSpriteProperty.Y, direcaoY)
    if (bola.isTouching(raqueteA) || bola.isTouching(raqueteB)) {
        rebater()
        game.addScore(1)
    } else {
        if (bola.get(LedSpriteProperty.Y) <= 0) {
            direcaoX = randint(-1, 1)
            direcaoY = 1
        } else if (bola.get(LedSpriteProperty.Y) >= 4) {
            game.gameOver()
        }
        if (bola.get(LedSpriteProperty.X) <= 0) {
            direcaoX = 1
        } else if (bola.get(LedSpriteProperty.X) >= 4) {
            direcaoX = -1
        }
        basic.pause(intervalo)
    }
})
