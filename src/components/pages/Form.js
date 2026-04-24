import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Form() {
     const [name, setName] = useState("")
     const navigate = useNavigate()
     
    
      const submit = (event) =>{
        event.preventDefault()
        setName("")
        navigate(`order/${name}`)
        
    
      }
      const supprimer = (event) =>{
        setName(event.target.value)
      }
    
      
      return (
        <div>
         
         <form action="" onSubmit={submit}>
          <h1>Bienvenue chez nous </h1>
          <p>connectez vous</p>
          <input type="text" placeholder='Entrez votre prenom'  required onChange={supprimer} value={name}/>
           <button>Acceder a votre espace</button>
          <Link to="/order">voir votre espace</Link>
         </form>
    
        </div>
        
        
        
        
        
       
      )
    
}