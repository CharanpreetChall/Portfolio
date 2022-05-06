import './TechStack.scss';
import react from '../../assets/images/react.png';
import js from '../../assets/images/js.png';
import html from '../../assets/images/html.png';
import css from '../../assets/images/css.png';
import node from '../../assets/images/node.png';
import mysql from '../../assets/images/mysql.png';
import express from '../../assets/images/express.png';
import reactrouter from '../../assets/images/reactrouter.png';
import bem from '../../assets/images/bem.png';
import axios from '../../assets/images/axios.png';
import sass from '../../assets/images/sass.png';
import npm from '../../assets/images/npm.png';


function TechStack() {
    return (
        <section className="tech">
            <h3 className="tech__heading">TECH STACK</h3>
            <div className="tech__stack">
                <div className="tech__info">
                    <img src={react} className="tech__image" alt='react' />
                    <h4>REACT</h4>
                </div>
                <div className="tech__info">
                    <img src={js} className="tech__image" alt='js' />
                    <h4>JAVASCRIPT</h4>
                </div>
                <div className="tech__info">
                    <img src={html} className="tech__image" alt='html' />
                    <h4>HTML</h4>
                </div>
                <div className="tech__info">
                    <img src={css} className="tech__image" alt='css' />
                    <h4>CSS</h4>
                </div>
                <div className="tech__info">
                    <img src={sass} className="tech__image" alt='sass' />
                    <h4>SASS</h4>
                </div>
                <div className="tech__info">
                    <img src={node} className="tech__image" alt='node' />
                    <h4>NODE</h4>
                </div>
                <div className="tech__info tech__npm">
                    <img src={npm} className="tech__image tech__image-bigger" alt='npm' />
                    <h4>NODE PACKAGE MANAGER</h4>
                </div>
                <div className="tech__info">
                    <img src={reactrouter} className="tech__image tech__image-bigger" alt='reactrouter' />
                    <h4>REACT ROUTER</h4>
                </div>
                <div className="tech__info">
                <img src={axios} className="tech__image tech__image-bigger" alt='axios' />
                    <h4 className="tech__axios-text">AXIOS</h4>
                </div>
                <div className="tech__info">
                <img src={express} className="tech__image tech__image-bigger" alt='express' />
                    <h4>EXPRESS</h4>
                </div>
                <div className="tech__info">
                <img src={mysql} className="tech__image" alt='mysql' />
                    <h4>MYSQL</h4>
                </div>
                <div className="tech__info">
                <img src={bem} className="tech__image" alt='bem' />
                    <h4>BEM</h4>
                </div>
            </div>
        </section>
    )
}

export default TechStack;