import express from 'express'

export default (router: express.Router) => {
    router.get('/dentists', (req, res) => {
        res.send('dentists here')
    })
}