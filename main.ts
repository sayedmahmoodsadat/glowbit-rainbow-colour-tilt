let orange = 0
let purple = 0
let strip = neopixel.create(DigitalPin.P0, 25, NeoPixelMode.RGB_RGB)
strip.setBrightness(50)
basic.forever(function () {
    purple = Math.constrain(Math.map(input.acceleration(Dimension.Y), -1023, 0, 3, 255), 0, 255)
    purple = Math.constrain(Math.map(input.acceleration(Dimension.X), -500, 100, 0, 1000), 0, 1000)
    orange = Math.constrain(Math.map(input.acceleration(Dimension.Z), 0, 1023, 0, 1000), 5, 255)
    strip.showColor(neopixel.rgb(purple, 0, purple))
    strip.showColor(neopixel.rgb(orange, 0, purple))
    strip.showColor(neopixel.rgb(orange, 0, purple))
})
