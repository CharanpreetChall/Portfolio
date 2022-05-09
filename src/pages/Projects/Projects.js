import './Projects.scss';
import coffee from '../../assets/images/coffee.png';
import brainflix from '../../assets/images/brainflix.png';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h3 className="projects__heading">PROJECTS</h3>

      <div className="projects__card">
        <div className="projects__details">
          <h2 className="projects__name">Coffee Shop</h2>
          <p className="projects__info">Local coffee shop website created using HTML, SASS and BEM</p>
          <a className="projects__button projects__button-pink" href='https://cc-project-coffee-shop.netlify.app/' target="_blank">VIEW LIVE SITE</a>
        </div>
        <div className="projects__image--pink">
          <img src={coffee} className="projects__image" alt='coffee' />
        </div>
      </div>

      <div className="projects__card">
        <div className="projects__image--blue">
          <img src={brainflix} className="projects__image" alt='brainflix' />
        </div>
        <div className="projects__details">
          <h2 className="projects__name">Brainflix</h2>
          <p className="projects__info">Fully responsive SPA for a video streaming platform called BrainFlix using React, Node, REST API.</p>
          <a className="projects__button projects__button-blue" href='https://cc-project-brainflix.netlify.app/' target="_blank">VIEW LIVE SITE</a>
        </div>
      </div>

    </section>
  )
}

export default Projects;