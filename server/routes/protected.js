const router = require("express").Router()

router.get("/shift", (req, res, next) => {
  res.json({
    shift: "freelancer"
  })
})

module.exports = router
