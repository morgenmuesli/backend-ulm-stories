let express = require('express')
let app = express()

app.listen(3000, () => {
    console.log('running on port 3000')
})

app.get('/', (req, res) => {
    res.json({
        message: 'Hello world!'
    })
})
