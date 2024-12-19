import './App.css'

function App() {

  return (
    <>
      <header>
        {/* <nav>
          <ul className="navbar">
            <li>
              <img className="logo" src="/public/img/handcraftlogo.png" alt="Logo Handcraft" />
            </li>
            <li className='button'><a className="bg-beige rounded color-black fs-12" href="#">Découvrir les artisans</a></li>
            <li className='button'><a className="bg-beige rounded color-black fs-12" href="#">Rejoidre la communauté</a></li>
          </ul>
        </nav> */}
        <div id="allNav">
          <div className="logo">
            <img src="../public/img/handcraftlogo.png" alt="logo Hand Craft" />
          </div>
          <div className="log">
            <button>Découvrir les artisans</button>
            <button>Notre sélection de produits</button>
          </div>
        </div>
        <div className="mainImage">
          <div className="text">
            <div className="textContainer">
              <h1>Les plus belles oeuvres en verre ou en céramique faits main, par une séléction d’artisans éthiques.</h1>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='bg-main global-main-section'>
          <div className='global-first-section mb-5'>
            <img className='w-25 h-50 rounded-5' src="../public/img/Murano-Moyen-Smoky-Transparent-4-1200x1600.webp" alt="Murano moyen" />
            <div>
              <h2 className='fs-30 fw-bold text-end'>Offrez-vous des<br />œuvres uniques et<br /> accessibles,<br /> <span className='color-kaki'>Made in France.</span></h2>
              <img className='rounded-5' src="../public/img/laurettebroll_imageprincipale-7.jpg" alt="Fleche" />
            </div>
          </div>
          <div className='global-second-section'>
            <div className=''>
              <h2 className='fs-30 fw-bold text-start'>Découvrez un <span className='color-kaki'>savoir-faire<br />artisanal</span>, dans le <span className='color-kaki'>respect<br />de l’environnement.</span></h2>
              <img className='image-vase-fleur' src='../public/img/02_Vase-plug-LEmbellie.jpeg' alt='' />
            </div>
            <img className='image-vase-main' src="../public/img/AdobeStock_484867951.jpeg" alt="Vase main" />
          </div>
        </div>
        <div className='global-made-in-france bg-kaki d-flex justify-content-around align-items-center text-center p-5'>
          <div>
            <img className='image-made-france mb-4' src="../public/img/made-in-france.png" alt="Made in France" />
            <h4 className='mb-4 color-white fs-20'>Certifié Made in France</h4>
            <p className='mb-4 color-white fs-16'>Nos artisans partenaires certifient l’origine tracée des produits.
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
        <div className="global-carre-blanc position-absolute bottom-5">
          <div className="col-md-6">
            <h3 className="fw-bold text-center">Explorez.</h3>
            <p className='text-start'>
              Soyez parmi les premiers à explorer l’univers fascinant de nos souffleurs de verre et céramistes. Chaque pièce est une invitation à découvrir des créations uniques, alliant techniques traditionnelles et innovations artistiques. Parcourez nos catalogues et laissez-vous séduire par leurs styles authentiques, souvent inspirés par la nature, la culture et l'histoire.
            </p>
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold text-center">Soutenez.</h3>
            <p className='text-start'>
              En achetant les créations uniques de nos artisans céramistes et souffleurs de verre, vous contribuez directement à la valorisation de leur savoir-faire local. Chaque achat, chaque geste, comme ajouter un produit à vos favoris, permet à ces artisans talentueux de gagner en visibilité et de pérenniser leur activité. Ensemble, soutenons la création artisanale et offrons une nouvelle vie aux artisans parisiens.
            </p>
          </div>
        </div>
        <div>

        </div>
      </main>
    </>
  )
}

export default App