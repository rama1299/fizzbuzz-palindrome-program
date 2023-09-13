import { Request, Response, NextFunction } from "express";
import palindrome from "../helpers/palindrome";

async function displayPalindrome(req: Request, res: Response, next: NextFunction) {
    try {
        const { kata } = req.body

        if (!kata) {
            throw { name: "IncompleteData" }
        }

        if (typeof kata !== 'string') {
            throw { name: "InvalidDataType" };
        }

        if (!palindrome(kata)) {
            return res.status(400).json({ error: `kata ${kata} bukan merupakan palindrome.` })
        }

        res.status(200).json({ message: ` kata ${kata} merupakan palindrome.` })

    } catch (error) {
        next(error)
    }
}

export default displayPalindrome