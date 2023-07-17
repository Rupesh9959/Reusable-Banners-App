import './index.css'

const BannerCardItem = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails
  return (
    <li className={`${className} reusable-banners-item-container`}>
      <h1 className="reusable-banners-item-heading">{headerText}</h1>
      <p className="reusable-banners-item-para">{description}</p>
      <button className="reusable-banners-item-button" type="button">
        Show More
      </button>
    </li>
  )
}

export default BannerCardItem
