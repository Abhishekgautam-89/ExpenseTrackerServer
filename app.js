const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./model/model');
const app = express();
const cors = require('cors');
const getExpenseroute = require('./routes/expenseAdded')
// app.use('/',(req,res,next)=>{
//     res.send('<h3>server created</h3>')
// } )

app.use(bodyparser.json({extended:false}))
app.use(cors());
app.use('/',getExpenseroute);

sequelize.sync()
.then((result)=>{
    // console.log(result);
    app.listen(3000); 
})
.catch(err=>console.log(err));

