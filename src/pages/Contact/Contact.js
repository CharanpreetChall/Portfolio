import './Contact.scss';
import github from '../../assets/images/github.png';
import linkedin from '../../assets/images/linkedin.png';
import CC from '../../assets/images/CC.png';
import dots from '../../assets/images/dots.png';
import lines from '../../assets/images/horizontal-lines.png';

function Contact() {
    return (
        <section className="contact" id="contact">
            <h3 className="contact__heading">CONTACT</h3>

            <div className="contact__card">

                <div className="contact__details">
                    <div className="contact__type">
                        <h2 className="contact__name">Email</h2>
                        <a href="mailto: charanpreetchall@gmail.com" target="_blank" rel="noopener noreferrer">
                            <p className="contact__info">charanpreetchall@gmail.com</p>
                        </a>
                    </div>
                    <div className="contact__links">
                        <a href='https://github.com/CharanpreetChall' target="_blank" rel="noopener noreferrer">
                            <img className="contact__icon icon" src={github} alt="github" />
                        </a>
                        <a href='https://www.linkedin.com/in/charanpreet-chall-b1194037/' target="_blank" rel="noopener noreferrer">
                            <img className="contact__icon icon" src={linkedin} alt="linkedin"/>
                        </a>
                    </div>
                </div>

                <div className="contact__profile">
                    <img src={dots} className="contact__dots" alt="CC" />
                    <img src={CC} className="contact__image" alt="CC" />
                    <img src={lines} className="contact__lines" alt="CC" />
                </div>
            </div>

        </section>
    )
}

export default Contact