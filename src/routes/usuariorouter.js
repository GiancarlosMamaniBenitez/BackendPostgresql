const express = require('express');


import usuariosController from '../controllers/usuariocontroller.js';
const { findAll, create, findOne, remove, update } = usuariosController

const router = express.Router(); 

router.get("/", findAll)
router.post("/", create)
router.get("/:id", findOne)
router.put("/", update)
router.delete("/:id", remove)

export default router;