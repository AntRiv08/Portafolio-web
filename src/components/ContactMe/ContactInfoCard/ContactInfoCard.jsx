import './ContactInfoCard.css'

export const ContactInfoCard = ({ iconUlr, text }) => {
  return (
    <div className='contact-details-card'>
      <div className='icon'>
        <img src={iconUlr} alt={text} />
      </div>
      <a>{text}</a>
    </div>
  )
}
