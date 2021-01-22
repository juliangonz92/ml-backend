/**
 * @file controller fos business logic
 * @author Daniela Cordoba <dacorac43@gmail.com>
 */

 //Load modules 
 const axios = require('axios');
 const config = require('../config.json');

 let getItems = async(req, res) => 
 {
    try
    {
       let headers = { Authorization: `Bearer ${config.API_KEY_ML}`};
       let params = { q: req.query.q };

       let service = await axios.get(`${config.ENDPOINT}${config.METHODS.SITES}/search`, params, { headers: headers });

       return res.status(200).send(service.data);
    }
    catch(err)
    {
       return res.status(400).send({message: err.message});
    }
 }

 module.exports = {
    getItems
}