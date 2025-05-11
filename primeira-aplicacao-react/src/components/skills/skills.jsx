import java from '../../assets/java.png'
import noda from '../../assets/nodejs-icon.svg'
import monga from '../../assets/mongoDB.png'
import pha from '../../assets/php.png'
import flask from '../../assets/flask.png'
import mysql from '../../assets/file-type-mysql.256x252.png'
import react from '../../assets/react.png'
import  typeScript from'../../assets/typescript.svg'

import "./estiloSkill.css"

export const Skills = ()=>{
    return(
<>
 
        <div className='skills'>

            <h2>Back-end</h2>
            <div className='containerImgTecnologia'>
                <img src={java} className="tecnologias" alt='background app'/>
                <div className='barraSkill'>   <label htmlFor="" className='barraProeficiencia'></label>
                <label htmlFor="" className='barraProeficiencia'></label>
                <label htmlFor="" className='barraProeficiencia1'></label></div>
             
            </div>
            <div className='containerImgTecnologia'>
                <img src={noda} className="tecnologias" alt='background app'/>
                <div className='barraSkill'>   <label htmlFor="" className='barraProeficiencia'></label>
                <label htmlFor="" className='barraProeficiencia'></label>
                <label htmlFor="" className='barraProeficiencia'></label></div>
             
            </div>
            <div className='containerImgTecnologia'>
                <img src={pha} className="tecnologias" alt='background app'/>
                <div className='barraSkill'>   <label htmlFor="" className='barraProeficiencia'></label>
                <label htmlFor="" className='barraProeficiencia'></label>
                <label htmlFor="" className='barraProeficiencia'></label></div>
             
            </div>

            <div className='containerImgTecnologia' >

                <img src={typeScript} className='tecnologias' alt="tecnologia typeScript" />
                <div className='barraSkill'>   <label htmlFor="" className='barraProeficiencia'></label>
                <label htmlFor="" className='barraProeficiencia'></label>
                <label htmlFor="" className='barraProeficiencia'></label></div>

            </div>





            <div className='containerImgTecnologia'>

                <img src={flask} className="tecnologias" alt='background app'/>
                <div className='barraSkill'>   <label htmlFor="" className='barraProeficiencia'></label>
                <label htmlFor="" className='barraProeficiencia'></label>
                <label htmlFor="" className='barraProeficiencia1'></label></div>

            </div>
        <h2>sgdb</h2>
            <div className='containerImgTecnologia'>

                <img src={mysql} className="tecnologias" alt='background app'/>
                <div className='barraSkill'>   <label htmlFor="" className='barraProeficiencia'></label>
                <label htmlFor="" className='barraProeficiencia'></label>
                <label htmlFor="" className='barraProeficiencia1'></label></div>

            </div>
            <div className='containerImgTecnologia'>

                <img src={monga} className="tecnologias" alt='background app'/>
                <div className='barraSkill'>   <label htmlFor="" className='barraProeficiencia'></label>
                <label htmlFor="" className='barraProeficiencia'></label>
                <label htmlFor="" className='barraProeficiencia1'></label></div>

            </div>

        <h2>Front-end</h2>
            <div className='containerImgTecnologia'>         

                <img src={react} className="tecnologias" alt='background app'/>
                <div className='barraSkill'>   
                <label htmlFor="" className='barraProeficiencia'></label>
                <label htmlFor="" className='barraProeficiencia'></label>
                <label htmlFor="" className='barraProeficiencia'></label></div>

            </div>




        </div>

        <hr/>
</>
   )
}