const router = require("express").Router()
let conn = require("./db")

router.get("/profile/:username", (req, res, next) => {
  const username = req.params.username
  const sql = `SELECT name, website FROM shift.clients WHERE username = ?`
  conn.query(sql, [username], (err, results, fields) => {
    res.json(results[0])
  })
})
module.exports = router
