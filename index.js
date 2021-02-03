const express = require('express')
const app = express()
const postCont = require('./controller/post-controller')

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

// routers



app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log(`PORT: ${app.get('port')} `)
})
