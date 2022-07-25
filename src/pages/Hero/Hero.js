import './Hero.scss';
import github from '../../assets/images/github.png';
import linkedin from '../../assets/images/linkedin.png';

function Hero() {
    return (
        <section className="hero">
            <p className="hero__text">Hi, my name is</p>
            <h1 className="hero__heading">Charanpreet Chall</h1>
            <h4 className="hero__subheading">FRONT END WEB DEVELOPER</h4>
            <p className="hero__text">Adept front-end developer focusing on Javascript, React and Redux, I am eager to continue expanding my knowledge into perfecting accessibile and responsive design.</p>
            <div className="hero__links">
                <a href='https://github.com/CharanpreetChall' target="_blank" rel="noopener noreferrer">
                    <img className="hero__icon icon" src={github} alt="github"/>
                </a>
                <a href='https://www.linkedin.com/in/charanpreet-chall-b1194037/' target="_blank" rel="noopener noreferrer">
                    <img className="hero__icon icon" src={linkedin} alt="linkedin"/>
                </a>
            </div>
        </section>
    )
}

export default Hero