//route file is use for the authentication
import express from 'express'
import { signup } from "../controllers/suth.controller.js"

const router = express.Router();

router.post("signup" , signup);

router.post('/login',login);

router.post('/logout',logout);

export default router