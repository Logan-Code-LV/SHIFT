// const express = require("express")
// const router = express.Router()
// const conn = require("./db")

// router.post("/jobpost", (req, res, next) => {
//   const insertSql = `INSERT INTO jobpost (restname, jobdesc, pay) VALUES (?, ?, ?)`

//   const restname = req.body.restname
//   const jobdesc = req.body.jobdesc
//   const pay = req.body.pay

//   conn.query(
//     insertSql,
//     [req.body.restname, req.body.jobdesc, req.body.pay],
//     (err1, results1, fields1) => {
//       res.json({
//         message: "job added successfully!"
//       })
//     }
//   )
// })

// module.exports = router
