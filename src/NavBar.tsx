
import { useNavigate } from "react-router-dom"

export const NavBar = () => {

  const navigate = useNavigate()

  const goAcheteur = () => {
    navigate("/")
  }
  
  const goArtisan = () => {
    navigate("/artisan")

  }
  return (
    <div id="allNav">
    <div className="logo">
      <img src="../public/img/handcraftlogo.png" alt="logo Hand Craft" />
    </div>
    <div className="log">
        <button onClick={() => goArtisan()}>Vous êtes un artisan ?</button>
        <button onClick={() => goAcheteur()}>Découvrir notre univers</button>
    </div>
  </div>
)
}
