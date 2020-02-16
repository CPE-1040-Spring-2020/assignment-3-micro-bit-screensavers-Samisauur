//Outline for screensavers assignment

let awake: boolean = true
let gest: Gesture = Gesture.Shake
let gestures = [Gesture.Shake, Gesture.LogoDown, Gesture.TiltLeft, Gesture.TiltRight, Gesture.ThreeG]
let foos = [ss1, ss2, ss3, ss4, ss5]



input.onButtonPressed(Button.A, function () {
    awake = true
})

input.onButtonPressed(Button.B, function () {
    awake = false
})
input.onGesture(Gesture.Shake, function () {
    gest = Gesture.Shake
})

input.onGesture(Gesture.LogoDown, function () {
    gest = Gesture.LogoDown
})

input.onGesture(Gesture.TiltLeft, function () {
    gest = Gesture.TiltLeft
})

input.onGesture(Gesture.TiltRight, function () {
    gest = Gesture.TiltRight
})
input.onGesture(Gesture.ThreeG, function () {
    gest = Gesture.ThreeG
})


function ss1() {
    for (let i = 0; i < 1; i++) {
        led.plot(2, 2)
        led.plot(0, 0)
        led.plot(1, 1)
        led.plot(2, 2)
        led.plot(3, 3)
        led.plot(4, 4)
        basic.pause(80)
        basic.clearScreen()
        led.plot(2, 2)
    }
    for (let i = 0; i < 1; i++) {
        led.plot(2, 2)
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 4)
        basic.pause(80)
        basic.clearScreen()
        led.plot(2, 2)
    }
    for (let i = 0; i < 1; i++) {
        led.plot(2, 2)
        led.plot(4, 0)
        led.plot(3, 1)
        led.plot(2, 2)
        led.plot(1, 3)
        led.plot(0, 4)
        basic.pause(80)
        basic.clearScreen()
        led.plot(2, 2)
    }
    for (let i = 0; i < 1; i++) {
        led.plot(2, 2)
        led.plot(0, 2)
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
        led.plot(4, 2)
        basic.pause(80)
        basic.clearScreen()
        led.plot(2, 2)
    
    }

}

function ss2() {
    let bar1 = game.createSprite(0, 0)
    let bar2 = game.createSprite(0, 1)
    let bar3 = game.createSprite(0, 2)
    let bar4 = game.createSprite(0, 3)
    let bar5 = game.createSprite(0, 4)

    let timing: number[] = [50, 55, 60, 65]


    for (let i = 0; (i) < 2; i++) {
        for (let j = 0; j < 2; j++) {
            bar1.move(1)
            bar1.ifOnEdgeBounce()
            basic.pause(timing[j])

        }
    }
    for (let i = 0; (i) < 2; i++) {
        for (let j = 0; j < 2; j++) {
            bar2.move(1)
            bar2.ifOnEdgeBounce()
            basic.pause(timing[j])

        }
    }
    for (let i = 0; (i) < 2; i++) {
        for (let j = 0; j < 2; j++) {
            bar3.move(1)
            bar3.ifOnEdgeBounce()
            basic.pause(timing[j])

        }
    }
    for (let i = 0; (i) < 2; i++) {
        for (let j = 0; j < 2; j++) {
            bar4.move(1)
            bar4.ifOnEdgeBounce()
            basic.pause(timing[j])

        }
    }
    for (let i = 0; (i) < 1; i++) {
        for (let j = 0; j < 4; j++) {
            bar5.move(1)
            bar5.ifOnEdgeBounce()
            basic.pause(timing[j])

        }
        basic.pause(100)



    }
    bar1.delete()
    bar2.delete()
    bar3.delete()
    bar4.delete()
    bar5.delete()
}

function ss3() {
    basic.plotLeds(`
    . . . . .
    # # . . .
    # # . . .
    # . . . .
    # . . . .
    `)
    basic.pause(100)
    basic.plotLeds(`
    . . . . .
    # # # . .
    # # . . .
    # . . . .
    # . . . .
    `)
    basic.pause(100)
    basic.plotLeds(`
    . . . . .
    # # . # .
    # # . . .
    # . . . .
    # . . . .
    `)
    basic.pause(100)
    basic.plotLeds(`
    . . . . #
    # # . . .
    # # . # .
    # . . . .
    # . . . .
    `)
    basic.pause(100)
    basic.plotLeds(`
    . . . . .
    # # . . .
    # # . . #
    # . # . .
    # . . . .
    `)
    basic.pause(100)
    basic.plotLeds(`
    . . . . .
    # # # . .
    # # . . .
    # . . # .
    # . . . .
    `)
    basic.pause(100)
    basic.plotLeds(`
    . . . . .
    # # . # .
    # # . . .
    # . . . #
    # . . . .
    `)
    basic.pause(100)
    basic.plotLeds(`
    . . . . #
    # # . . .
    # # # . .
    # . . . .
    # . . . .
    `)
    basic.plotLeds(`
    . . . . .
    # # . # .
    # # . . .
    # . . . .
    # . . . .
    `)
    basic.pause(100)
    basic.plotLeds(`
    . . . . #
    # # . . .
    # # . . .
    # . . . .
    # . . . .
    `)
    basic.pause(100)

}

function ss4() {
    for (let i = 0; i < 5; i++) {
        led.plotBrightness(i, i, 100)
        led.plot(0, i)
        led.plot(2, i)
        led.plot(4, i)
        led.plot(i, 2)
        led.plot(i, 0)
        led.plot(i, 4)
        basic.pause(400)
        basic.clearScreen()

    }
}
function ss5() {

}


basic.forever(function () {
    if (awake) {
        basic.showString("Hallo")
    } else {  // screensavers
        foos[gestures.indexOf(gest)]()
    }

})
