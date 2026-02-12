import express, { json } from "express"
import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'


const prisma = new PrismaClient()

export default prisma;

const app = express()

app.use(express.json())
app.use(cors())


app.get('/users', async (req, res) => {

    const users = await prisma.user.findMany()


    res.status(200).json(users)
})

app.post('/users', async (req, res) => {

    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(201).json(user)
})


app.put('/users/:id', async (req, res) => {

    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(200).json(user)
})


app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: 'usuário deletado com sucesso!' })
})


app.listen(3000)