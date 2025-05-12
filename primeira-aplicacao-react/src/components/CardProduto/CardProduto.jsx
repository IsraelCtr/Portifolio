import { Link } from "react-router-dom";
import "./CardProduto.css";
import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import imagem from '../../assets/react.png';
const CardProjeto = () => {

  return (
    <div className="containerCard">
    <div className="produtoimg">
      <Link to={`/produto`}>
        <img src={imagem}  id="imagemProduto"/>
        <div className="listaEstilo">
          <li className="nomeProduto">mkService</li>
          <span className="preçoDesconto"><TbBrandTypescript/>+<FaReact /></span>
          <span className="preçoDesconto"><FaNodeJs /></span>
        </div>
      </Link>
    </div>
    </div>
  );

  
};

export default CardProjeto;