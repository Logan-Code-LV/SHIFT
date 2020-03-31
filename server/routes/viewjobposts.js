const express = require("express")
const router = express.Router()
const conn = require("./db")

router.post("/jobpost", (req, res, next) => {
  const restname = req.body.restname
  const jobdesc = req.body.jobdesc
  const pay = req.body.pay

  const insertSql = `INSERT INTO jobpost (restname, jobdesc, pay) VALUES (?, ?, ?)`

  conn.query(insertSql, [restname, jobdesc, pay], (err, results, fields) => {
    res.json({
      message: "job added successfully!"
    })
  })

  console.log(results)
})

module.exports = router
