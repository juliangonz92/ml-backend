/**
 * @file file server config
 * @author Daniela Cordoba <dacorac43@gmail.com>
 */

 //Import modules 
 const express = require('express'); //Server for NodeJS
 const cors = require('cors'); //Config CORS

 //Load routes
 const routes = require('./routes/routes');

//Create server express
const app = express();

 //Config CORS
const corsOptions = {
    exposedHeaders: ['X-Auth', 'X-Total-Pages','X-Current-Page', 'X-Total-Record', 'X-Page-Size', 'X-Next-Page','X-Prev-Page'],
    origin: '*',
    methods: ['GET','HEAD','POST','PUT','PATCH','DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 204
}

app.use(express.json());
app.use(cors(corsOptions));

//Config routes API REST
app.use('/api', routes);
app.use('/', (req,res) => res.status(200).json({'health': 'OK'}));
app.use('*', (req,res) => res.status(404).json({error: ' Not Found'}));

//PORT
const port = process.env.PORT || 3001;

//Launch server express
app.listen(port, () => {
    console.log(`listening app on port ${port}`);
})