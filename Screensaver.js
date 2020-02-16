// First Screen Saver SS1
basic.forever(function () {

    for (let i = 0; i < 5; i++) {
        led.plotBrightness(i, i, 100)
        led.plot(0, i)
        led.plot(2, i)
        led.plot(4, i)
        led.plot(i, 2)
        led.plot(i, 0)
        led.plot(i, 4)
        basic.pause(100)
        basic.clearScreen()
    }
})
// Second Screen Saver SS2
basic.forever(function () {
    for (let i = 0; i < 1; i++) {
        led.plot(2, 2)
        led.plotBrightness(0, 0, 80)
        led.plotBrightness(1, 1, 160)
        led.plotBrightness(2, 2, 255)
        led.plotBrightness(3, 3, 160)
        led.plotBrightness(4, 4, 80)
        basic.pause(80)
        basic.clearScreen()
        led.plot(2, 2)
    }
    for (let i = 0; i < 1; i++) {
        led.plot(2, 2)
        led.plotBrightness(2, 0, 80)
        led.plotBrightness(2, 1, 160)
        led.plotBrightness(2, 2, 255)
        led.plotBrightness(2, 3, 160)
        led.plotBrightness(2, 4, 80)
        basic.pause(80)
        basic.clearScreen()
        led.plot(2, 2)
    }
    for (let i = 0; i < 1; i++) {
        led.plot(2, 2)
        led.plotBrightness(4, 0, 80)
        led.plotBrightness(3, 1, 160)
        led.plotBrightness(2, 2, 255)
        led.plotBrightness(1, 3, 160)
        led.plotBrightness(0, 4, 80)
        basic.pause(80)
        basic.clearScreen()
        led.plot(2, 2)
    }
    for (let i = 0; i < 1; i++) {
        led.plot(2, 2)
        led.plotBrightness(0, 2, 80)
        led.plotBrightness(1, 2, 160)
        led.plotBrightness(2, 2, 255)
        led.plotBrightness(3, 2, 160)
        led.plotBrightness(4, 2, 80)
        basic.pause(80)
        basic.clearScreen()
        led.plot(2, 2)
    }
})    

// third screen saver SS3
//////////////////////////////////////////////
///////////////////////////////////////
//////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////
// fourth screen saver ss4
let bar1 = game.createSprite(0, 0)
let bar2 = game.createSprite(0, 1)
let bar3 = game.createSprite(0, 2)
let bar4 = game.createSprite(0, 3)
let bar5 = game.createSprite(0, 4)
let lumocity: number[] = [255, 200, 160, 110, 60]
let timing: number[] = [50, 55, 60, 65]

basic.forever(function () {
    for (let i = 0; (i) < 2; i++) {
        for (let j = 0; j < 2; j++) {
            bar1.move(1)
            bar1.ifOnEdgeBounce()
            basic.pause(timing[j])
            bar1.set(LedSpriteProperty.Brightness, lumocity[bar1.get(LedSpriteProperty.Y)]);
        }
    }
    for (let i = 0; (i) < 2; i++) {
        for (let j = 0; j < 2; j++) {
            bar2.move(1)
            bar2.ifOnEdgeBounce()
            basic.pause(timing[j])
            bar2.set(LedSpriteProperty.Brightness, lumocity[bar2.get(LedSpriteProperty.Y)]);
        }
    }
    for (let i = 0; (i) < 2; i++) {
        for (let j = 0; j < 2; j++) {
            bar3.move(1)
            bar3.ifOnEdgeBounce()
            basic.pause(timing[j])
            bar3.set(LedSpriteProperty.Brightness, lumocity[bar3.get(LedSpriteProperty.Y)]);
        }
    }
    for (let i = 0; (i) < 2; i++) {
        for (let j = 0; j < 2; j++) {
            bar4.move(1)
            bar4.ifOnEdgeBounce()
            basic.pause(timing[j])
            bar4.set(LedSpriteProperty.Brightness, lumocity[bar4.get(LedSpriteProperty.Y)]);
        }
    }
    for (let i = 0; (i) < 2; i++) {
        for (let j = 0; j < 2; j++) {
            bar5.move(1)
            bar5.ifOnEdgeBounce()
            basic.pause(timing[j])
            bar5.set(LedSpriteProperty.Brightness, lumocity[bar5.get(LedSpriteProperty.Y)]);
        }
    }
})
    
// fifth screensaver ss5
let muz0 = game.createSprite(0, 4)
let muz1 = game.createSprite(1, 4)
let muz2 = game.createSprite(2, 4)
let muz3 = game.createSprite(3, 4)
let muz4 = game.createSprite(4, 4)
muz0.turn(Direction.Right, (-90))
muz1.turn(Direction.Right, (-90))
muz2.turn(Direction.Right, (-90))
muz3.turn(Direction.Right, (-90))
muz4.turn(Direction.Right, (-90))
let lumes: number[] = [255, 185, 135, 85, 25];
let timing: number[] = [30, 40, 60, 70]

basic.forever(function () {
    for (let i = 0; (i) < 2; i++) {
        for (let j = 0; j < 4; j++) {
            muz0.set(LedSpriteProperty.Brightness, lumes[muz0.get(LedSpriteProperty.Y)]);
            muz0.move(1)
            muz0.ifOnEdgeBounce()
            basic.pause(timing[j])

        }
    }
    for (let i = 0; (i) < 2; i++) {
        for (let j = 0; j < 4; j++) {
            muz1.set(LedSpriteProperty.Brightness, lumes[muz1.get(LedSpriteProperty.Y)]);
            muz1.move(1)
            muz1.ifOnEdgeBounce()
            basic.pause(timing[j])

        }
    }
    for (let i = 0; (i) < 2; i++) {
        for (let j = 0; j < 4; j++) {
            muz2.set(LedSpriteProperty.Brightness, lumes[muz2.get(LedSpriteProperty.Y)]);
            muz2.move(1)
            muz2.ifOnEdgeBounce()
            basic.pause(timing[j])

        }
    }
    for (let i = 0; (i) < 2; i++) {
        for (let j = 0; j < 4; j++) {
            muz3.set(LedSpriteProperty.Brightness, lumes[muz3.get(LedSpriteProperty.Y)]);
            muz3.move(1)
            muz3.ifOnEdgeBounce()
            basic.pause(timing[j])

        }
    }
    for (let i = 0; (i) < 2; i++) {
        for (let j = 0; j < 4; j++) {
            muz4.set(LedSpriteProperty.Brightness, lumes[muz4.get(LedSpriteProperty.Y)]);
            muz4.move(1)
            muz4.ifOnEdgeBounce()
            basic.pause(timing[j])

        }
    }
})
