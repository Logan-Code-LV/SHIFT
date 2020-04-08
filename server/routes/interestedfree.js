const express = require("express")
const router = express.Router()
let conn = require("../routes/db")

router.get("/showinterestedfree/:id", (req, res, next) => {
  const rest_id = req.params.id

  const sql = `SELECT  f.firstname, f.lastname, f.email, f.phone, jp.jobdesc
  FROM shift.jobpost jp 
  LEFT JOIN shift.linktable lt on lt.id_job = jp.id
  LEFT JOIN shift.freelancers f on lt.id_free = f.id 
  WHERE  jp.client_id = ?;`

  conn.query(sql, [rest_id], (err, results, fields) => {
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
