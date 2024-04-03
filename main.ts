Microbit.init()
Microbit.laserController(Write_pin.w3, true)
basic.forever(function () {
    Microbit.showNumber(Oled.oled1, Microbit.ReadGrayLevel(Read_pin.r0))
})
