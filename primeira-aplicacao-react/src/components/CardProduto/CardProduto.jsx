import { Link } from "react-router-dom";
import "./CardProduto.css";
import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

const CardProjeto = () => {

  return (
    <div>
    <div className="produtoimg">
      <Link to={`/produto`}>
        <img src='../../assets/mkService.png'  className="imagemProduto"/>
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