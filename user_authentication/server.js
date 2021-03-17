const express = require('express');
const sequelize = require('./backend/utils/database');
const contentRoutes = require('./backend/routes/routes');

const app = express()
const port = process.env.PORT || 3000;


app.use(express.json({limit: '5mb'}));

app.use('/', contentRoutes);

sequelize.sync().then((res)=>{
  app.listen(port,'127.0.0.1', () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
}).catch((err)=>{
  console.log(err)
})