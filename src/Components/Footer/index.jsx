import pokebola from "../../assets/Images/Pokeball.png";
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
        <img src={pokebola} alt="Pokebola" />
        <p>Desenvolvido por  <a href="https://github.com/AlanaCarolayne" target="_blank" >
          Alana
        </a> </p>
       
     
    </footer>
  );
};

export default Footer;
