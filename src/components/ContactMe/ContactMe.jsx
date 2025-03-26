import { ContactForm } from './ContactForm/ContactForm'
import { ContactInfoCard } from './ContactInfoCard/ContactInfoCard'
import './ContactMe.css'

export const ContactMe = () => {
  return (
    <section className='contact-container' id='contact'>
      <h5>Contactos</h5>
      <div className='contact-content'>
        <div style={{ flex: 1 }} className='contact-info-grid'>
          <ContactInfoCard
            iconUlr='./assets/mail.webp'
            text='👉 Enviame un correo'
            link='mailto:antonioo.rivera24@hotmail.com'
          />
          <ContactInfoCard
            iconUlr='./assets/whatsapp.webp'
            text='👉 Mi WhatsApp'
            link='https://wa.me/593962292245'
          />
          <ContactInfoCard
            iconUlr='./assets/linkedin.webp'
            text='👉 Mi LinkedIn'
            link='https://www.linkedin.com/in/antonio-rivera-ibarra-1b93b6269'
          />
          <ContactInfoCard
            iconUlr='./assets/github.webp'
            text='👉 Mi GitHub'
            link='https://github.com/AntRiv08'
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
