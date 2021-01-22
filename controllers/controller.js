/**
 * @file controller fos business logic
 * @author Daniela Cordoba <dacorac43@gmail.com>
 */

 //Load modules 

 let method = async(req, res) =>
 {
     try
     {
        return res.status(200).send();
     }
     catch(e)
     {
        return res.status(400).send({message: e.message});
     }
 }

 module.exports = {
    method
}