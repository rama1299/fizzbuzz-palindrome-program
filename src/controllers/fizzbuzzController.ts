import { Request, Response, NextFunction } from "express"
import fizzbuzz from "../helpers/fizzbuzz";

async function displayFizzbuzz(req: Request, res: Response, next: NextFunction) {
    try {
        const { angka } = req.body
        if (isNaN(angka) || angka <= 0) {
            throw { name: "IncorrectNumber" }
        }

        const result = fizzbuzz(angka)

        res.status(200).json({ fizzbuzz: result })
    } catch (error) {
        next(error)
    }
}

export default displayFizzbuzz