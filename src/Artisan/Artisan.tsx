import './Artisan.scss'

import HF from '../../public/img/high-five 1.png'
const Artisan = () => {
  return (
    <div id='container'> 
      <div className="mainImageAristan">
        <div className="text">
          <div className="textContainer">
            <h1>Votre talent mérite d'être vu. 
            Rejoignez une communauté d'artisans passionnés.</h1>
            <h3>Un espace dédié à ceux qui façonnent l'authenticité.</h3>
            <button className='btn border-0 rounded'>Commencer </button>
          </div>
        </div>
      </div>
      <div className="bg">
        <div className="headPres">
          <h1>Pourquoi rejoindre HandCraft ?</h1>
        </div>
        <div className="allContent">
          <div className="contentDesc">
            <div className="content-text">
              <h2>Partagez vos créations plus facilement</h2>
              <p>Grâce à notre plateforme, vous accédez à une large audience d'amateurs d'artisanat et de produits uniques. Pas besoin d'être un expert en marketing : nous nous occupons de faire briller vos créations.</p>
            </div>
            <div className="content-img" id='img-1'/>
          </div>
          <div className="contentDesc">
            <div className="content-text">
              <h2>Une mise en avant de vos valeurs.</h2>
              <p>Nous mettons en lumière l'histoire de chaque artisan et la passion derrière chaque création. Les acheteurs ne verront pas seulement un produit, mais tout le savoir-faire et l'effort qu'il représente.</p>
            </div>
            <div className="content-img" id='img-2'/>
          </div>
          <div className="contentDesc">
            <div className="content-text">
              <h2>Une solution éthique et locale</h2>
              <p>En choisissant notre plateforme, vous soutenez un écosystème qui valorise le travail artisanal et local, tout en respectant les principes de commerce équitable.</p>
            </div>
            <div className="content-img" id='img-3'></div>
          </div>
        </div>
          <div className="artisanSell">
            <div className="Artborder">
              <img src={HF} alt="" />
              <h1>Commencez à vendre <br/> vos créations aujourd'hui.</h1>
              <button className='btn rounded-pill'>S'incrire</button>
            </div>
          </div>
        </div>

        <div className="questions">
          <h1>Des réponses à vos questions.</h1>
          <div className="answers">
          <div className="accordion border-0" id="accordionExample">

              <div className="accordion-item border-0 bg-transparent">
                <h2 className="accordion-header">
                  <button className="accordion-button bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Quels sont les critères pour rejoindre handcraft ?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  Non. S'inscrire sur la plateforme est 100% gratuit et ne présente aucun abonnement.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 bg-transparent">
                <h2 className="accordion-header">
                  <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Dois-je payer des frais d'inscription ou d'abonnement ?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  Les fonds disponibles sur le compte “artisan handcraft”  peuvent être transférés automatiquement ou manuellement sur le compte bancaire du vendeur, quasi-instantané.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 bg-transparent">
                <h2 className="accordion-header">
                  <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Comment suis-je payé pour mes ventes ?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  Nous appliquons une commission de 5 % sur chaque vente, ainsi que les éventuels frais de traitement des paiements, qui sont affichés en toute transparence sur votre tableau de bord "artisan handcraft".
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 bg-transparent">
                <h2 className="accordion-header">
                  <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapsFour">
                  Suis-je responsable de la gestion des taxes sur mes ventes ?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  Chez handcraft, nous primons la mise en avant de nos artisans et créateurs. Nous mettons en avant un nouvel artiste chaque semaine, manuellement.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 bg-transparent">
                <h2 className="accordion-header">
                  <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Comment puis-je apparaître dans les sélections mises en avant sur la plateforme ?
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Chez handcraft, nous primons la mise en avant de nos artisans et créateurs. Nous mettons en avant un nouvel artiste chaque semaine, manuellement.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
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
    </div>
  )
}

export default Artisan