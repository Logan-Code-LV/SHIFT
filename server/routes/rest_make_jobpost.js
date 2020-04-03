const express = require("express")
const router = express.Router()
const conn = require("./db")

router.post("/jobpost", (req, res, next) => {
  const restname = req.body.restname
  const jobdesc = req.body.jobdesc
  const pay = req.body.pay
  const id = req.body.restId
  const jobdate = req.body.jobdate
  const deadline = req.body.deadline

  const insertSql = `INSERT INTO jobpost (restname, jobdesc, pay, client_id, jobdate, deadline) VALUES (?, ?, ?, ?, ?, ?)`

  conn.query(
    insertSql,
    [restname, jobdesc, pay, id, jobdate, deadline],
    (err, results, fields) => {
      res.json({
        message: "job added successfully!"
      })
    }
  )

  console.log(results)
})

module.exports = router
