import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    currentno: 0,
  }

  onDisplayDetails = () => {
    const {reviewsList} = this.props
    const {currentno} = this.state
    return reviewsList[currentno]
  }

  onIncrement = () => {
    const {reviewsList} = this.props
    const {currentno} = this.state
    if (currentno < reviewsList.length - 1) {
      this.setState({currentno: currentno + 1})
    }
  }

  onDecrement = () => {
    const {currentno} = this.state
    if (currentno > 0) {
      this.setState({currentno: currentno - 1})
    }
  }

  render() {
    const details = this.onDisplayDetails()
    const {imgUrl, username, companyName, description} = details
    return (
      <div className="bg-container">
        <h1>Reviews</h1>
        <div className="carousel-container">
          <button type="button" onClick={this.onDecrement} testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="details-container">
            <img src={imgUrl} alt={username} className="img" />
            <p>{username}</p>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <button type="button" onClick={this.onIncrement} testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
