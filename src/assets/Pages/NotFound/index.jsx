import { useNavigate } from 'react-router-dom'
import img from '../../Images/pikachu.png'
import { IoIosArrowRoundBack } from "react-icons/io";
import './notFound.css'
import Header from '../../../Components/Header';
export const NotFound =({setSearch}) =>{
    const nav = useNavigate();
    return(
        <>
        
            <Header setSearch={setSearch}/>
        <div className='container-error'>
        <div className='error-div-btn'>
            <button onClick={() =>nav(-1)} ><IoIosArrowRoundBack className='icon-error'/> Voltar</button>
        </div>
        <div className='div-error'>
            <h3 >4<img src={img} alt="Pokebola"  />4</h3>
            <h4 >Ops! Página não encontrada.</h4>
        </div>
        </div>
        
        </>
    )
}
export default NotFound