import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'
import ProductItems from './ProductItems'

const LatestCollections = () => {

    const {products}=useContext(ShopContext)

    const [latestProducts,setLatestProducts]=useState([])

    useEffect(()=>{
        setLatestProducts(products.slice(0,20))
    },[])

  return (
    <div className='my-10'>

        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>"Move to Zero: Future of Sport Starts Here"</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-6'>
            {
                latestProducts.map((value,index)=>{
                    return(
                        <ProductItems key={index} id={value._id} image={value.image} name={value.name} price={value.price}/>
                    )
                })
            }
        </div>

    </div>
  )
}

export default LatestCollections