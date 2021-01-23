/**
 * @file controller fos business logic
 * @author Daniela Cordoba <dacorac43@gmail.com>
 */

 //Load modules 
 const axios = require('axios');
 const config = require('../config.json');
//  const url = require('url');

let getItems = async(req, res) => 
{
   try
   {
     let headers = { Authorization: `Bearer ${config.API_KEY_ML}`};
   //   let params = { q: req.query.q };
     let service = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`, { headers: headers });
     let items = [];

     service.data.results.forEach(result => {
        let item = {
           id: result.id,
           title: result.title,
           price: {
               currency: result.currency_id,
               amount: result.price,
               decimals: 0
           },
           picture: result.thumbnail,
           condition: result.condition,
           free_shiping: result.shipping.free_shipping
        };

        items.push(item);
     })
     let response = {
         author: {
            name: 'Daniela',
            lastname: 'Cordoba'
         },
         categories: [],
         items: items
      }

     return res.status(200).send(response);
   }
   catch(err)
   {
      return res.status(400).send({message: err.message});
   }
}

let getItemById = async(req,res) =>
{
   try
   {
      let params= {id: req.params.id}
      let headers = { Authorization: `Bearer ${config.API_KEY_ML}`};
      let result = await axios.get(`https://api.mercadolibre.com/items/${req.params.id}`, params, { headers: headers });
      let result_description = await axios.get(`https://api.mercadolibre.com/items/${req.params.id}/description`, params, { headers: headers });

      let response = {
         author: {
            name: 'Daniela',
            lastname: 'Cordoba'
         },
         item: {
            id: result.data.id,
            title: result.data.title,
            price: {
               currency: result.data.currency_id,
               amount: result.data.price,
               decimals: 0
           },
           picture: result.data.thumbnail,
           condition: result.data.condition,
           sold_quatity: result.data.sold_quantity,
           description: result_description.data.plain_text
         }
      }

      return res.status(200).send(response);
   }
   catch(err)
   {
      return res.status(400).send({message: err.message});
   }
}

 module.exports = {
    getItems,
    getItemById
}