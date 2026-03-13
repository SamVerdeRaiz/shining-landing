export default function WhatsappButton(){

const phone="525549001520"

const message="Hola, quiero reservar una cita en Shining Salon"

const url=`https://wa.me/${phone}?text=${encodeURIComponent(message)}`

return(

<a
href={url}
target="_blank"
rel="noreferrer"
className="whatsapp-button"
>

💬

</a>

)

}