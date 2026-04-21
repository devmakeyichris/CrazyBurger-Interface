import { useState } from "react"

export default function Form() {
     const [name, setName] = useState("")
     
    
      const submit = (event) =>{
        event.preventDefault()
        alert(`Bonjour ${name}`)
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
          <button>Acceder a votre espace</button>
         </form>
    
        </div>
        
        
        
        
        
       
      )
    
}