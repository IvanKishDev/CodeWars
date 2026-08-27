



function firstNonRepeated(string) {

    let freq = {}

    for (let i = 0; i < string.length; i++) {
        if (!freq[string[i]]) {
            freq[string[i]] = 1
        } else {
            freq[string[i]] += 1
        }

    }

    for (let j = 0; j < string.length; j++) {
        if (freq[string[j]] === 1) {
            return string[j]
        }
    }
    return null
}

