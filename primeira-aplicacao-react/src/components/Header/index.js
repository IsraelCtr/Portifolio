import "./styles.css"
import home from "../../assets/home.png"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
const Header =()=>{
    return (
        <header>
        <h1>
            <a  href=''><img id='home' src={home}/></a> 
        </h1>
         <a href="">Skills</a>
         <a href="">Educação
         </a>
         <a href="https://github.com/IsraelCtr">
          <img id='home' src={github}/>
          </a>
         <a href="https://www.linkedin.com/in/israel-c-466217185/">
          <img id='home' src={linkedin}/>
          </a>
        
        </header>
      )
}
export default Header
