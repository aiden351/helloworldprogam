input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    music.playMelody("E A C5 F E G E G ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallHeart)
    music.playMelody("B G A B G E G E ", 120)
})
basic.showIcon(IconNames.Yes)
