import "./estiloAdmin.css"
import admim from '../../assets/adm.png'
import { useState } from "react"

export const Admin =()=>{
    
    const [textoCopiado, setTextoCopiado] = useState(false);

  const copiarTexto = () => {
    const texto = "israel.castro.imc@gmail.com";
    navigator.clipboard.writeText(texto)
      .then(() => {
        setTextoCopiado(true); // Exibe a notificação
        setTimeout(() => {
          setTextoCopiado(false); // Remove a notificação após 2 segundos
        }, 2000);
      })
      .catch(err => {
        console.error('Erro ao copiar texto: ', err);
      });
  };
    return(
<div className="contentAdmin">
    <div className="contentText">
        <h1 id="apresentation">Hey i'm Israel</h1>
        
        <h1 className="tec"> Full-Stack Developer</h1>
        
        <button onClick={copiarTexto}id="Cv" >Send-me E-mail</button>
        
        
    </div>

    <div className="contenImg">

            <img src={admim} className="admin" alt='background app'/>
    </div>
  

</div>

)
}