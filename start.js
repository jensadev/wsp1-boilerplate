import app, { port } from "./server.js"

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})