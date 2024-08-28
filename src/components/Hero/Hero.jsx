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
            <img src='./assets/vscode.webp' alt='' />
          </div>
          <img src='./assets/img/background.webp' alt='' />
        </div>
        <div>
          <div className='tech-icon'>
            <img src='assets/html.webp' alt='' />
          </div>
          <div className='tech-icon'>
            <img src='assets/css3.webp' alt='' />
          </div>
          <div className='tech-icon'>
            <img src='assets/javascript.webp' alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}
