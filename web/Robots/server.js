const express = require('express')
const app = express()

const port = 5000

app.get('/',(req,res) => {

	res.status(200).send('<h4> Do you actually think robots are gonna take over the world? <!-- check out /robots.txt also check out google\'s after you\'re done with the challenge -->')
})

app.get('/robots.txt',(req,res) => {
	res.type('text/plain')
    res.send("user-agent:something \nallow: /flag");})
app.get('/flag',(req,res) => {

	res.status(200)
	console.log(req.headers['user-agent']);

	if(req.headers['user-agent'] === "something"){
		res.send('BITSCTF{H3LL0_FR13ND}')
	}
	else{
		res.send('You aren\'t using something')
	}
})

app.listen(port)