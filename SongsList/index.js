import {RiDeleteBin7Line} from 'react-icons/ri'
import './index.css'

const SongsList = props => {
  const {itemDetails, deleteSong} = props
  const {imageUrl, name, genre, duration, id} = itemDetails

  const onCLickDelete = () => {
    deleteSong(id)
  }

  return (
    <li className="music-list-items">
      <div className="auto">
        <div>
          <img src={imageUrl} alt="track" className="track" />
        </div>
        <div className="a-x">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="a-z">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="button"
          onClick={onCLickDelete}
          testid="delete"
        >
          <RiDeleteBin7Line className="icon" />
        </button>
      </div>
    </li>
  )
}

export default SongsList
