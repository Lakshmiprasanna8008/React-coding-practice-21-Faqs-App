// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: true}

  plus = () => {
    this.setState(prevSate => ({isActive: !prevSate.isActive}))
  }

  render() {
    const {listDetails} = this.props
    const {answerText, questionText} = listDetails
    const {isActive} = this.state
    return (
      <li>
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" onClick={this.plus}>
            {isActive ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            )}
          </button>
        </div>
        {!isActive ? (
          <>
            <hr />
            <p>{answerText}</p>
          </>
        ) : null}
      </li>
    )
  }
}

export default FaqItem
