import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
  res.render("index.njk",
    { title: "Node js startrepo", message: "Använd det här repot som en grund för dina projekt." }
  )
})

export default router