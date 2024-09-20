import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
import { useState,useEffect } from 'react';


function Freebook() {

  const[book,setBook]=useState([])

  useEffect(()=>{
    const getBook=async ()=>{
      try {
        const res=await axios.get("http://localhost:4200/book")
        const data=res.data.filter((val)=>val.category==="Free")
        console.log(data)
        setBook(data)
      } catch (error) {
        console.log("error",error)
      }
    }
    getBook()
  },[])


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='font-semibold text-xl pb-2 '>Free Offered Courses</h1>
        </div>
    
    <div>
    <Slider {...settings}>
        {book.map((val)=>{
            return(
                <Cards data={val} key={val.id} />
            )
        })}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook