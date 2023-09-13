import express from 'express'
import displayPalindrome from '../controllers/palindromeController'

const router = express.Router()

router.post("/palindrome", displayPalindrome)

export default router