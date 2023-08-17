const express = require("express");
const app = express();
require('dotenv').config()
const cookieParser = require("cookie-parser");
const CORS = require('cors');


// app.use(CORS({ origin: 'http://127.0.0.1:4000' }));


app.use(express.json());
app.use(cookieParser());




const userRoutes = require('./routes/userRoutes');
app.use('/user', CORS(), userRoutes);
const accountRoutes = require('./routes/accountRoutes');
app.use('/account', CORS(), accountRoutes);








const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server started On Port ${PORT}`);
})