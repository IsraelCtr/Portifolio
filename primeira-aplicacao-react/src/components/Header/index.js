import "./styles.css";
import github from "../../assets/github.png";

const Header = ({ skillsRef, projetosRef, educacaoRef, aboutMeRef }) => {
  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <header>
      <div className="titulo">
        <a className="rodape" onClick={() => scrollTo(aboutMeRef)}>
          Sobre Mim
        </a>
        
        <a className="rodape" onClick={() => scrollTo(skillsRef)}>
          Skills
        </a>

        <a className="rodape" onClick={() => scrollTo(projetosRef)}>
          Projetos
        </a>

        <a className="rodape" onClick={() => scrollTo(educacaoRef)}>
          Educação
        </a>
      </div>

      <div className="gth">
        <a href="https://github.com/IsraelCtr" target="_blank" rel="noopener noreferrer">
          <img id='home' src={github} alt="GitHub"/>
        </a>
      </div>
    </header>
  );
};

export default Header;