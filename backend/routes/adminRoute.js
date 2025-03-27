import express from 'express'
import { loginAdmin } from '../controllers/adminController.js'


const adminRouter = express.Router()

// adminRouter.post("/registera", registerAdmin)
adminRouter.post("/logina", loginAdmin)

export default adminRouter;