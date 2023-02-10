input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        music.playMelody("E G C D B A F C5 ", 120)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        music.playMelody("E G C D B A F C5 ", 120)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playMelody("E G C D B A F C5 ", 120)
        basic.pause(500)
    }
})
basic.showString("5 4 3 2 1")
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    music.playMelody("B A F G - E D F ", 120)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        `)
    music.playMelody("B A F G - E D F ", 120)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        `)
    music.playMelody("B A F G - E D F ", 120)
    basic.pause(1000)
})
