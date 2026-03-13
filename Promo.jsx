import { useEffect, useState } from "react";

function Promo() {
  const [visible, setVisible] = useState(false);
  const [shown, setShown] = useState(false);

  // ABRIR DESDE BOTÓN
  useEffect(() => {
    const trigger = document.querySelector(".promo-trigger");
    if (!trigger) return;

    const handleClick = () => {
      setVisible(true);
      document.body.style.overflow = "hidden";
    };

    trigger.addEventListener("click", handleClick);

    return () => {
      trigger.removeEventListener("click", handleClick);
    };
  }, []);

  // ABRIR POR SCROLL
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("masajes");
      if (!section || shown) return;

      const rect = section.getBoundingClientRect();

      if (rect.top < window.innerHeight / 1.3) {
        setVisible(true);
        setShown(true);
        document.body.style.overflow = "hidden";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shown]);

  const closePromo = () => {
    setVisible(false);
    document.body.style.overflow = "auto";
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "promo-overlay") {
      closePromo();
    }
  };

  if (!visible) return null;

  return (
    <div id="promo-overlay" onClick={handleOverlayClick}>
      <div className="promo-popup">
        <button className="promo-close" onClick={closePromo}>
          ×
        </button>

        <h2>Promociones de Marzo</h2>

        <p className="valentine-text">
          ✨ Especial de Bienestar de Primavera ✨
        </p>

        {/* PROMO 1 */}
        <div className="promo-item">
          <h3>Facial Limpieza Profunda</h3>
          <div className="promo-desc">+ Masaje de espalda</div>
          <div className="promo-price">$1,200</div>
          <a
            href="https://wa.me/525549001520?text=Hola%20me%20interesa%20la%20promocion%20Facial%20Limpieza%20Profunda%20de%20Marzo."
            target="_blank"
            rel="noopener noreferrer"
            className="promo-btn"
          >
            Me interesa
          </a>
        </div>

        {/* PROMO 2 */}
        <div className="promo-item">
          <h3>3 Masajes Relajantes</h3>
          <div className="promo-price">$2,600</div>
          <a
            href="https://wa.me/525549001520?text=Hola%20me%20interesa%203%20Masajes%20Relajantes%20de%20Marzo."
            target="_blank"
            rel="noopener noreferrer"
            className="promo-btn"
          >
            Me interesa
          </a>
        </div>

        {/* PROMO 3 */}
        <div className="promo-item">
          <h3>3 Sesiones Masaje Podal</h3>
          <div className="promo-price">$1,860</div>
          <a
            href="https://wa.me/525549001520?text=Hola%20me%20interesa%203%20Sesiones%20de%20Masaje%20Podal%20de%20Marzo."
            target="_blank"
            rel="noopener noreferrer"
            className="promo-btn"
          >
            Me interesa
          </a>
        </div>

        {/* PROMO 4 */}
        <div className="promo-item">
          <h3>Facial + Masaje de Espalda</h3>
          <div className="promo-price">$1,200</div>
          <a
            href="https://wa.me/525549001520?text=Hola%20me%20interesa%20Facial%20%2B%20Masaje%20de%20Espalda%20de%20Marzo."
            target="_blank"
            rel="noopener noreferrer"
            className="promo-btn"
          >
            Me interesa
          </a>
        </div>

      </div>
    </div>
  );
}

export default Promo;