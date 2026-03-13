export default function Ubicacion() {
  return (
    <section className="section" id="ubicacion" className="fade-in">
      <h2 className="section-title">Ubicación</h2>

      <div className="map-container" id="ubicacion">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.2372184747055!2d-99.27303292602589!3d19.402153881870746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2019b9764dbc1%3A0x9b6a0d62c5fb64e7!2sShining%20Salon%20%26%20Barber!5e0!3m2!1ses-419!2smx!4v1772653658547!5m2!1ses-419!2smx"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="horarios">
  <h3>Horarios</h3>
  <p>Lunes a Viernes: 10:00 AM – 8:00 PM</p>
  <p>Sábado: 9:00 AM – 7:00 PM</p>
  <p>Domingo: Cerrado</p>
</div>
      </div>
    </section>
  );
}