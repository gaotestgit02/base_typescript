import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/api/documents', async (req: Request, res: Response) => {
  res.send('hello world')
})

export { router as IndexRouter }
