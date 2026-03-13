export default function Servicios(){

return(

<>

{/* MASAJES */}

<section className="services-container"id="servicios">

<h2 className="section-title" id="masajes">Masajes</h2>

<div className="services-grid">
<div className="card">

<div className="card-inner">

<div className="card-front">

<h3>Masaje relajante</h3>
<p>30 min $600 · 60 min</p>
<div className="price">$990</div>

</div>

<div className="card-back">

<p>
Masaje suave y envolvente que reduce el estrés,
mejora la circulación y genera una profunda sensación
de calma y equilibrio.
</p>

<a
href="https://wa.me/525549001520"
target="_blank"
rel="noreferrer"
>
<button className="book-btn">
Agendar cita
</button>
</a>

</div>

</div>

</div>


<div className="card">

<div className="card-inner">

<div className="card-front">

<h3>Reflexología podal</h3>
<p>40 minutos $600 · 60 min</p>
<div className="price">$600 - $990</div>

</div>

<div className="card-back">

<p>
Técnica terapéutica que estimula puntos reflejos en los pies para equilibrar órganos, reducir estrés y restaurar la energía vital.</p>

<a
href="https://wa.me/525549001520"
target="_blank"
rel="noreferrer"
>
<button className="book-btn">
Agendar cita
</button>
</a>

</div>

</div>

</div>
<div className="card">

<div className="card-inner">

<div className="card-front">

<h3>Piedras calientes</h3>
<p>1 hora 30 minutos</p>
<div className="price">$1490</div>

</div>

<div className="card-back">

<p>
Experiencia sensorial con piedras volcánicas que relaja profundamente los
músculos, armoniza la energía y mejora la circulación.
</p>

<a
href="https://wa.me/525549001520"
target="_blank"
rel="noreferrer"
>
<button className="book-btn">
Agendar cita
</button>
</a>

</div>

</div>

</div>

<div className="card">

<div className="card-inner">

<div className="card-front">

<h3>Masaje deportivo con ventosas</h3>
<p>60 minutos</p>
<div className="price">$1100</div>

</div>

<div className="card-back">

<p>Terapia especializada para recuperación muscular que mejora el flujo sanguíneo, libera toxinas y acelera la regeneración corporal.
</p>

<a
href="https://wa.me/525549001520"
target="_blank"
rel="noreferrer"
>
<button className="book-btn">
Agendar cita
</button>
</a>

</div>

</div>

</div>


<div className="card">

<div className="card-inner">

<div className="card-front">

<h3>Masaje tailandés</h3>
<p>1 hora 20 minutos</p>
<div className="price">$1500</div>

</div>

<div className="card-back">

<p>Técnica ancestral que combina estiramientos y presión corporal para liberar
      bloqueos energéticos y revitalizar todo el cuerpo.
</p>

<a
href="https://wa.me/525549001520"
target="_blank"
rel="noreferrer"
>
<button className="book-btn">
Agendar cita
</button>
</a>

</div>

</div>

</div>



</div>
</section>


{/* FACIALES */}

<section className="services-container" id="faciales">

<h2 className="section-title">Faciales</h2>

<div className="services-grid">

<div className="card">
<h3>Antiacné con extracción profunda</h3>
<p>Dermoabrasión</p>
<div className="price">$1200</div>
</div>

<div className="card">
<h3>Hidratante con masaje</h3>
<p>Piel madura</p>
<div className="price">$1200</div>
</div>

<div className="card">
<h3>Hidratante exprés</h3>
<p>Ultrasonido</p>
<div className="price">$800</div>
</div>

<div className="card">
<h3>Limpieza profunda</h3>
<p>Skin y dermoabrasión</p>
<div className="price">$1300</div>
</div>

<div className="card">
<h3>Lifting facial</h3>
<p>Radiofrecuencia</p>
<div className="price">$1300</div>
</div>

</div>

<p style={{marginTop:"15px",fontSize:"14px",color:"#555"}}>
Cada tratamiento facial incluye masaje de pies de cortesía.
</p>

</section>


{/* PAQUETES */}

<section className="services-container" id="paquetes">

<h2 className="section-title">Paquetes</h2>

<div className="services-grid">

<div className="card">
<h3>3 sesiones masaje relajante</h3>
<p>60 minutos cada sesión</p>
<div className="price">$3100</div>
</div>

<div className="card">
<h3>3 sesiones masaje descontracturante</h3>
<p>60 minutos cada sesión</p>
<div className="price">$3400</div>
</div>

<div className="card">
<h3>3 sesiones reflexología podal</h3>
<p>30 minutos cada sesión</p>
<div className="price">$2100</div>
</div>

<div className="card">
<h3>Paquete facial limpieza profunda</h3>
<p>3 sesiones</p>
<div className="price">$3200</div>
</div>

<div className="card">
<h3>Paquete hidratante piel madura</h3>
<p>3 sesiones</p>
<div className="price">$3200</div>
</div>

<div className="card">
<h3>Paquete lifting facial</h3>
<p>3 sesiones</p>
<div className="price">$3400</div>
</div>

</div>

</section>


<div className="promo-center">

<a
href="#"
className="promo-trigger"
onClick={(e)=>{
e.preventDefault()
openPromo()
}}
>
Ver promociones ✨
</a>

</div>

</>

)

}