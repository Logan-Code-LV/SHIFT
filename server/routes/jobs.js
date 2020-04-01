const express = require("express")
const router = express.Router()
const conn = require("./db")

router.get("/jobpost/:restid", (req, res, next) => {
  const rest_id = req.params.restid
  console.log(rest_id)
  const insertSql = `SELECT  jp.restname, jp.jobdesc, jp.pay
  from shift.clients c LEFT JOIN jobpost jp on c.id = jp.client_id WHERE jp.client_id = ?;`

  conn.query(insertSql, [rest_id], (err, results, fields) => {
    res.json(results)
    console.log(results)
  })
})

router.get("/getid/:username", (req, res, next) => {
  const username = req.params.username
  const sql = `Select id FROM shift.clients WHERE username = ?;`
  conn.query(sql, [username], (err, results, fields) => {
    res.json(results[0].id)
  })
})
module.exports = router
