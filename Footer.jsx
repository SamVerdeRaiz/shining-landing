function Footer() {
  return (
    <footer className="fade-in" id="contacto"  >
      <p>Agenda tu cita</p>

      <p>
        WhatsApp:
        <a
          href="https://wa.me/5215549001520"
          target="_blank"
          rel="noopener noreferrer"
        >
          55 49 00 15 20
        </a>
        {" · "}
        <a
          href="https://wa.me/5215523459805"
          target="_blank"
          rel="noopener noreferrer"
        >
          55 23 45 98 05
        </a>
      </p>

      <p>Shining Salon & Barber</p>

      <div className="social-icons">
        <a
          href="https://www.facebook.com/profile.php?id=61556599434150"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>

        <a
          href="https://www.instagram.com/shiningsalonmx/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a
          href="https://www.tiktok.com/@shining.salnbarbe"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <i className="fa-brands fa-tiktok"></i>
        </a>

        <a
          href="mailto:shining.salon.barber.2024@gmail.com"
          aria-label="Correo"
        >
          <i className="fa-regular fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;