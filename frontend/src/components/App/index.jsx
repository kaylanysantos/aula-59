import Header from '../Header'
import './style.css'
import asaslivres from "../../assets/cd_cover.webp"


export default function App() {
  return (
    <>
      <Header title="Tocando Agora" />
      <h1>Olá mundo</h1>
      <div>
    <img className="w-80 h-80 rounded-3xl" src={asaslivres} alt="" />
    <h1 className="font-bold" >TUDO AZUL</h1>
    <h2>asas livres</h2>
  </div>
    </>
  )
}
