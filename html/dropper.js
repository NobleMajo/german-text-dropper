
const text1List = [
    "Der Seitensprung ist",
    "Die Gewalt ist",
    "Das Kunstwerk ist",
    "Das Alles ist",
    "Die Freundschaft ist",
    "Der Traum ist",
    "Die Liebe ist",
    "Das Abenteuer ist",
    "Der Moment ist",
    "Die Hoffnung ist",
    "Das Geheimnis ist",
    "Der Blick ist",
    "Die Reise ist",
    "Das Lachen ist",
    "Der Gedanke ist",
    "Die Stille ist",
    "Das Glück ist",
    "Der Schmerz ist",
    "Die Erinnerung ist",
    "Das Ziel ist",
    "Der Augenblick ist",
    "Die Welt ist",
    "Das Leben ist",
    "Die Zeit ist",
    "Das Vertrauen ist",
    "Der Anfang ist",
    "Die Harmonie ist",
    "Das Risiko ist",
    "Der Weg ist",
    "Die Freude ist",
    "Das Wunder ist",
    "Der Augenkontakt ist",
    "Die Einsamkeit ist",
    "Das Verständnis ist",
    "Die Wahrheit ist",
    "Das Abenteuer ist",
    "Die Herausforderung ist",
    "Das Verlangen ist",
    "Der Gedanke ist",
    "Die Phantasie ist",
    "Das Versprechen ist",
    "Der Glanz ist",
    "Die Sehnsucht ist",
    "Das Gefühl ist",
    "Der Frieden ist",
    "Die Leidenschaft ist",
    "Das Schweigen ist",
    "Die Erfahrung ist",
    "Die Melodie ist",
    "Der Rhythmus ist",
    "Das Echo ist",
    "Die Inspiration ist",
    "Der Klang ist",
    "Die Illusion ist",
    "Die Harmonien sind",
    "Die Seitensprünge sind",
    "Die Gewalten sind",
    "Die Kunstwerke sind",
    "Die Alle sind",
    "Die Träume sind",
    "Die Abenteuer sind",
    "Die Momente sind",
    "Die Hoffnungen sind",
    "Die Geheimnisse sind",
    "Die Blicke sind",
    "Die Reisen sind",
    "Die Lachen sind",
    "Die Gedanken sind",
    "Die Style sind",
    "Die Zufälle sind",
    "Dein Mut ist",
    "Diese Rache ist",
    "Dein Gedanken sind",
    "Dieser Wille ist",
    "Mein Hammer ist",
    "Mein Wille ist",
    "Dieses Schwert ist",
    "Der Schlag ist",
    "Der Schuss ist",
    "Dieser Schluss ist",
    "Die Realität ist",
]

const text2List = [
    "schnell",
    "laut",
    "sorgfältig",
    "oft",
    "hier",
    "vielleicht",
    "immer",
    "gerne",
    "zusammen",
    "endlich",
    "bald",
    "sehr",
    "wirklich",
    "nun",
    "früh",
    "bisher",
    "sicher",
    "vollständig",
    "langsam",
    "unbedingt",
    "plötzlich",
    "überall",
    "einmal",
    "wohl",
    "besser",
    "ebenfalls",
    "dabei",
    "kaum",
    "nachher",
    "oftmals",
    "manchmal",
    "seitdem",
    "sofort",
    "leider",
    "zugleich",
    "zuletzt",
    "draußen",
    "unten",
    "zuvor",
    "häufig",
    "nebenbei",
    "einfach",
    "niemals",
    "gerne",
    "vollkommen",
    "wirklich",
    "absolut",
    "Ausnahmsweise nicht",
    "nicht ganz",
    "außergewöhnlich",
    "unglaublich",
    "grenzenlos",
    "zutiefst",
    "völlig",
    "nicht",
]

const text3List = [
    "Falsch",
    "unterschätzt",
    "grundfalsch",
    "eine große Enttäuschung",
    ", was uns bleibt",
    "episch",
    "magisch",
    "unvergesslich schön",
    "eine wahre Inspiration",
    "bereichernd",
    "eine Meisterleistung",
    "faszinierend",
    "ein echtes Wunder",
    "beeindruckend",
    "herzerwärmend schön",
    "unvergleichlich",
    "beeindruckend",
    "erstaunlich",
    "eine Offenbarung",
    "unbeschreiblich intensiv",
    "eine Sternstunde",
    "kraftvoll",
    "ein triumphaler Erfolg",
    "bewegend",
    "eine Perle der Kunst",
    "eine emotionale Achterbahn",
    "magisch",
    "mitreißend",
    "ein Höhepunkt",
    "eine tiefgehende Erfahrung",
    "voller zauberhafter Momente",
    "eine echte Freude",
    "inspirierend",
    "eine wahre Freude",
    "schön",
    "ein echtes Juwel",
    "erhebend",
    "ein wahrer Genuss",
    "unvergesslich intensiv",
    "eine Reise der Gefühle",
    "einfach großartig",
    "eine Symphonie der Emotionen",
    "ein Geniestreich",
    "unerwartet",
    "eine Quelle der Freude",
    "unvergesslich",
    "bezaubernd",
    "eine Ode an die Schönheit",
    "absolut beeindruckend",
    "eine wahre Entdeckung",
    "voller erhebender Momente",
    "einfach unwiderstehlich",
    "ein wahrhaftiges Kunstwerk",
    "umwerfend",
    "ein echtes Highlight",
    "eine Hommage an die Fantasie",
    "grandios",
    "eine wahre Augenweide",
    "berauschend",
    "pervers",
    "zerstörend",
    "zerreißend",
    "vergeltend",
    "larm",
    "vergiftet",
    "schlecht",
    "kindlich",
    "dümmer",
    "gesehen",
    "hässlicher",
    "derber",
    "betäubt",
    "verständlich",
    "nervig",
    "unerwünscht",
    "ein Pfeiler der Gesellschaft",
    "ein unerwünschtes Pack",
    "quais territorial",
    "rassistisch",
    "besonders sozial",
    "sozial",
    "gnadenlos"
]

const getRandomNumberBetween = (
    min,
    max
) => {
    return Math.floor(
        Math.random() * (
            max - min + 1
        ) + min
    )
}

const getRandomElementFromArray = (
    arr,
    not
) => {
    const result = arr[
        Math.floor(
            Math.random() * arr.length
        )
    ]

    if (
        Array.isArray(not)
    ) {
        for (const value of not) {
            if (value == result) {
                return getRandomElementFromArray(
                    arr,
                    not
                )
            }
        }
    }

    if (not === result) {
        return getRandomElementFromArray(
            arr,
            not
        )
    }

    return result
}

document.addEventListener('DOMContentLoaded', () => {
    const text1 = document.getElementById("text1")
    const text2 = document.getElementById("text2")
    const text3 = document.getElementById("text3")
    const rhymeWordsElement = document.getElementById("rhyme-words")


    let lastText1 = ""
    let lastText2 = ""
    let lastText3 = ""
    let textNumber = 999

    const generateNewText = () => {
        lastText1 = text1.innerText
        lastText2 = text2.innerText
        lastText3 = text3.innerText

        text1.innerText = getRandomElementFromArray(text1List, lastText1)
        text2.innerText = getRandomElementFromArray(text2List, lastText2)
        text3.innerText = getRandomElementFromArray(text3List, lastText3)

        const newEndWord = text3.innerText
            .split(" ").slice(-1)[0]

        if (getRandomNumberBetween(1, 10) == 10) {
            text3.innerText += "?"
        } else if (getRandomNumberBetween(1, 10) > 6) {
            text3.innerText += "!"
        } else {
            text3.innerText += "."
        }

        rhymeWordsElement.innerHTML = ""

        const numberOfWords = 6

        getGermanRhymesOf(newEndWord).then(async (rhymeWords) => {
            if (!rhymeWords) {
                return
            }

            if (rhymeWords.length < numberOfWords) {
                for (const word of rhymeWords) {
                    if (newEndWord.endsWith(word)) {
                        const rhymeWords2 = await getGermanRhymesOf(word)
                        if (rhymeWords2) {
                            rhymeWords.push(...rhymeWords2)
                        }

                        if (rhymeWords.length > numberOfWords) {
                            break
                        }
                    }

                }
            }

            if (rhymeWords.length < numberOfWords) {
                rhymeWordsElement.innerHTML =
                    rhymeWords.map(
                        (v, i) => (
                            "<span class='improved'>" +
                            v +
                            "</span>"
                        )
                    ).join("\n")
                return
            }

            const list = rhymeWords.slice(
                0,
                Math.round(numberOfWords / 2)
            )

            rhymeWordsElement.innerHTML = list.map(
                (v, i) => (
                    "<span class='improved'>" +
                    v +
                    "</span>"
                )
            ).join("\n")


            rhymeWords = rhymeWords.sort(
                (a, b) => {
                    if (a.length == b.length) {
                        return 0
                    }
                    if (a.length == newEndWord.length) {
                        return -1
                    }
                    if (b.length == newEndWord.length) {
                        return 1
                    }
                    const adif = a.length > newEndWord.length ?
                        a.length - newEndWord.length :
                        newEndWord.length - a.length
                    const bdif = b.length > newEndWord.length ?
                        b.length - newEndWord.length :
                        newEndWord.length - b.length

                    return adif - bdif
                }
            )

            let i = 0
            while (list.length < numberOfWords) {
                if (!list.includes(rhymeWords[i])) {
                    rhymeWordsElement.innerHTML += "\n" +
                        "<span class='normal'>" +
                        rhymeWords[i] +
                        "</span>"
                    list.push(rhymeWords[i])
                }
                i++
            }

        })
    }

    document.onclick = generateNewText
    generateNewText()

    document.addEventListener("keydown", (ev) => {
        if (ev.code === "Space") {
            generateNewText()
        }
    })
})
