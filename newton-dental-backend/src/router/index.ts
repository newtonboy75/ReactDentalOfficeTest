import express from 'express'
import users from './users'
import auth from './auth'
import dentists from './dentists'
import appointments from './appointments'

const router = express.Router()

export default (): express.Router => {
    auth(router)
    users(router)
    dentists(router)
    appointments(router)
    return router
}