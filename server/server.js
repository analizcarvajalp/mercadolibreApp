const express = require('express')

const app = express()
const port = 3000
const axios = require('axios');

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

/*
LLamado de API para productos generales
*/
app.get('/getAPIResponse', (req, res) => {
    
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=:${req.query.search}&limit=4`)
        .then(function (response) {
            

            this.products = {
                "author":{
                    "name": "Ana",
                    "lastname": "Carvajal"
                },
                items: response.data.results.map((item) => {
                    
                        return {
                            "id": item.id || null,
                            "title": item.title,
                            "price": {
                                "currency": item.prices.prices[0].currency_id,
                                "amount": item.prices.prices[0].amount
                            },
                            "picture": item.thumbnail,
                            "condition": item.condition,
                            "free_shipping": item.shipping.free_shipping,
                            "address": item.address.city_name,



                        }
                    }
                )}
    
            res.status(200).send(products)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

})


/*
LLamado de API para productos especificos
*/
app.get('/getProduct/:id', (req, res) => {

    axios.get(`https://api.mercadolibre.com/items/${req.params.id}/description`)

        .then(function (response) {
            this.description = response.data;


        })

        .catch(function (error) {
            // handle error
            console.log(error);
        })
    axios.get(`https://api.mercadolibre.com/items/${req.params.id}`)

        .then(function (response) {

            this.data = response.data
            this.product = {
                "author":{
                    "name": "Ana",
                    "lastname": "Carvajal"
                },
                "item": [
                    {
                        "id": this.data.id,
                        "title": this.data.title,
                        "price":{
                            "currency": this.data.currency_id,
                            "amount": this.data.price
                        },
                        "picture": this.data.pictures[0].secure_url,
                        "condition": this.data.condition,
                        "free_shipping": this.data.shipping.free_shipping,
                        "sold_quantity": this.data.sold_quantity,
                        "description": this.description.plain_text

                    },
                ]
            };
            res.send(product)

        })

        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

})


app.listen(port, () => console.log(`App listening on port ${port}!`))