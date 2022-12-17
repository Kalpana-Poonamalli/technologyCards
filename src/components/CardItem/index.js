// Write your code here.
import './index.css'

const Cards = props => {
  const {cardItem} = props
  const {title, description, imgUrl, className} = cardItem

  return (
    <li className={className}>
      <div className="cards-container">
        <h1 className="card-heading">{title}</h1>
        <p className="card-para">{description}</p>

        <div className="image">
          <img src={imgUrl} alt={title} className="img" />
        </div>
      </div>
    </li>
  )
}

export default Cards
