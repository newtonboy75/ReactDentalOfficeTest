import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import router from './router'
import { api_limiter } from './middlewares'

const PORT = 3001
const app = express()
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',    
    credentials: true,
    optionsSuccessStatus: 200,
}))

app.use(compression())

app.set("trust proxy", 1)
app.use(bodyParser.json())
app.use(api_limiter)


app.use('/', router())
const server = http.createServer(app)

server.listen(PORT, () => {
    console.log('Server running on port', PORT)
})



