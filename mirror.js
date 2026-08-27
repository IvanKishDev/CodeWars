



function mirror(data) {

    let firstPart = data.toSorted((a, b) => a - b)
    let secondPart = firstPart.slice(0, -1).toReversed()

    return ([...firstPart, ...secondPart])
}

