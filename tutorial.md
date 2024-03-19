# Lab 1.6: More Sprite Stuff

## Overview @unplugged

Before you can get started on your unit project, there are a few more things
that sprites can do you should know about. You'll learn about them here.

![Overview](https://github.com/rymc88/Lab-1-6/blob/master/img/overview.gif?raw=true)

In this lab, you will learn to:
- Display text and have sprites say things.
- Set timers and trigger events

## Say Something!

**Step 1:** From the ``||sprites: Sprites||`` drawer, add a ``||sprites: say ":)"||`` 
block to the start of your project. Have your Player sprite say something with it.

------------------------

**Step 2:** From the ``||game: Game||`` drawer, add a ``||game: splash||`` block
to your project. Have it tell the user what the name of your main character is. 
If you don't have one, now is the time to make one up!

```blocks
namespace SpriteKind {
    export const extraLife = SpriteKind.create()
}
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
// @highlight
heroSprite.sayText("Hey!")
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
// @highlight
game.splash("This is Todd")
```

## Start the Countdown

Let's add a timing element to the project.

**Step 1:** From the ``||info: Info||`` drawer, add a ``||info: start countdown||``
block to your ``||loops: on start||`` block. Set the timer to `5` seconds.

------------------------

**Step 2:** From the ``||info: Info||`` drawer, add an ``||info: on countdown end||``
block to your project.

-----------------------

**Step 3:** In the ``||info: on countdown end||`` block add a 
``||sprites: say ":)"||`` block and have your Player sprite say, 
"Times up!"" for one second.

----------------------

**Step 4:** From the ``||info: Info||`` drawer, add a ``||info: start countdown||``
block to the end of your ``||info: on countdown end||`` block. Set the timer to 
`10` seconds.

```blocks
namespace SpriteKind {
    export const extraLife = SpriteKind.create()
}
// @highlight
info.onCountdownEnd(function () {
    heroSprite.sayText("Time's Up!", 2000, false)
    info.startCountdown(10)
})
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
heroSprite.sayText("Hey!")
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
// @highlight
info.startCountdown(5)
```