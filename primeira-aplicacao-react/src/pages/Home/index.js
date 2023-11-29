import Header from '../../components/Header/index'
import Educação from '../../components/educacao/index'

import admim from '../../assets/foto.png'
import java from '../../assets/java.png'
import py from '../../assets/python.512x509.png'
import flask from '../../assets/flask.png'
import mysql from '../../assets/file-type-mysql.256x252.png'
import react from '../../assets/react.png'
import projetos from '../../assets/projetos.png'
import skill from '../../assets/skill.png'
import faculdade from '../../assets/faculdade.png'

import diploma from '../../assets/diploma.png'
import {useState} from 'react'

import AboutMe from '../../components/AboultMe'
import Button from '../../components/Button'
import'./styles.css'
function App() {
  const[user,setUser] = useState('');
  return (
    <div className='App'>
        <Header />
        <div className='conteudo'>
            <img src={admim} className="background" alt='background app'/>
            <AboutMe/>
            <hr/>
        </div>
        <hr/>
        <div className='titulo'>
        
          <h1>
            Projetos <img id='titulo' src={projetos}/>
            </h1>
            </div>
        <div className='projetos'>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
        </div>
        <hr/>
        <div className='titulo'>
          <h1>Skills <img id='titulo' src={skill}/></h1> 
        </div>
        <div className='skills'>
        <img src={java} className="tecnologias" alt='background app'/>
        <img src={py} className="tecnologias" alt='background app'/>
        <img src={flask} className="tecnologias" alt='background app'/>
        <img src={mysql} className="tecnologias" alt='background app'/>
        <img src={react} className="tecnologias" alt='background app'/>
        </div>
        <hr/>
        <div className='titulo'>
          <h1>Educação <img id='diploma' src={diploma}/></h1> 
        </div>
        <div className='educação'>
        <img src={faculdade} className="imgEducação" alt='background app'/>
        <Educação/>
        
        </div>
    </div>
  )
}
export default App