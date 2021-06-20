import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header/Header';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Experiences from '../Experiences/Experiences';
import ExperienceBook from '../Experiences/ExperienceBook';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Vision from '../Vision/Vision';
import About from '../About/About';
// import SocialLink from '../SocialLink/SocialLink';

const Home = () => {
    return (
        <main id="home">
            <Header></Header>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Experiences></Experiences>
            <Vision></Vision>
            <ExperienceBook></ExperienceBook>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </main>
    );
};

export default Home;