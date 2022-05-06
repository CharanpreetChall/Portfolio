import './Hero.scss';
import github from '../../assets/images/github.png';
import linkedin from '../../assets/images/linkedin.png';

function Hero() {
    return (
        <section className="hero">
            <p className="hero__text">Hi, my name is</p>
            <h1 className="hero__heading">Charanpreet Chall</h1>
            <h4 className="hero__subheading">FRONT END WEB DEVELOPER</h4>
            <p className="hero__text">My affinity for content creation and problem-solving sustained my career as a filmmaker for over ten years in India and Canada. I  have now expanded my reach by learning to create on the web!</p>
            <div className="hero__links">
                <a href='https://github.com/CharanpreetChall' target="_blank">
                    <img className="hero__image" src={github} />
                </a>
                <a href='https://www.linkedin.com/in/charanpreet-chall-b1194037/' target="_blank">
                    <img className="hero__image" src={linkedin} />
                </a>
            </div>
        </section>
    )
}

export default Hero