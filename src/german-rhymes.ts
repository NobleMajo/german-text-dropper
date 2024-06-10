const urlPrefix = "https://www.was-reimt-sich-auf.de/"
const urlSuffix = ".html"
const filterPrefix = '<ul class="rhymes">'
const filterSuffix = '</ul>'

export async function getGermanRhymesOf(word) {
    const resp = await fetch(urlPrefix + word.toLowerCase() + urlSuffix)

    if (resp.status != 200) {
        return
    }

    const htmlContent = await resp.text()

    const rhymesPart = htmlContent.split(filterPrefix)[1].split(filterSuffix)[0]

    let rhymeWords = rhymesPart
        .split("</a></li>")
        .slice(0, -1)

    rhymeWords = rhymeWords.map(
        (v) => v
            .split(">")
            .slice(-1)[0]
    )

    rhymeWords = rhymeWords.filter(
        (v) =>
            v.toLowerCase() !=
            word.toLowerCase()
    )

    return rhymeWords
}
