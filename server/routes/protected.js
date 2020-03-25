const router = require("express").Router()

router.get("/shift", (req, res, next) => {
  res.json({
    shift: "freelancer"
  })
  console.log(shift)
})

module.exports = router
