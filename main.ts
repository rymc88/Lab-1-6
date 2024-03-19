namespace SpriteKind {
    export const extraLife = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.extraLife, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.halo, 1000)
    info.changeScoreBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.extraLife, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.smiles, 500)
    info.changeLifeBy(1)
})
sprites.onDestroyed(SpriteKind.extraLife, function (sprite) {
	
})
info.onCountdownEnd(function () {
    heroSprite.sayText("Time's Up!", 2000, false)
    info.startCountdown(10)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.ashes, 500)
    info.changeScoreBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(8, 152), randint(8, 112))
    otherSprite.setVelocity(randint(-100, 100), randint(-100, 100))
    info.changeLifeBy(-1)
})
let lifeSprite: Sprite = null
let foodSprite: Sprite = null
let heroSprite: Sprite = null
heroSprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(heroSprite)
heroSprite.setStayInScreen(true)
heroSprite.sayText("Hey!", 2000, false)
let enemySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
enemySprite.setPosition(randint(8, 152), randint(8, 112))
enemySprite.setVelocity(randint(-100, 100), randint(-100, 100))
enemySprite.setBounceOnWall(true)
info.setLife(5)
game.splash("This is Todd")
info.startCountdown(5)
game.onUpdateInterval(3000, function () {
    foodSprite = sprites.create(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `, SpriteKind.Food)
    foodSprite.setPosition(randint(8, 152), randint(8, 112))
})
game.onUpdateInterval(10000, function () {
    lifeSprite = sprites.create(img`
        . . 1 1 . . . 1 1 . . 
        . 1 2 2 1 . 1 2 2 1 . 
        1 2 3 2 2 1 2 2 2 2 1 
        1 2 3 2 2 2 2 2 2 2 1 
        1 2 2 2 2 2 2 2 2 2 1 
        . 1 2 2 2 2 2 b 2 1 . 
        . . 1 2 2 2 b 2 1 . . 
        . . . 1 2 2 2 1 . . . 
        . . . . 1 2 1 . . . . 
        . . . . . 1 . . . . . 
        `, SpriteKind.extraLife)
    lifeSprite.setPosition(randint(8, 152), randint(8, 112))
    lifeSprite.setVelocity(randint(-20, 20), randint(-20, 20))
    lifeSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
