const express = require('express')
const app = express()

const port = 5000

app.get('/',(req,res) => {

	res.status(200).send('<h4> Nothing much to see here you need something to <u>POST</u> to /flag')
})

app.route('/flag')
.get((req,res) => {

	res.redirect('https://www.youtube.com/watch?v=ub82Xb1C8os')
})
.post((req,res) => {

	res.status(200).send('BITSCTF{W3LL_D0N3_P0ST1NG}')
})


app.listen(port)