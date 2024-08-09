import './Hero.css'

export const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='hero-content'>
        <h2>Programador Backend</h2>
        <p>
          Soy un programador backend apasionado por crear soluciones robustas y
          escalables. Me especializo en el desarrollo y mantenimiento de
          aplicaciones server-side, optimizando bases de datos y garantizando la
          eficiencia y seguridad de los sistemas. Mi enfoque se centra en
          ofrecer un código limpio y eficiente, asegurando que las aplicaciones
          puedan manejar grandes volúmenes de datos y tráfico con facilidad.
          Trabajo con tecnologías como C#, PHP con Laravel, entre otras, para
          construir infraestructuras sólidas que soporten experiencias digitales
          excepcionales.
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
