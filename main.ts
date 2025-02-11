controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speedY == 0) {
        speedX = 0
        speedY = -1
    }
})
function spawnFood () {
    mySprite = sprites.create(img`
        a a a a a a a a a a a a a a a a 
        a 2 2 2 2 2 2 2 2 2 2 2 2 2 2 a 
        a 2 2 2 2 2 2 2 2 2 2 2 2 2 2 a 
        a 2 2 2 2 2 2 2 2 2 2 2 2 2 2 a 
        a 2 2 2 2 2 2 2 2 2 2 2 2 2 2 a 
        a 2 2 2 2 2 2 2 2 2 2 2 2 2 2 a 
        a 2 2 2 2 2 2 2 2 2 2 2 2 2 2 a 
        a 2 2 2 2 2 2 2 2 2 2 2 2 2 2 a 
        a 2 2 2 2 2 2 2 2 2 2 2 2 2 2 a 
        a 2 2 2 2 2 2 2 2 2 2 2 2 2 2 a 
        a 2 2 2 2 2 2 2 2 2 2 2 2 2 2 a 
        a 2 2 2 2 2 2 2 2 2 2 2 2 2 2 a 
        a 2 2 2 2 2 2 2 2 2 2 2 2 2 2 a 
        a 2 2 2 2 2 2 2 2 2 2 2 2 2 2 a 
        a a a a a a a a a a a a a a a a 
        `, SpriteKind.Food)
    isEmptyPosition = false
    while (!(isEmptyPosition)) {
        x = 8 + 16 * randint(0, 9)
        y = 8 + 15 * randint(0, 7)
        isEmptyPosition = true
        for (let value of snake) {
            if (x == value.x && y == value.y) {
                isEmptyPosition = false
            }
        }
    }
    mySprite.setPosition(x, y)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speedX == 0) {
        speedX = -1
        speedY = 0
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speedX == 0) {
        speedX = 1
        speedY = 0
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speedY == 0) {
        speedX = 0
        speedY = 1
    }
})
function snakeColor (pink: Image, green: Image) {
    input2 = game.askForNumber("Pink for 1 and 2 for green", 1)
    if (input2 == 1) {
        mySprite = sprites.create(pink, SpriteKind.Player)
        mySprite.setFlag(SpriteFlag.AutoDestroy, true)
        mySprite.setPosition(8, 8)
        snake.push(mySprite)
        mySprite = sprites.create(pink, SpriteKind.Player)
        mySprite.setFlag(SpriteFlag.AutoDestroy, true)
        mySprite.setPosition(24, 8)
        snake.push(mySprite)
    } else if (input2 == 2) {
        mySprite = sprites.create(green, SpriteKind.Player)
        mySprite.setFlag(SpriteFlag.AutoDestroy, true)
        mySprite.setPosition(8, 8)
        snake.push(mySprite)
        mySprite = sprites.create(green, SpriteKind.Player)
        mySprite.setFlag(SpriteFlag.AutoDestroy, true)
        mySprite.setPosition(24, 8)
        snake.push(mySprite)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    growth = 1
    spawnFood()
    info.changeScoreBy(1)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false)
})
let input2 = 0
let snake: Sprite[] = []
let y = 0
let x = 0
let isEmptyPosition = false
let mySprite: Sprite = null
let growth = 0
let speedY = 0
let speedX = 0
tiles.setCurrentTilemap(tilemap`level2`)
speedX = 1
speedY = 0
growth = 0
snakeColor(img`
    a a a a a a a a a a a a a a a a 
    a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    a a a a a a a a a a a a a a a a 
    `, img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `)
spawnFood()
info.setScore(0)
pause(2000)
forever(function () {
    if (growth == 0) {
        mySprite = snake.shift()
    } else {
        growth = 0
        mySprite = sprites.create(img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, SpriteKind.Player)
        mySprite.setFlag(SpriteFlag.AutoDestroy, true)
    }
    x = snake[snake.length - 1].x + 16 * speedX
    y = snake[snake.length - 1].y + 15 * speedY
    mySprite.setPosition(x, y)
    snake.push(mySprite)
    if (snake.length == 80) {
        game.over(true)
    }
    pause(200)
})
