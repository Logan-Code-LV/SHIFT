const express = require("express")
const router = express.Router()
const conn = require("./db")

router.get("/jobpost", (req, res, next) => {
  const sql = `SELECT restname, jobdesc, pay FROM shift.jobpost`
  conn.query(sql, (err, results, fields) => {
    res.json(results[0])
  })
})
module.exports = router
