  import Input from "../Input";
  import pokebola from "../../assets/Images/Pokeball.png";
  import "./header.css";

  const Header = ({ setSearch}) => {
    return (
      <header className="header">
        <div className="header-logo">
          <img src={pokebola} alt="Pokebola" className="header-img" />
          <h1 className="header-title">Pokédex</h1>
        </div>
        <div className="header-input">
          <Input setSearch={setSearch} />
        </div>
      </header>
    );
  };
  export default Header;
