
    const GetData = async(products) =>{
        
            const URL = 'http://localhost:3000/getAPIResponse'  
          const  response = await fetch(URL + `?search=${encodeURI(products)}`)
         
       
          const {items}= await response.json()
      
         

          const dataProducts = items.map(data =>{
              return{
                  id: data.id,
                  price: data.price.amount,
                  thumbnail: data.picture,
                  title: data.title,
                  address: data.address,
                  shipping: data.free_shipping,
                 
              }
          })
          console.log(dataProducts)
          return dataProducts
          }
    
    
    
          export default GetData