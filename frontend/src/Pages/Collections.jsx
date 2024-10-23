import React, { useContext, useEffect, useState } from 'react'
import Title from "../Components/Title"
import ProductItems from "../Components/ProductItems"
import { ShopContext } from '../Context/ShopContext';
import { IoIosArrowDropdown } from "react-icons/io";

const Collections = () => {

  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(true)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState("Relevant")

  const toggleCategory = (event) => {
    if (category.includes(event.target.value)) {
      setCategory(category => category.filter(value => value !== event.target.value))
    }
    else {
      setCategory(category => [...category, event.target.value])
    }
  }

  const toggleSubCategory = (event) => {
    if (subCategory.includes(event.target.value)) {
      setSubCategory(subCategory => subCategory.filter(value => value !== event.target.value))
    }
    else {
      setSubCategory(subCategory => [...subCategory, event.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter(value => value.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(value => category.includes(value.category))
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(value => subCategory.includes(value.subCategory))
    }
    setFilterProducts(productsCopy)
  }

  const sortProducts = () => {
    let filterProductsCopy = filterProducts.slice()

    switch (sortType) {
      case "Low-High":
        setFilterProducts(filterProductsCopy.sort((a, b) => a.price - b.price))
        break;

      case "High-Low":
        setFilterProducts(filterProductsCopy.sort((a, b) => b.price - a.price))
        break;

      default:
        applyFilter()
        break;
    }
  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch, products])

  useEffect(() => {
    sortProducts()
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center gap-2'>FILTERS <IoIosArrowDropdown onClick={() => setShowFilter(!showFilter)} style={{ cursor: "pointer" }} className={`h-3 sm:hidden ${showFilter ? "rotate-180" : ""}`} /></p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'><input onChange={toggleCategory} className='w-3' type="checkbox" value={"Men"} />Men</p>
            <p className='flex gap-2'><input onChange={toggleCategory} className='w-3' type="checkbox" value={"Women"} />Women</p>
            <p className='flex gap-2'><input onChange={toggleCategory} className='w-3' type="checkbox" value={"Kids"} />Kids</p>
          </div>
        </div>

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>SUB CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'><input onChange={toggleSubCategory} className='w-3' type="checkbox" value={"Shoes"} />Shoes</p>
            <p className='flex gap-2'><input onChange={toggleSubCategory} className='w-3' type="checkbox" value={"Clothing"} />Clothing</p>
            <p className='flex gap-2'><input onChange={toggleSubCategory} className='w-3' type="checkbox" value={"Accessories"} />Accessories</p>
            <p className='flex gap-2'><input onChange={toggleSubCategory} className='w-3' type="checkbox" value={"Sports"} />Sports</p>
          </div>
        </div>
      </div>

      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select onChange={(event) => setSortType(event.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="" selected disabled>Sort By</option>
            <option value="Relevant">Relevant</option>
            <option value="Low-High">Low-High</option>
            <option value="High-Low">High-Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((value, index) => {
              return (
                <ProductItems key={index} name={value.name} id={value._id} price={value.price} image={value.image} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Collections