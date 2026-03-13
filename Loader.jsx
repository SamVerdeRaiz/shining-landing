import { useEffect, useState } from "react"

export default function Loader(){

const [loading,setLoading]=useState(true)

useEffect(()=>{

setTimeout(()=>{

setLoading(false)

},2000)

},[])

if(!loading) return null

return(

<div className="loader">

<h2>Shining Salon</h2>

</div>

)

}