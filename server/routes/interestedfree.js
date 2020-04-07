const express = require("express")
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
  console.log(results)
})
router.post("/interestedfree", (req, res, next) => {
  const insertSQL = `INSERT INTO linktable (id_job, id_free) VALUES (?, ?) `
})

module.exports = router
