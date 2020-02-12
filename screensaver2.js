 //Outline for screensavers assignment
let awake: boolean = true
basic.forever(function () {
    if (awake) {
        basic.showString("ok")
    } else {
        basic.showIcon(IconNames.Ghost) // this will be your array

    }

    input.onButtonPressed(Button.A, function () {
        awake = true
    })
    input.onButtonPressed(Button.B, function () {
        awake = false
    })



    input.onGesture(Gesture.Shake, function () {
        basic.showIcon(IconNames.Ghost)

    })
    input.onGesture(Gesture.TiltRight, function () {
        game.createSprite(2, 2)
    })
    input.onGesture(Gesture.TiltLeft, function () {
        images.createImage(`
        . . . . .
        . # . # .
        # . . . #
        # # # # #
        . . . . .
        `)
    })
})
