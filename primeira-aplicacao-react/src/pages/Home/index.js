import Header from '../../components/Header/index';
import Educação from '../../components/educacao/index';
import { Projetos } from '../../components/projetos/projetos';
import projetos from '../../assets/projetos.png';
import diploma from '../../assets/diploma.png';
import { Skills } from '../../components/skills/skills';
import { Admin } from '../../components/admin/admin';

import './styles.css';
import { useState } from 'react';
import AboutMe from '../../components/AboultMe/AboutMe.js';
import CardProjeto from '../../components/CardProduto/CardProduto';

function Home() {
  const [user, setUser] = useState('');

  return (
    <div className='App'>
      <Header />
      <Admin />
      <div className='conteudo'>
        <AboutMe/>
        <hr />
      </div>
      <hr />
      <div className='titulo'>
        <h1>Skills</h1>
      </div>
      <Skills />
      <div className='titulo'>
        <h1>
          Projetos <img id='titulo' src={projetos} alt="Projetos" />
        </h1>
      </div>
      
     <Projetos>
      <CardProjeto/> 
      </Projetos>
      <hr />
      <div className='titulo'>
        <h1>
          Educação <img id='diploma' src={diploma} alt="Diploma" />
        </h1>
      </div>
      <div className='educação'>
        <Educação />
      </div>
    </div>
  );
}

export default Home;
