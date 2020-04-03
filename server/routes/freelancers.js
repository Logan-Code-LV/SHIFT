const express = require("express")
const router = express.Router()
const conn = require("./db")
const sha512 = require("js-sha512")
const randomString = require("../utils/randomstring")
const jwt = require("jsonwebtoken")
const config = require("config")

router.post("/registerfree", (req, res, next) => {
  const username = req.body.username
  const salt = randomString(20)
  const password = sha512(req.body.password + salt)
  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const jobposition = req.body.jobposition
  const qualifications = req.body.qualifications

  const checkSQL =
    "SELECT count(1) as count FROM freelancers WHERE username = ?"

  conn.query(checkSQL, [username], (err, results, fields) => {
    if (results[0].count > 0) {
      res.status(409).json({
        message: "username exists"
      })
    } else {
      const insertSql = `INSERT INTO freelancers (username, password, salt, firstname, lastname, jobposition, qualifications) 
      VALUES (?, ?, ?, ?, ?, ?, ?)`

      conn.query(
        insertSql,
        [
          username,
          password,
          salt,
          firstname,
          lastname,
          jobposition,
          qualifications
        ],
        (err1, results1, fields1) => {
          console.log(err1)
          res.json({
            message: "freelancer added successfully"
          })
        }
      )
    }
  })
})

router.post("/loginfree", (req, res, next) => {
  const username = req.body.username
  const password = req.body.password
  const getSQL =
    "SELECT username, salt, password FROM freelancers WHERE username = ?"
  conn.query(getSQL, [username], (salterr, saltresults, saltfields) => {
    const getSQL =
      "SELECT username, salt, password FROM freelancers WHERE username = ?"

    conn.query(getSQL, [username], (salterr, saltresults, saltfields) => {
      console.log(salterr)
      if (saltresults.length > 0) {
        const salt = saltresults[0].salt
        const userpass = saltresults[0].password
        if (sha512(password + salt) === userpass) {
          // log them in
          const token = jwt.sign(
            { username: username, project: "freelancers" },
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
