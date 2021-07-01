import {useState} from 'react';
import Submit from '../componentes/Submit'
import Products from '../componentes/Products'
import '../assets/App.scss'

const Home = () => {

    const [product, setProduct] = useState('')
    
    return (
        <>

            <Submit setProduct={setProduct}/>
            <Products
                products={product}/>
        </>
    )
}

export default Home;