import './ContactInfoCard.css'

export const ContactInfoCard = ({ iconUlr, text, link }) => {
  return (
    <div className='contact-details-card'>
      <div className='icon'>
        <img src={iconUlr} alt={text} />
      </div>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        {text}
      </a>
    </div>
  )
}
