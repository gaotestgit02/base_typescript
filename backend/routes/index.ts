import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

router.get('/api/documents', async (req: Request, res: Response) => {
  const companies = await prisma.company.findMany({})
  res.json(companies)
})

export { router as IndexRouter }
