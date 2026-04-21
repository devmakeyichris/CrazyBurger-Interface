import { useState } from "react"
import { Link } from "react-router-dom"

export default function Form() {
     const [name, setName] = useState("")
     
    
      const submit = (event) =>{
        event.preventDefault()
        setName("")
        
    
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
          <Link to="/order">
          <button>Acceder a votre espace
            
          </button>
          </Link>
         </form>
    
        </div>
        
        
        
        
        
       
      )
    
}