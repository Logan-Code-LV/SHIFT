const express = require("express")
const router = express.Router()
const conn = require("./db")

router.get("/jobpost/:restname", (req, res, next) => {
  const restname = req.params.restname

  const insertSql = `
SELECT c.username jp.restname jp.jobdesc jp.pay
from shift.clients c LEFT JOIN jobpost jp on c.restname = jp.restname WHERE jp.restname = ?;`

  conn.query(insertSql, [restname], (err, results, fields) => {
    res.json(restname)
    console.log(results)
  })
})

module.exports = router
