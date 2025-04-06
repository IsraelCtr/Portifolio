import java from '../../assets/java.png'
import py from '../../assets/python.512x509.png'
import flask from '../../assets/flask.png'
import mysql from '../../assets/file-type-mysql.256x252.png'
import react from '../../assets/react.png'
import  typeScript from'../../assets/typescript.svg'

import "./estiloSkill.css"

export const Skills = ()=>{
    return(
<>
 
        <div className='skills'>


            <div className='containerImgTecnologia'>
                <img src={java} className="tecnologias" alt='background app'/>
                <label htmlFor="" className='barraProeficiencia'></label>
            </div>



            <div className='containerImgTecnologia'>
                <img src={py} className="tecnologias" alt='background app'/>
                <label htmlFor="" className='barraProeficiencia'></label>
            </div>



            <div className='containerImgTecnologia'>

                <img src={flask} className="tecnologias" alt='background app'/>
                <label htmlFor="" className='barraProeficiencia'></label>

            </div>

            <div className='containerImgTecnologia'>

                <img src={mysql} className="tecnologias" alt='background app'/>
                <label htmlFor="" className='barraProeficiencia'></label>

            </div>

            <div className='containerImgTecnologia'>         

                <img src={react} className="tecnologias" alt='background app'/>
                <label htmlFor="" className='barraProeficiencia'></label>

            </div>

            <div className='containerImgTecnologia' >

                <img src={typeScript} className='tecnologias' alt="tecnologia typeScript" />
                <label htmlFor="" className='barraProeficiencia'/>

            </div>



        </div>

        <hr/>
</>
   )
}