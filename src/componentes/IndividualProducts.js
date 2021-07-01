import React from 'react'

import ShippingImg from '../assets/images/ic_shipping.png'
import {withRouter} from "react-router-dom";

/*
LLamado de API para productos de la sección general
*/

const IndividualProducts = ({id, price, thumbnail, title, address, shipping,history}) => {


    return (


        <div className="general--Product" key={id}>


            <div className="flex">


                <div>
                    <img className="general--Product_thumbnail" alt={title} src={thumbnail}/>
                </div>
                <div>

                    <div className="flex w-100">
                        <p class="general--Product_price">${price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}</p>
                        {
                            (shipping == true) &&
                            <img className="ShippingImg" src={ShippingImg}/>
                        }
                    </div>
                    <div>
                        <a  onClick={()=>{
                            history.push(`./items/${id}`, {
                                data:{
                                    id, price, thumbnail, title, address, shipping
                                }
                            })
                        }} >
                            <h4 className="general--Product_title">{title}</h4>

                        </a>
                    </div>
                </div>
                <div className="w-100 txt-right">
                    <p className="general--Product_address">{address}</p>
                </div>
            </div>


        </div>

    )
}


export default   withRouter(IndividualProducts)
