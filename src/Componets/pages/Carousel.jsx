import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export const Carbosel = () => {
    const images = [
      {url:  "https://www.pandotrip.com/wp-content/uploads/2015/07/Lake-Tekapo-by-Christian-Lim-740x493.jpeg"},
      {url:  "https://www.pandotrip.com/wp-content/uploads/2015/07/Lake-Tekapo-by-Daniel-Murray-740x485.jpeg"},
      {url:  "https://www.pandotrip.com/wp-content/uploads/2015/07/Carlsbad-by-T-Dingle-740x486.jpeg"},
      {url: "https://www.pandotrip.com/wp-content/uploads/2015/07/Carlsbad-by-Bill-Nichols-740x494.jpeg"},
      {url: "https://www.pandotrip.com/wp-content/uploads/2014/09/Top-10-Flowery-Fields-Carlsbad-Photo-by-Jodi-Newell-740x490.jpg"}
    ]
  return (
    <div className="carousel">
      <Carousel className='carlack' showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={6000}>
       {images.map(image => <img className="carousel-image" src={image.url} alt={'alt'} />)}
      </Carousel>
    </div>
  )
}
