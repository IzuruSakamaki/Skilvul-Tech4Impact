import express from "express"
import { Index, IndexOne, Store, Update, Delete } from "../controllers/Hewan.js"
import { Logger } from "../middleware/Middleware-Logger.js"
import { Post_Checker } from "../middleware/Middleware-Post-Checker.js"


const router = express.Router()

//Animal
router.get('/hewan', Logger, Index)
router.get('/hewan/:id', Logger, IndexOne)
router.post('/hewan', Logger, Post_Checker, Store)
router.put('/hewan/:id', Logger, Update)
router.delete('/hewan/:id', Logger, Delete)

export default router