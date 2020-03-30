const express = require("express")
const router = express.Router()
const conn = require("./db")
const sha512 = require("js-sha512")
const randomString = require("../utils/randomstring")
const jwt = require("jsonwebtoken")
const config = require("config")

router.post("/register", (req, res, next) => {
  const username = req.body.username
  const salt = randomString(20)
  const password = sha512(req.body.password + salt)
  const name = req.body.name
  const website = req.body.website

  const checkSQL = "SELECT count(1) as count FROM clients WHERE username = ?"

  conn.query(checkSQL, [username], (err, results, fields) => {
    if (results[0].count > 0) {
      res.status(409).json({
        message: "username exists"
      })
    } else {
      const insertSql = `INSERT INTO clients (username, password, salt, name, website) VALUES (?, ?, ?, ?, ?)`

      //     const sql = `
      // INSERT INTO clients (username, password, salt)
      // VALUES (?, ?, ?)
      // `

      // conn.query(sql, [username, password, salt], (err1, results1, fields1) => {
      //   res.json({
      //     message: "client added successfully!"
      //   })
      // })

//       const insertSql = `INSERT INTO clients (username, password, salt) VALUES (?, ?, ?)`


      conn.query(
        insertSql,
        [username, password, salt, name, website],
        (err1, results1, fields1) => {
          res.json({
            message: "client added successfully"
          })
          console.log(err1)
        }
      )
    }
  })
})

router.post("/login", (req, res, next) => {
  const username = req.body.username
  const password = req.body.password
  const getSQL =
    "SELECT username, salt, password FROM clients WHERE username = ?"
  conn.query(getSQL, [username], (salterr, saltresults, saltfields) => {
    const getSQL =
      "SELECT username, salt, password FROM clients WHERE username = ?"

    conn.query(getSQL, [username], (salterr, saltresults, saltfields) => {
      console.log(salterr)
      if (saltresults.length > 0) {
        const salt = saltresults[0].salt
        const userpass = saltresults[0].password
        if (sha512(password + salt) === userpass) {
          // log them in
          const token = jwt.sign(
            { username: username, project: "clients" },
            config.get("secret")
          )
          res.json({
            token: token
          })
        } else {
          res.status(401).json({
            message: "Invalid user or password"
          })
        }
      }
    })
  })
})

module.exports = router
