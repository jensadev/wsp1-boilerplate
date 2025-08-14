import "dotenv/config"
import express from "express"
import nunjucks from "nunjucks"
import morgan from 'morgan'

import indexRouter from './routes/index.js'

const app = express()
const port = 3000 || process.env.PORT

nunjucks.configure("views", {
  autoescape: true,
  express: app,
})

app.set('view engine', 'njk')
app.set('views', './views')

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static("public"))

app.use("/", indexRouter)

app.use((req, res, next) => {
    res.status(404).send("Sidan kunde inte hittas.")
})

app.use((err, req, res, next) => {
    res.status(500).send("Serverfel.")
})

export default app
export { port }