import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'


function Course() {

  const [book, setBook] = useState([])

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4200/book")
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log("error", error)
      }
    }
    
    getBook()

  }, [])


  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='pt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl '>We are delighted to have you <span className='text-pink-500'>here ! :)</span></h1>
          <p className='mt-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci laboriosam, commodi quis facere incidunt itaque culpa ipsa iusto nam suscipit dolore placeat porro asperiores veniam, necessitatibus eaque explicabo aut molestiae.</p>
          <Link to='/'>
            <button className='bg-pink-500 text-white hover:bg-pink-700 px-4 py-2 rounded-md duration-300 mt-6'>Back</button>
          </Link>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-10'>
          {book.map((val) => {
            return (

              <Cards key={val.id} data={val} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Course