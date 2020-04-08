const express = require("express")
const router = express.Router()
let conn = require("../routes/db")

router.get("/interestedfree", (req, res, next) => {
  const sql = `SELECT  firstname, lastname, email, phone
  FROM shift.jobpost jp 
  LEFT JOIN shift.linktable lt on lt.id_job = jp.id
  LEFT JOIN shift.freelancers f on lt.id_free = f.id 
  WHERE f.id = ? and jp.id = ?;`

  conn.query(sql, (err, results, fields) => {
    res.json(results)
  })
})
router.post("/interestedfree", (req, res, next) => {
  const jobId = req.body.id_job
  const freeId = req.body.id_free
  const insertSQL = `INSERT INTO shift.linktable(id_job, id_free) VALUES (?,?)`
  conn.query(insertSQL, [jobId, freeId], (err, results, fields) => {
    res.json({ Message: "added Interest" })
  })
})

module.exports = router
