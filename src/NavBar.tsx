
import { useNavigate } from "react-router-dom"

export const NavBar = () => {

  const navigate = useNavigate()

  const logo = "../public/img/handcraftlogo.png"

  const goAcheteur = () => {
    navigate("/")
  }
  
  const goArtisan = () => {
    navigate("/artisan")

  }
  return (
    <div id="allNav">
    <div className="logo">
      <img src={logo} alt="logo Hand Craft" />
    </div>
    <div className="log">
        <button className="h-50" onClick={() => goArtisan()}>Vous êtes un artisan ?</button>
        <button className="h-50" onClick={() => goAcheteur()}>Découvrir notre univers</button>
    </div>
  </div>
)
}
