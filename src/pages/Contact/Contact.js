import './Contact.scss';
import github from '../../assets/images/github.png';
import linkedin from '../../assets/images/linkedin.png';
import CC from '../../assets/images/CC.png';
import dots from '../../assets/images/dots.png';
import lines from '../../assets/images/horizontal-lines.png';

function Contact() {
    return (
        <section className="contact">
            <h3 className="contact__heading">CONTACT</h3>

            <div className="contact__card">

                <div className="contact__details">
                    <div className="contact__type">
                        <h2 className="contact__name">Email</h2>
                        <p className="contact__info">charanpreetchall@gmail.com</p>
                    </div>
                    <div className="contact__type">
                        <h2 className="contact__name">Phone</h2>
                        <p className="contact__info">647-667-0327</p>
                    </div>
                    <div className="contact__links">
                        <a href='https://github.com/CharanpreetChall' target="_blank">
                            <img className="contact__icon" src={github} />
                        </a>
                        <a href='https://www.linkedin.com/in/charanpreet-chall-b1194037/' target="_blank">
                            <img className="contact__icon" src={linkedin} />
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