Math.round = function (number) {
    if (number % 1 !== 0) {
        if (number % 1 >= 0.5) {
            return number - (number % 1) + 1
        } else {
            return number - (number % 1)
        }
    } else {
        return number
    }
};

Math.ceil = function (number) {
    if (number % 1 !== 0) {
        return number - (number % 1) + 1
    } else {
        return number
    }
};

Math.floor = function (number) {
    if (number % 1 !== 0) {
        return number - (number % 1)
    } else {
        return number
    }
};