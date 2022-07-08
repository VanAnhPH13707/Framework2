import React from 'react'
import styles from './square.module.css'
// const Square = ()=>{
//     const [status, setStatus] = useState(false)
//     return <button onClick={()=> setStatus(!status)} className={styles.square}> {status ? "X": null}</button>
// }
const Square = ({value, handleClick, index,  winnerGame})=>{
    return <button className={styles.square} style={winnerGame ? {opacity: '0.5', pointerEvents:'none'}: {}} onClick={ () => handleClick(index)} > {value}</button>
    
}
export default Square
