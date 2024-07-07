import './info.css'
import { RiWeightLine } from "react-icons/ri";
import { LiaRulerVerticalSolid } from "react-icons/lia";
const Info= ({weight, height, ability01, ability02}) =>{
    return(
        <>
        <div className='infos-container'>
            <div className='weight-div'>
               <h5> <RiWeightLine className='icon-info' />{weight}</h5>
               <p>Peso</p>
            </div>
            <div className='height-div'>
               <h5> <LiaRulerVerticalSolid className='icon-info'/>{height}</h5>
               <p>Altura</p>
            </div>
            <div className='abilities-div'>
               <h5> {ability01} </h5>
               <h5 className='ability02'> {ability02}</h5>
               <p>Habilidades</p>
            </div>
        </div>
        </>
    )
}

export default Info