import { Link } from "react-router-dom";
import "./CardProduto.css";
import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import imagem from '../../assets/react.png';
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaGit } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb, SiPostgresql, SiDjango, SiSpringboot } from "react-icons/si";
const techIcons = {
  typescript: <TbBrandTypescript />,
  javascript: <TbBrandJavascript />,
  react: <FaReact />,
  node: <FaNodeJs />,
  python: <FaPython />,
  java: <FaJava />,
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  mongodb: <SiMongodb />,
  postgresql: <SiPostgresql />,
  git: <FaGit />,
  django: <SiDjango />,
  springboot: <SiSpringboot />
};
const CardProjeto = ({projeto}) => {

  return (
    <div className="containerCard">
    <div className="produtoimg">
      <Link to={`/produto${projeto.id}`}>
          <img src={projeto.imagem}  id="imagemProduto"/>

        <div className="listaEstilo">

          <li className="nomeProduto">{projeto.tituto}</li>
          <div>
                {projeto.tecnologias.map((tech, index) => (

                <span key={index} className="tech-icon" title={tech}>
                  
                  {techIcons[tech.toLowerCase()] || tech}                
                  
                </span>
              ))} 

          </div>
                  <span className = "descricao">{projeto.descricaoCurta}
                  </span>
                            <div className="botoes-projeto">
            {projeto.deployUrl && (
              <a 
                href={projeto.deployUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="botao-projeto"
                onClick={(e) => e.stopPropagation()}
              >
                 Ver Projeto
              </a>
            )}
            
            {projeto.githubUrl && (
              <a 
                href={projeto.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="botao-projeto"
                onClick={(e) => e.stopPropagation()}
              >
                 Código Fonte
              </a>)}
              </div>
                  
        </div>
              
              
      </Link>
    </div>
    </div>
  );

  
};

export default CardProjeto;