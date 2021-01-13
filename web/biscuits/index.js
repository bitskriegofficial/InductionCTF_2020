const express = require('express')
const app = express();
const cookieParser = require("cookie-parser");

const port = 5000


app.use(cookieParser())

app.get('/',(req,res) => {


	if(!req.cookies.user){
		res.cookie('user',"");
		res.send('<h3> You didn\'t give any cookies for user </h3> \n <!--- set in the name of user ---> ')

	}
	else if(req.cookies.user != "admin"){
		res.send('<h4> Warmer! But you didn\'t get any cookies for admin')
	}
	else if(req.cookies.user === "admin"){

		res.send('Here\'s your flag: BITSCTF{N0W_U_KN0W_H0W_T0_S3T_C00K1ES}')
	}
})


app.listen(port);