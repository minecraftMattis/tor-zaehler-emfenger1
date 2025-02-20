radio.onReceivedNumber(function (receivedNumber) {
    tor += receivedNumber
})
let tor = 0
radio.setGroup(1)
basic.forever(function () {
    basic.showNumber(tor)
})
