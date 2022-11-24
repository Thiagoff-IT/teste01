
import react from 'react'
import Slide from '../../assets/image/Slide01.png'
import Fundo from '../../assets/image/fundo.png'
import Fundo2 from '../../assets/image/fundo02.png'

import './styles.css';

export default function Home() {

  return (
    <>
  
      <img src={Slide} className="slides"/>
      <img src={Fundo} className="fundo"/>
      <img src={Fundo2} className="fundo2"/>
    </>
  )
}
