// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <button
              type="button"
              className="close-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={14} />
            </button>
            <div className="video-container">
              <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
