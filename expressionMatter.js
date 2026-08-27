









function expressionMatter(a, b, c) {

    let first = a + b + c
    let second = a * b + c
    let third = a + b * c
    let fourth = a * b * c
    let fiveth = (a + b) * c
    let sixth = a * (b + c)

   return Math.max(first, second, third, fourth, fiveth, sixth)
}