const express = require("express")
let conn = require("./db")
const router = express.Router()

router.get("/interestedfree", (req, res, next) => {
  const sql = `SELECT  id
  FROM shift.jobpost jp 
  LEFT JOIN linktable lt on lt.id_job = jp.id
  LEFT JOIN freelancers f on lt.id_free = f.id 
  WHERE f.id = ? and jp.id = ?`

  conn.query(sql, (err, results, fields) => {
    res.json(results)
  })
})

router.post("/interestedfree", (req, res, next) => {
  const freeId = req.body.freeId
  const itemId = req.body.itemId
  const insertSQL = `INSERT INTO linktable (id_job, id_free) VALUES (?, ?) `

  conn.query(insertSQL, [itemId, freeId], (err, results, fields) => {
    res.json({ message: "added job" })
  })
})

module.exports = router
