const router = require("express").Router()
let conn = require("../routes/db")

router.get("/shift", (req, res, next) => {
  res.json({
    shift: "freelancer"
  })
  console.log(shift)
})
// router.get("/profile/:username", (req, res, next) => {
//   const username = req.params.username
//   const sql = `SELECT name, website FROM shift.clients WHERE username = ?`
//   conn.query(sql, [username], (err, results, fields) => {
//     res.json(results)
//   })
// })
module.exports = router
