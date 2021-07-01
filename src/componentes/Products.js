import React, {useEffect, useState} from 'react'
import IndividualProducts from './IndividualProducts';
import GetData from "../helper/GetData";


const Products = ({products}) => {
// 
    const [productList, setProductList] = useState([])

    useEffect(() => {
            GetData(products)
             .then(data => setProductList(data))
    }, [products])


    return (
        <div className="container">


            {
                productList.map(product => (
                    <>

                        <IndividualProducts
                            key={product.id}

                            {...product} />
                    </>


                ))
            }
        </div>
    )
}


export default Products