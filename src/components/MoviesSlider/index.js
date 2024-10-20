// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props

  const getActionMovies = eachItem => {
    if (eachItem.categoryId === 'ACTION') {
      return <MovieItem movieDetails={eachItem} key={eachItem.id} />
    }
    return null
  }

  const getComedyMovies = eachItem => {
    if (eachItem.categoryId === 'COMEDY') {
      return <MovieItem movieDetails={eachItem} key={eachItem.id} />
    }
    return null
  }

  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {moviesList.map(eachItem => getActionMovies(eachItem))}
        </Slider>
      </div>
      <h1 className="genre-title">Comedy Movies</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {moviesList.map(eachItem => getComedyMovies(eachItem))}
        </Slider>
      </div>
    </>
  )
}

export default MoviesSlider
