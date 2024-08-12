import './ContactForm.css'

export const ContactForm = () => {
  return (
    <div className='contact-form-control'>
      <form>
        <div className='name-container'>
          <input
            type='text'
            name='firstname'
            placeholder='Nombre/s'
          />
          <input
            type='text'
            name='lastname'
            placeholder='Apellido/s'
          />
        </div>
        <input
          type='email'
          name='email'
          placeholder='correo'
        />
        <textarea type='text' name='message' placeholder='Mensaje' rows={3} />
        <button>Enviar</button>
      </form>
    </div>
  )
}
