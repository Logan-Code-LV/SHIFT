const express = require("express")
const router = express.Router()
const conn = require("./db")

router.get("/jobpost/:restname", (req, res, next) => {
  const jobs = req.params.restname
  const sql = `SELECT * FROM shift.jobpost WHERE restname = ?`
  conn.query(sql, [jobs], (err, results, fields) => {
    res.json(results[0])
  })
})

module.exports = router
