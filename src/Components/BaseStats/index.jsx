
import './baseStats.css'
import Progress from './Progress'

const BaseStats = ({ stat, nameStat, color }) =>{
    
    return(
        <>
        <div className='stats-div'>
        <table className='stats-table'>
            <tbody>

            <tr className='trStats'>
                <td className='nameStats'>{nameStat.toUpperCase()}</td>
                <td className='stats'>{stat}</td>
                <td><Progress value={stat} max={100} color={color}></Progress></td>
            </tr>
            </tbody>
         
        </table>


        </div>
        </>
    )
}

export default BaseStats