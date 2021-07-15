const express = require('express')
const getDates = require('./services/notion')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.static('public'))

app.get('/dates', async (req, res) => {
    const dates = await getDates()
    res.json(dates)
})

app.listen(PORT, console.log(`Server started on port ${PORT}`))

