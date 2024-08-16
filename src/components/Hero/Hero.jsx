import './Hero.css'

export const Hero = () => {
  return (
    <section className='hero-container' id='hero'>
      <div className='hero-content'>
        <h2>Programador Backend</h2>
        <p>
          Soy un programador backend, apasionado por crear soluciones robustas y
          escalables con tecnologías como C#, PHP con Laravel, entre otras.
        </p>
        <a
          className='download-btn'
          href='./assets/downloads/Hojadevida.pdf'
          download='Hojadevida'
        >
          Hoja de Vida
        </a>
      </div>
      <div className='hero-img'>
        <div>
          <div className='tech-icon'>
            <img src='./assets/vscode.png' alt='' />
          </div>
          <img src='./assets/img/background.jpg' alt='' />
        </div>
        <div>
          <div className='tech-icon'>
            <img src='assets/html.png' alt='' />
          </div>
          <div className='tech-icon'>
            <img src='assets/css3.png' alt='' />
          </div>
          <div className='tech-icon'>
            <img src='assets/javascript.png' alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}
