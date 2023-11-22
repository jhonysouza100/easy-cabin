function Home() {
  return (
    <>
  <section className="conteiner">
    {" "}
    {/* El inicio de la pagina */}
    {/* <div className="wave" style={{ height: 150, overflow: "hidden" }}>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}
      >
        <path
          d="M-8.17,87.34 C285.83,178.13 336.05,-25.14 568.00,159.38 L498.59,157.41 L0.00,150.00 Z"
          style={{ stroke: "none", fill: "#18171D" }}
        />
      </svg>
    </div> */}
    {/* <div class="title">
      <h1 class="title__h1">¡Descubre un mundo de comodidad y emoción con nuestro servicio de traslado turístico!</h1>
      <p class="title__p"><strong>Traslados Portillo</strong>, nos enorgullece ofrecer una experiencia de viaje única y conveniente 
      para todos los amantes del turismo y la aventura. Nuestro compromiso es brindarte un servicio de <strong>Traslado VIP</strong>
      excepcional, acompañado de paquetes de traslados turísticos llenos de ofertas irresistibles.</p>                         
  </div> */}
  </section>
  <section className="container">
    <h1 className="about-us">¿Qué nos hace especiales?</h1>
    <ul>
      <li className="about-us__li" />
      <strong>Comodidad Inigualable:</strong> Olvídate de las preocupaciones de
      transporte durante tus viajes. Nuestros vehículos cómodos y seguros te
      llevarán a tu destino de manera rápida y eficiente.
      <li className="about-us__li">
        <strong>Experiencia Turística Personalizada:</strong> No somos solo un
        servicio de taxi, somos tus guías locales. Te ofrecemos paquetes
        turísticos adaptados a tus intereses, para que disfrutes al máximo de
        cada lugar que visites.
      </li>
      <li className="about-us__li">
        <strong>Ofertas Exclusivas:</strong> En{" "}
        <strong>Traslados Portillo</strong>, creemos que cada aventura debería
        ser acsequible. Por eso, hemos creado paquetes turísticos con descuentos
        especiales para que puedas explorar más por menos.
      </li>
      <li className="about-us__li">
        <strong>Atención al Cliente de Primera:</strong> Tu satisfacción es
        nuestra prioridad. Nuestro equipo amable y profesional está disponible
        las 24 horas para atender tus preguntas y necesidades.
      </li>
    </ul>
  </section>
  <section className="container3">
    <h1 className="top-destinations">Nuestros Destinos Populares:</h1>
    <ul>
      <li className="top-destinations__li">
        <strong>Cataratas del Iguazu:</strong> Las Cataratas del Iguazú: Un
        paraíso natural de majestuosas cascadas y exuberante selva tropical.
        Descubre la maravilla de la naturaleza en su máximo esplendor."
      </li>
      <li className="top-destinations__li">
        <strong>Cataratas Foz Iguazu:</strong> Las Cataratas de Foz de Iguazú:
        Naturaleza en su apogeo. ¡Experimenta la grandeza de las cataratas más
        impresionantes del mundo con vistas panorámicas inolvidables!
      </li>
      <li className="top-destinations__li">
        <strong>Parque das Aves:</strong> Donde te sumergirás en un mundo lleno
        de maravillosas aves exóticas, vibrantes mariposas y otros fascinantes
        animales. Este parque es un refugio para amantes de la naturaleza y una
        oportunidad única para conectarte con la belleza de la vida salvaje.{" "}
      </li>
      <li className="top-destinations__li">
        <strong>Ruinas de San Ignacio:</strong> Descubre un fascinante rincón
        histórico que te transporta a la época dorada de las misiones jesuíticas
        en Sudamérica. Estas majestuosas ruinas, reconocidas como Patrimonio de
        la Humanidad, te brindan la oportunidad de sumergirte en la apasionante
        historia colonial de la región
      </li>
      <li className="top-destinations__li">
        <strong>Hito Tres Fronteras:</strong> Un mágico lugar de encuentro,
        donde los majestuosos ríos Iguazú y Paraná se fusionan, creando la
        enigmática frontera entre Argentina, Brasil y Paraguay. Aquí, te
        aguardan vistas panorámicas de ensueño y la fascinante oportunidad de
        sumergirte en la rica cultura local. ¡Déjate sorprender por la maravilla
        de este lugar único!
      </li>
    </ul>
  </section>
  <section className="container4">
    <h1 className="how-it-works">Cómo Funciona:</h1>
    <ol>
      <li className="how-it-works__li">
        Reserva tu traslado turístico en línea o por teléfono.
      </li>
      <li className="how-it-works__li">
        Elije uno de nuestros emocionantes paquetes turísticos, o personaliza tu
        propio itinerario.
      </li>
      <li className="how-it-works__li">
        Nuestro conductor experto te recogerá puntualmente en el lugar y hora
        acordados.
      </li>
      <li className="how-it-works__li">
        ¡Embárcate en una aventura inolvidable!
      </li>
    </ol>
  </section>
  <section>
    <p>
      En <strong>Traslados Portillo</strong>, estamos comprometidos a hacer que
      tus viajes sean memorables y sin complicaciones. Deja que nosotros
      cuidemos de los detalles, para que tú te enfoques en disfrutar y crear
      recuerdos invaluables.
    </p>
    <p>
      No pierdas más tiempo buscando opciones de transporte y ofertas
      turísticas. ¡Contáctanos hoy mismo y comienza tu viaje con estilo y
      ahorros increíbles! Descubre el mundo con{" "}
      <strong>Traslados Portillo</strong>.
    </p>
  </section>
</>

  );
}

export default Home;