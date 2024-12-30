import image from '../../public/img/Murano-Moyen-Smoky-Transparent-4-1200x1600.jpg';
import image2 from '../../public/img/laurettebroll_imageprincipale-7.jpg';
import image3 from '../../public/img/02_Vase-plug-LEmbellie.jpeg';
import image4 from '../../public/img/AdobeStock_484867951.jpeg';
import image5 from '../../public/img/made-in-france.png';
import image6 from '../../public/img/Frame_ecoresponsable.png';
import image7 from '../../public/img/media-ceramiste-savoir 1.png';
import image8 from '../../public/img/Image 2.png';
import image9 from '../../public/img/1E9A1645-2-1-1152x1536 1.png';
import image10 from '../../public/img/Assiette_plate_01_01-1.jpg';

function Acheteur() {
  return (
    <>
      <header>
        <div className="mainImage">
          <div className="text">
            <div className="textContainer">
              <h1>Les plus belles oeuvres en verre ou en céramique faits main, par une séléction d'artisans éthiques.</h1>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='bg-main global-main-section'>
          <div className='global-first-section mb-5'>
            <img className='w-25 h-50 rounded-5' src={image} alt="Murano moyen" />
            <div>
              <h2 className='fs-30 fw-bold text-end'>Offrez-vous des<br />œuvres uniques et<br /> accessibles,<br /> <span className='color-kaki'>Made in France.</span></h2>
              <img className='rounded-5' src={image2} alt="Fleche" />
            </div>
          </div>
          <div className='global-second-section'>
            <div className=''>
              <h2 className='fs-30 fw-bold text-start'>Découvrez un <span className='color-kaki'>savoir-faire<br />artisanal</span>, dans le <span className='color-kaki'>respect<br />de l'environnement.</span></h2>
              <img className='image-vase-fleur' src={image3} alt='' />
            </div>
            <img className='image-vase-main' src={image4} alt="Vase main" />
          </div>
        </div>
        <div className='global-made-in-france bg-kaki d-flex justify-content-around align-items-center text-center p-5'>
          <div>
            <img className='image-made-france mb-4' src={image5} alt="Made in France" />
            <h4 className='mb-4 color-white fs-20'>Certifié Made in France</h4>
            <p className='mb-4 color-white fs-16'>Nos artisans partenaires certifient l'origine tracée des produits.
              <br /> Sous cette marque collective, nos artisans bénéficient d'un rayonnement national.</p>
          </div>
          <div>
            <img src={image6} alt="Eco-friendly" />
          </div>
        </div>
        <div className='global-gros-carre-blanc p-5'>
          <h3 className='fw-bold text-center mb-2'>Découvrez une communauté<br />de passionnés.</h3>
          <div className='d-flex justify-content-center align-items-center mb-100'>
            <img src={image7} alt="" />
            <img src={image8} alt="" />
            <img src={image9} alt="" />
          </div>
          <div className="global-carre-blanc bottom-5">
            <div className="col-md-6">
              <h3 className="fw-bold text-center">Explorez.</h3>
              <p className='text-start'>
                Soyez parmi les premiers à explorer l'univers fascinant de nos souffleurs de verre et céramistes. Chaque pièce est une invitation à découvrir des créations uniques, alliant techniques traditionnelles et innovations artistiques. Parcourez nos catalogues et laissez-vous séduire par leurs styles authentiques, souvent inspirés par la nature, la culture et l'histoire.
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold text-center">Soutenez.</h3>
              <p className='text-start'>
                En achetant les créations uniques de nos artisans céramistes et souffleurs de verre, vous contribuez directement à la valorisation de leur savoir-faire local. Chaque achat, chaque geste, comme ajouter un produit à vos favoris, permet à ces artisans talentueux de gagner en visibilité et de pérenniser leur activité. Ensemble, soutenons la création artisanale et offrons une nouvelle vie aux artisans parisiens.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-beige p-5">
          <div className="d-flex justify-content-center align-items-center">
            <img src={image10} alt="Ceramic Plates" className="postion-relative rounded-5 w-25 h-25 me-5" />
            {/* <div className="contact-card z-3">
              <div className='bg-kaki p-5 color-white rounded-5'>
                <h6 className='fw-bold mb-5'>Nous contacter</h6>
                <p>
                  handcraft<br />
                  52 Rue du Chemin Vert<br />
                  75011, Paris<br /><br />
                  (+33) 6 12 34 56 78<br />
                  contact@handcraft.fr
                </p>
              </div>
            </div> */}
            <div>
              <h4 className="mb-3">Leurs créations vous intéresse ?</h4>
              <p>Rentrez vos détails et recevez bi-mensuellement un<br />aperçu des dernières créations de nos artisans.</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Adresse mail</label>
                  <input type="email" className="form-control email-input" id="email" placeholder="Votre adresse mail" />
                </div>
                <button type="submit" className="btn btn-custom p-3 rounded-">Inscription</button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer className='bg-main taille-footer'>
        <div className='d-flex justify-content-around align-items-center footer-container'>
          <div>
            <p>handcraft</p>
            <ul>
              <li className='mb-3'><a>A propos</a></li>
              <li className='mb-3'><a>L'équipe</a></li>
              <li className='mb-3'><a>Le blog</a></li>
              <li className='mb-3'><a>Notre réseau</a></li>
              <li className='mb-3'><a>Nous contacter</a></li>
            </ul>
          </div>
          <div>
            <p>Notre communauté</p>
            <ul>
              <li className='mb-3'><a>Tous nos articles</a></li>
              <li className='mb-3'><a>Les artisans du verre</a></li>
              <li className='mb-3'><a>Les artisans de la<br />céramique</a></li>
            </ul>
          </div>
          <div>
            <p>Aide et informations</p>
            <ul>
              <li className='mb-3'><a>Devenir partenaires</a></li>
              <li className='mb-3'><a>Conditions générales de vente</a></li>
              <li className='mb-3'><a>Conditions générales d'utilisation</a></li>
              <li className='mb-3'><a>Mentions légales</a></li>
              <li className='mb-3'><a>Politique de confidentialité</a></li>
            </ul>
          </div>
          <div>
            <p>Réseaux sociaux</p>
            <ul>
              <li className='mb-3'><a>Instagram</a></li>
              <li className='mb-3'><a>Facebook</a></li>
              <li className='mb-3'><a>TikTok</a></li>
              <li className='mb-3'><a>X</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className='d-flex ms-5'>
          <p>© 2021 Handcraft. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  )
}

export default Acheteur