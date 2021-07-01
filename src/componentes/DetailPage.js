import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Home from '../componentes/Home'
/*
fetch a API de productos detallados
*/
const DetailPage = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        GetDatos().then();
    }, []);
    const {id} = useParams();
    const productos = id;

    const GetDatos = async () => {
        const URL = "http://localhost:3000/getProduct/";
        const response = await fetch(URL + `${productos}`);
        const {item} = await response.json();

        console.log(item);
        const Data = item.map((data) => {
            return {
                id: data.id,
                condition: data.condition,
                title: data.title,
                img: data.picture,
                description: data.description,
                soldQuantity: data.sold_quantity,
                price: data.price.amount,
            };
        });
        setProduct(Data);
    };

    return (
        <div>
            <Home/>
            {product.map((item) => (
                <div className="detail-product container">

                    <div className="flex row">
                        <div className="detail-product__img-container">
                            <img src={item.img}/>
                        </div>
                        <div className="detail-product__details">
                           <div className="detail-product__quantity">
                           {item.condition === 'new'
                            && <span>Nuevo</span>
                            } - <span>{item.soldQuantity} Vendidos</span>
                           </div>
                            <h1>{item.title}</h1>
                           <span className="detail-product__price">$ {item.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}</span>
                           <span className="decimals">00</span>
                            <br/>
                            <button className="detail-product__btn">Comprar</button>
                        </div>
                    </div>

                  <div className="detail-product__description">
                  <h2>Descripción del producto</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
            ))}
        </div>
    );
};

export default DetailPage;
