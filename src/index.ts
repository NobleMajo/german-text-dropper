import * as cors from "cors";
import * as express from "express";
import { getGermanRhymesOf } from "./german-rhymes";

const serverPort: number = 33334
const staticPath = process.cwd() + "/html"

const app = express()

app.use(cors({
    origin: "*"
}))
app.use(express.json())


const cacheTime: number = 1000 * 60 * 5
const cacheData: {
    [key: string]: {
        setTimeMillise: number,
        data: any
    }
} = {}

const cacheCleanInterval = setInterval(
    () => {
        for (const cacheKey of Object.keys(cacheData)) {
            if (
                cacheData[cacheKey].setTimeMillise + cacheTime + 1000 < Date.now()
            ) {
                delete cacheData[cacheKey]
            }
        }
    },
    Math.round(
        cacheTime / 2
    )
)

app.get("/api/rhymes/:word", async (req, res) => {
    const word = req.params.word
    if (
        typeof word != "string" ||
        word.length == 0
    ) {
        res.sendStatus(400)
        return
    }

    const cacheKey = req.path
    if (
        cacheData[cacheKey] &&
        cacheData[cacheKey].setTimeMillise + cacheTime > Date.now()
    ) {
        res.status(200)
        res.send(cacheData[cacheKey].data)
        return
    }

    const rhymeWords = await getGermanRhymesOf(word)

    if (
        !rhymeWords ||
        rhymeWords.length == 0
    ) {
        res.sendStatus(404)
        return
    }

    cacheData[cacheKey] = {
        data: rhymeWords,
        setTimeMillise: Date.now()
    }

    res.status(200)
    res.send(rhymeWords)
})

app.get("/api/test", async (req, res) => {
    res.sendStatus(200)
})

app.use(express.static(
    staticPath
))

app.listen(serverPort, "0.0.0.0", () => {
    console.info(
        "Server is running on port " + serverPort + "!"
    )
})
