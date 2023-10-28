const express = require('express');


import tarjetasController from '../controllers/tarjetacontroller.js';
const { findAll, create, findOne, remove, update } = tarjetasController

const router = express.Router(); 

router.get("/", findAll)
router.post("/", create)
router.get("/:id", findOne)
router.put("/", update)
router.delete("/:id", remove)

export default router;