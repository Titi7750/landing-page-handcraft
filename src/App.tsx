import './App.css'
function App() {

  return (
    <>
      <header>
        <nav>
          <ul className="navbar">
            <li>
              <img className="logo" src="/public/img/handcraftlogo.png" alt="Logo Handcraft" />
            </li>
            <li><a className="bg-beige rounded color-black fs-12" href="#">Découvrir les artisans</a></li>
            <li><a className="bg-beige rounded color-black fs-12" href="#">Rejoidre la communauté</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className='bg-main'>
          <div className='d-flex justify-content-center align-items-center text-center mb-5 gap-5'>
            <img className='w-25 h-50 rounded-5' src="../public/img/Murano-Moyen-Smoky-Transparent-4-1200x1600.webp" alt="Murano moyen" />
            <div>
              <h2 className='fs-4 fw-bold text-end'>Offrez-vous des<br />œuvres uniques et<br /> accessibles,<br /> <span className='color-kaki'>Made in France.</span></h2>
              <img className='rounded-5' src="../public/img/laurettebroll_imageprincipale-7.jpg" alt="Fleche" />
            </div>
          </div>
          <div className='d-flex justify-content-center align-items-center text-center gap-5'>
            <div className=''>
              <h2 className='fs-4 text-start'>Découvrez un <span className='color-kaki'>savoir-faire<br />artisanal</span>, dans le <span className='color-kaki'>respect<br />de l’environnement.</span></h2>
              <img className='h-50 rounded-5' src='../public/img/02_Vase-plug-LEmbellie.jpeg' alt='' />
            </div>
            <img className='w-25 rounded-5' src="../public/img/AdobeStock_484867951.jpeg" alt="Vase main" />
          </div>
        </div>
        <div className='bg-kaki d-flex justify-content-around align-items-center text-center p-5'>
          <div>
            <img className='mb-4' src="../public/img/made-in-france.png" alt="Made in France" />
            <h4 className='mb-4 color-white'>Certifié Made in France</h4>
            <p className='mb-4 color-white'>Nos artisans partenaires certifient l’origine tracée des produits.
              <br /> Sous cette marque collective, nos artisans bénéficient d’un rayonnement national.</p>
          </div>
          <div>
            <img src='../public/img/Frame_ecoresponsable.png' alt="Eco-friendly" />
          </div>
        </div>
        <div className='p-5'>
          <h3 className='fw-bold text-center mb-2'>Découvrez une communauté<br />de passionnés.</h3>
          <div className='d-flex justify-content-center align-items-center'>
            <img src="../public/img/media-ceramiste-savoir 1.png" alt="" />
            <img src="../public/img/Image 2.png" alt="" />
            <img src="../public/img/1E9A1645-2-1-1152x1536 1.png" alt="" />
          </div>
        </div>
      </main>
    </>
  )
}

export default App