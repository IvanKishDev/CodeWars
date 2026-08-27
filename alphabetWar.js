


function alphabetWar(string) {

    let newString = string.toLowerCase();

    const noOneWins =  "Let's fight again!"
    const rWins = "Right side wins!"
    const lWins = "Left side wins!"
    let rCounter = 0
    let lCounter = 0

    const right = {
        m: 4,
        q: 3,
        d: 2,
        z: 1
    }

    const left = {
        w: 4,
        p: 3,
        b: 2,
        s: 1
    }


    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'm' || string[i] === 'q' || string[i] === 'd' || string[i] === 'z') {
            if (string[i] === 'm') rCounter += right.m
            if (string[i] === 'q') rCounter += right.q
            if (string[i] === 'd') rCounter += right.d
            if (string[i] === 'z') rCounter += right.z
        } else if (string[i] === 'w' || string[i] === 'p' || string[i] === 'b' || string[i] === 's') {
            if (string[i] === 'w') lCounter += left.w
            if (string[i] === 'p') lCounter += left.p
            if (string[i] === 'b') lCounter += left.b
            if (string[i] === 's') lCounter += left.s
        }
    }

    if (rCounter > lCounter) {
        return rWins
    } else if (lCounter > rCounter) {
        return lWins
    } else {
        return noOneWins
    }

}