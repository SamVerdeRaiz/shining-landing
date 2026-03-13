export default function Hero(){

return(

<section className="hero" id="inicio">

<video
className="hero-video"
autoPlay
loop
muted
playsInline
>

<source src="/spa-video.mp4" type="video/mp4"/>

</video>

<div className="hero-overlay"></div>

<div className="hero-content">

<img src="/logo.png" className="hero-logo"/>

<h1></h1>

<p>Masajes · Faciales · Reflexologia</p>

<a
href="https://wa.me/525549001520"
target="_blank"
rel="noreferrer"
>

<button className="hero-btn">
Reservar cita
</button>

</a>

</div>

</section>

)

}