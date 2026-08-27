



function nearestSq(n){

    x = Math.floor(Math.sqrt(n))

    let first = x * x
    let second = (x + 1) * (x + 1)

    let fFirst = n - first
    let fSecond = second - n

    return (fFirst > fSecond) ? second : first

}