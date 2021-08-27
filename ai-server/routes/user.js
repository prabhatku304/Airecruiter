const express = require("express"),
  router = express.Router(),
  db = require("../models"),
  {
    UserLogin,
    UserRegister,
    UserProfile,
    UserProfileRequest,
    UserData,
    getUser
  } = require("../handlers/auth"),
  { UserRegisteredCompany } = require("../handlers/company"),
  { UserTestScore, UserTestStatus } = require("../handlers/score");

router.post("/user/register", UserRegister);
router.post("/user/login", UserLogin);
router.get("/user", getUser);

router.get("/user/:id", UserData);
router.get("/user/:user_id/test/:c_id/status", UserTestStatus);
router.post("/user/test/score", UserTestScore);

router.put("/user/:id/profile", UserProfile);
router.get("/user/:id/profile", UserProfileRequest);
router.get("/user/:id/registered", UserRegisteredCompany);
router.delete("/user/:id/delete", async (req, res, next) => {
  try {
    let user = await db.User.findByIdAndRemove(req.params.id);
    await user.save();
    res.status(200).json("done");
  } catch (err) {
    return next({
      status: 404,
      message: err.message,
    });
  }
});

// router.get('/testing', async (req,res, next)=>{
//     try{

//     }
// })

module.exports = router;
