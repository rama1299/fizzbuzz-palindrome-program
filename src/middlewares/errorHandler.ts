import { Request, Response, NextFunction } from "express";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    switch (err.name) {
        case "IncorrectNumber":
            res.status(400).json({ error: 'Input harus berupa bilangan bulat positif.' });
            break
        case "IncompleteData":
            res.status(400).json({ error: "Data tidak lengkap." })
            break
        case "InvalidDataType":
            res.status(400).json({ error: "Tipe data tidak valid." })
            break
        default:
            res.status(500).json({ message: "Internal server error!" });
            break;
    }
}

export default errorHandler