const router = require("express").Router()
let conn = require("./db")

router.get("/profilefree/:username", (req, res, next) => {
  const username = req.params.username
  const sql = `SELECT firstname, lastname, jobposition, qualifications FROM shift.freelancers WHERE username = ?`
  conn.query(sql, [username], (err, results, fields) => {
    res.json(results[0])
  })
})
module.exports = router
