const express = require("express")
const router = express.Router()
const conn = require("./db")

router.get("/viewjobs", (req, res, next) => {
  const Sql = `SELECT restname, jobdesc, pay, id, deadline 
  FROM shift.jobpost`

  conn.query(Sql, (err, results, fields) => {
    res.json(results)
  })
})
module.exports = router
