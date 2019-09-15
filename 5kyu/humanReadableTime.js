// Write a function, which takes a non-negative integer (seconds) as input and returns the 
// time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
    var jam = 0
    var menit = 0
    var detik = seconds
    var hasil = ''

    jam = (detik - (detik % 3600)) / 3600
    detik -= (jam * 3600)
    menit = (detik - (detik % 60)) / 60
    detik -= (menit * 60)
    if (jam === 0) {
        jam = '00'
    }
    if (menit === 0) {
        menit = '00'
    }
    if (detik === 0) {
        detik = '00'
    }
    if (jam < 10 && jam > 0) {
        jam = '0' + jam
    }
    if (menit < 10 && menit > 0) {
        menit = '0' + menit
    }
    if (detik < 10 && detik > 0) {
        detik = '0' + detik
    }
    hasil = `${jam}:${menit}:${detik}`
    return hasil
}
console.log(humanReadable(0))//, '00:00:00', 'humanReadable(0)');
console.log(humanReadable(5))//, '00:00:05', 'humanReadable(5)');
console.log(humanReadable(60))//, '00:01:00', 'humanReadable(60)');
console.log(humanReadable(86399))//, '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(359999))//, '99:59:59', 'humanReadable(359999)');