// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div className="prime-video-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-img"
      />
      <h1 className="genre-title">Action Movies</h1>
      <MoviesSlider moviesList={moviesList} />
    </div>
  )
}

export default PrimeVideo
