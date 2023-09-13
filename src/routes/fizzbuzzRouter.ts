import express from 'express'
import displayFizzbuzz from '../controllers/fizzbuzzController'

const router = express.Router()

router.post("/fizzbuzz", displayFizzbuzz)

export default router