const express = require("express")
const clientsRoutes = require("./routes/rest_register_login")
const freelancersRoutes = require("./routes/free_register_login")
const protectedRoutes = require("./routes/protected")
const jobRoutes = require("./routes/rest_view_jobpost")
const viewjobpostsRoutes = require("./routes/rest_make_jobpost")
const restaurantprofileRoutes = require("./routes/restaurantprofile")
const freelancerprofileRoutes = require("./routes/freelancerprofile")
const viewjobsRoutes = require("./routes/free_alljobs")
const interestedfreeRoutes = require("./routes/interestedfree")
const expressjwt = require("express-jwt")
const config = require("config")

const app = express()
const port = 3001
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", clientsRoutes)
app.use("/api", freelancersRoutes)
app.use("/api", jobRoutes)
app.use("/api", viewjobpostsRoutes)
app.use("/api", restaurantprofileRoutes)
app.use("/api", freelancerprofileRoutes)
app.use("/api", viewjobsRoutes)
app.use("/api", interestedFreeRoutes)
app.use("/api", expressjwt({ secret: config.get("secret") }), protectedRoutes)

app.use(function(req, res, next) {
  next(createError(404))
})

app.use(function(err, req, res, next) {
  console.log(err)
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}
})

app.use("/api", clientsRoutes)
app.use("/api", freelancersRoutes)
app.use("/api", expressjwt({ secret: config.get("secret") }), protectedRoutes)

app.use(function(req, res, next) {
  next(createError(404))
})
app.use(function(err, req, res, next) {
  console.log(err)
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}
  res.status(err.status || 500)
  res.json({
    status: err.status,
    error: err
  })
})

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
