import express from 'express'
const router = express.Router()

import fizzbuzzRouter from './fizzbuzzRouter'
import palindromeRouter from './palindromeRouter'

router.use(fizzbuzzRouter)
router.use(palindromeRouter)

export default router