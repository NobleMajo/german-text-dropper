const germanVocals = ["a", "e", "i", "o", "u", "ö", "ä", "ü"]
const germanDoubleVocals = ["ei", "ie", "eu", "au", "äu"]

/**
 * @param {string} word
 * @returns {([soundPart: string, isVocal: boolean, realPart: string])[]} 
 */
function splitByGermanVocals(word) {
    const result = []

    let i = 0
    while (i < word.length) {
        if (
            i + 1 < word.length &&
            germanDoubleVocals.includes(
                word[i].toLowerCase() +
                word[i + 1].toLowerCase()
            )
        ) {
            if (i > 0) {
                const v = word.slice(0, i)
                result.push([
                    v,
                    false,
                    v
                ])
                word = word.slice(i)
            }

            const v = word[0] + word[1]

            result.push([
                (
                    v == "äu" ?
                        "eu" :
                        (
                            v == "ie" ?
                                "i" :
                                v
                        )
                ),
                true,
                v
            ])

            word = word.slice(2)
            i = 0
            continue
        }

        if (
            germanVocals.includes(
                word[i].toLowerCase()
            )
        ) {
            if (i > 0) {
                const v = word.slice(0, i)
                result.push([
                    v,
                    false,
                    v
                ])
                word = word.slice(i)
            }

            result.push([
                word[0],
                true,
                word[0]
            ])

            word = word.slice(1)
            i = 0
            continue
        }

        i++
    }

    if (word.length > 0) {
        result.push([
            word,
            false,
            word
        ])
    }

    return result
}

async function getGermanRhymesOf(word) {
    const resp = await fetch("./api/rhymes/" + word)

    if (resp.status != 200) {
        return undefined
    }

    const words = await resp.json()

    return words
}


