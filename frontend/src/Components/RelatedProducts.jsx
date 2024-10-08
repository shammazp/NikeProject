import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'
import ProductItems from './ProductItems'

const RelatedProducts = ({ category, subCategory }) => {

    const { products } = useContext(ShopContext)
    const [related, setRelated] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice()
            productsCopy = productsCopy.filter((value) => category === value.category)
            productsCopy=productsCopy.filter((value)=>subCategory===value.subCategory)
            setRelated(productsCopy.slice(0,5))
        }
    }, [products])

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={"SIMILAR"} text2={"PRODUCTS"}/>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {related.map((value,index)=>{
                    return(
                        <ProductItems key={index} id={value._id} name={value.name} price={value.price} image={value.image}/>
                    )
                })}
            </div>
        </div>
    )
}

export default RelatedProducts