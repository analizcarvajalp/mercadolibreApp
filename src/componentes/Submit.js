import React, {useState} from 'react'
import logoML from '../assets/images/Logo_ML.png'
import search from '../assets/images/ic_Search.png'



const Submit = ({setProduct}) => {

    const [inputText, setInputText] = useState('')

    const inputValue = (e) => {
        setInputText(e.target.value)

    }

    const formSubmit = (e) => {
        e.preventDefault()
        
        if (inputText.trim().length > 3) {
            setProduct(inputText)
        }
    }

    return (

        <div className="search-container">
            <div className="search-content">
                <img className="logo" alt="Logo" src={logoML}/>
                <form onSubmit={formSubmit}>
                    <div className="input-container">
                        <input className="input-field" value={inputText} placeholder="Nunca dejes de buscar" type="text"
                               onChange={inputValue}/>
                        <button id="search-btn"><img src={search} onClick={formSubmit} alt="Buscador"/></button>

                    </div>

                </form>
            </div>
        </div>

    )

}


export default Submit
