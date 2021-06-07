const router = require("express").Router();
const controller = require("./plants.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

//TODO make the necessary changes to enable CORS for the entire router.

router
  .route("/:plantId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
