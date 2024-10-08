import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'
import ProductItems from './ProductItems'

const BestSeller = () => {

    const {products}=useContext(ShopContext)

    const [bestSeller,setBestSeller]=useState([])

    useEffect(()=>{
        const bestProducts=products.filter((value)=>(value.bestSeller===true))
        setBestSeller(bestProducts.slice())
    },[products])

  return (
    <div className='my-10'>

        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>"Engineered for Champions, Loved by All"</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-6'>
            {
                bestSeller.map((value,index)=>{
                    return(
                        <ProductItems key={index} id={value._id} image={value.image} name={value.name} price={value.price}/>
                    )
                })
            }
        </div>

    </div>
  )
}

export default BestSeller