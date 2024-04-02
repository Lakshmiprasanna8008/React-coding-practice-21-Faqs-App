// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="whole-container">
      <div className="questions-container">
        <h1 className="main-heading">FAQs</h1>
        <ul>
          {faqsList.map(each => (
            <FaqItem listDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
