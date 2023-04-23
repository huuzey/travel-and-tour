const {
  getuser,
  deleteuser,

  updateuser,
  getsingleuser,
} = require("../controllers/usercontroller");
const { verifyuser, verifyadmin } = require("../utils/verifytoken");

const router = require("express").Router();
router.get("/:id", getsingleuser);
router.put("/:id", updateuser);
router.delete("/:id", deleteuser);
router.get("/", getuser);

module.exports = router;
