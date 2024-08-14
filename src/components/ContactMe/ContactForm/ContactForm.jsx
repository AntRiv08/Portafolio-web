import { toast, Toaster } from 'sonner'
import './ContactForm.css'
import { BiCheck } from 'react-icons/bi'

export const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.append('access_key', 'd139969a-fb9e-47e3-9de2-50a562dcb7d7')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: json
    }).then((res) => res.json())

    if (res.success) {
      toast('Mensaje enviado Correctamente', {
        icon: <BiCheck style={{ color: 'green' }} />
      })
    }
  }
  return (
    <div className='contact-form-control'>
      <form onSubmit={onSubmit}>
        <div className='name-container'>
          <input
            type='text'
            name='fullname'
            placeholder='Nombre/s completo'
            required
          />
          {/* <input
            type='text'
            name='lastname'
            placeholder='Apellido/s'
          /> */}
        </div>
        <input type='email' name='email' placeholder='correo' required />
        <textarea
          type='text'
          name='message'
          placeholder='Mensaje'
          rows={3}
          required
        />
        <button>Enviar</button>
      </form>
      <Toaster theme='system' visibleToasts={3} richColors />
    </div>
  )
}
