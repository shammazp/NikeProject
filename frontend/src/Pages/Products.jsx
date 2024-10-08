import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import RelatedProducts from '../Components/RelatedProducts';

const Products = () => {

  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((value) => {
      if (value._id === productId) {
        setProductData(value)
        setImage(value.image[0])
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((value, index) => {
                return (
                  <img onClick={() => setImage(value)} src={value} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                )
              })
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt="" />
          </div>
        </div>
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStarHalf />
            <p className='pl-2'>264</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}.00</p>
          <p className='mt-5 text-gray-500 md:w-3/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((value, index) => {
                return (
                  <button onClick={() => setSize(value)} className={`border py-2 px-4 bg-gray-100 ${value === size ? "border-gray-700" : ""}`} key={index}>{value}</button>
                )
              })}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Add To Cart</button>
          <hr className='mt-8 sm:w-[4/5]' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product.</p>
            <p>COD Available On This Product.</p>
            <p>Easy Return And Exchange Policy Within 7 Days.</p>
          </div>
        </div>
      </div>

      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (209)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Find the perfect styles easily on our website. Whether it is for a casual day out or a special event, browse through our collection of trendy products. Use filters for style, color, and size, and enjoy fast delivery with secure payment options.</p>
          <p>Explore a wide range of products for any occasion. From casual to formal, our site offers easy navigation, personalized suggestions, and quick checkout. Plus, we provide hassle-free returns and 24/7 customer support for a smooth shopping experience.</p>
        </div>
      </div>

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  )
    : <div className='opacity-0'></div>

}

export default Products