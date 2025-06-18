import React, { useRef } from 'react';
import Button from '../../components/Button'
import CardProjeto from '../CardProduto/CardProduto'
import { Link } from 'react-router-dom'
import projetosImg from '../../assets/projetos.png'; // Ajuste o caminho conforme necessário

export const Projetos = () => {
  const projetosRef = useRef(null);

  const projetosData = [
    {
      id: 1,
      titulo: "roleTrip",
      imagem: require('../../assets/projeto01.png'),
      tecnologias: ['react', 'javaScript', 'node'],
      descricaoCurta: "Sistema de gerenciamento de viagens",
       deployUrl: "https://front-role-trip.vercel.app/", // URL do deploy
    githubUrl: "https://github.com/IsraelCtr/front-role-trip" // URL do GitHub
    },

  ];

  return (
    <div className='projetos'>

      
      <div className="projetos-container">
        {projetosData.map(projeto => (
          <CardProjeto key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </div>
  );
}