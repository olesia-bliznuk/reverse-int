module.exports = function reverse(n) {
    if (n.toString()[0] === '-')
        return Number(n.toString().substring(1).split("").reverse().join(""));
    else
        return Number(n.toString().split("").reverse().join(""));
}
