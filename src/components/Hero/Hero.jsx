import './Hero.css'

export const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='hero-content'>
        <h2>Programador Backend</h2>
        <p>
          Soy un programador backend, apasionado por crear soluciones robustas y
          escalables con tecnologías como C#, PHP con Laravel, entre otras.
        </p>
      </div>
      <div className='hero-img'>
        <div>
          <div className='tech-icon'>
            <img src='./assets/NETcore.png' alt='' />
          </div>
          <img src='./assets/img/background.jpg' alt='' />
        </div>
        <div>
          <div className='tech-icon'>
            <img src='assets/CSharp.png' alt='' />
          </div>
          <div className='tech-icon'>
            <img src='assets/Laravel.png' alt='' />
          </div>
          <div className='tech-icon'>
            <img src='assets/PHP.png' alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}
